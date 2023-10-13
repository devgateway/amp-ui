/* eslint-disable class-methods-use-this */
import Constants from '../../utils/Constants';
import FieldPathConstants from '../../utils/FieldPathConstants';

/**
 * This is a helper class for checking fields status, getting field options translations and the like.
 *
 * @author Nadejda Mandrescu
 */
export default class FieldsManager {
  /**
   * Shallow clone of another newFieldsManager
   * @param fieldsManager
   * @return {FieldsManager}
   */
  static clone(fieldsManager: FieldsManager, LoggerManager) {
    const newFieldsManager = new FieldsManager([], [], null,
      LoggerManager);
    Object.assign(newFieldsManager, fieldsManager);
    return newFieldsManager;
  }

  constructor(fieldsDef, possibleValuesCollection, currentLanguage, LoggerManager, prefix) {
    // TODO remove cache
    this._fieldsDef = fieldsDef;
    this._possibleValuesMap = {};
    possibleValuesCollection.forEach(pv => {
      this._possibleValuesMap[pv.id] = pv[FieldPathConstants.FIELD_OPTIONS];
    });
    this._fieldPathsEnabledStatusMap = {};
    this._prefix = prefix || null;
    this._lang = currentLanguage || Constants.LANGUAGE_ENGLISH;
    this._defaultLang = Constants.LANGUAGE_ENGLISH;
    this.cleanup(fieldsDef);
  }

  cleanup(fieldsDef) {
    // TODO decide either to keep cleanup (here or anywhere else) or check if we need to standardize API
    fieldsDef.forEach(fd => {
      if (fd.children) {
        this.cleanup(fd.children);
      }
      if (fd.field_label) {
        Object.keys(fd.field_label).forEach(lang => {
          fd.field_label[lang.toLowerCase()] = fd.field_label[lang];
        });
      }
    });
  }

  set currentLanguageCode(lang) {
    this._lang = lang;
  }

  set defaultLanguageCode(lang) {
    this._defaultLang = lang;
  }

  get fieldsDef() {
    return this._fieldsDef;
  }

  get possibleValuesMap() {
    return this._possibleValuesMap;
  }

  getPossibleValuesOptions(fieldPath) {
    return Object.values(this._possibleValuesMap[fieldPath]);
  }

  isFieldPathByPartsEnabled(...pathParts) {
    return this.isFieldPathEnabled(pathParts.join('~'));
  }

  /**
   * Checks if the specified field path is enabled in AMP FM
   * @param fieldPath
   * @return {boolean}
   */
  isFieldPathEnabled(fieldPath) {
    if (this._fieldPathsEnabledStatusMap[fieldPath] === undefined) {
      this._buildFieldPathStatus(fieldPath);
    }
    return this._fieldPathsEnabledStatusMap[fieldPath];
  }

  _buildFieldPathStatus(fieldPath) {
    const pathParts = fieldPath.split('~');
    let currentTree = this._fieldsDef;
    const isDisabled = pathParts.some(part => {
      currentTree = currentTree.find(field => field.field_name === part);
      if (currentTree && ((currentTree[FieldPathConstants.FIELD_TYPE] === FieldPathConstants.FIELD_TYPE_LIST
        && currentTree[FieldPathConstants.FIELD_ITEM_TYPE] === FieldPathConstants.FIELD_TYPE_OBJECT)
        || currentTree[FieldPathConstants.FIELD_TYPE] === FieldPathConstants.FIELD_TYPE_OBJECT)) {
        currentTree = currentTree.children;
      }
      return !currentTree;
    });
    this._fieldPathsEnabledStatusMap[fieldPath] = !isDisabled;
  }

  /**
   * Find the translation for the original value for the given field path, if found, otherwise returns null
   * @param fieldPath
   * @param origValue
   * @return {string|null}
   */
  getValueTranslation(fieldPath, origValue) {
    // fallback to original untranslated value
    let trnValue = origValue;
    const options = this._possibleValuesMap[fieldPath];
    if (options) {
      const option = Object.values(options).find(opt => opt.value === origValue);
      if (option !== undefined) {
        const translations = option['translated-value'];
        if (translations) {
          trnValue = translations[this._lang] || translations[this._defaultLang] || trnValue;
        }
      }
    }
    return trnValue;
  }

  getFieldLabelTranslation(fieldPath, prefix) {
    let trnLabel = null;
    const fieldsDef = this.getFieldDef(fieldPath);
    if (fieldsDef !== undefined) {
      if (prefix === null || prefix === undefined || prefix === '') {
        prefix = this._prefix || Constants.DEFAULT_WORKSPACE_PREFIX;
      }
      if (fieldsDef && fieldsDef.field_label) {
        if (fieldsDef.field_label[prefix]) {
          trnLabel = fieldsDef.field_label[prefix][this._lang] ||
            fieldsDef.field_label[prefix][this._defaultLang] ||
            null;
        } else {
          trnLabel = fieldsDef.field_label[Constants.DEFAULT_WORKSPACE_PREFIX][this._lang] ||
            fieldsDef.field_label[Constants.DEFAULT_WORKSPACE_PREFIX][this._defaultLang] ||
            null;
        }
      }
    }
    return trnLabel;
  }

  getFieldDef(fieldPath) {
    let fieldsDef = this._fieldsDef;
    if (fieldPath) {
      fieldPath.split('~').some(part => {
        if (!(fieldsDef instanceof Array)) {
          fieldsDef = fieldsDef.children;
        }
        fieldsDef = fieldsDef.find(fd => fd.field_name === part);
        return fieldsDef === undefined;
      });
    } else {
      fieldsDef = { children: fieldsDef };
    }
    return fieldsDef;
  }

  getFieldPathsByDependencies(dependencies) {
    const fieldPaths = [];
    this._getFieldPathsByDependencies(dependencies, this._fieldsDef, '', fieldPaths);
    return fieldPaths;
  }

  _getFieldPathsByDependencies(dependencies, fieldsDef, currentPath, fieldPaths: Array) {
    if (!(fieldsDef instanceof Array)) {
      fieldsDef = fieldsDef.children;
    }
    fieldsDef.forEach(fd => {
      const hasDependency = fd.dependencies && fd.dependencies.some(dep => dependencies.includes(dep));
      if (fd.children || hasDependency) {
        const fieldPath = `${currentPath}${fd.field_name}`;
        if (hasDependency) {
          fieldPaths.push(fieldPath);
        }
        if (fd.children) {
          this._getFieldPathsByDependencies(dependencies, fd.children, `${fieldPath}~`, fieldPaths);
        }
      }
    });
  }

  getValue(object, fieldPath, getOptionTranslation) {
    return FieldsManager.getValue(object, fieldPath, getOptionTranslation);
  }

  static getValue(object, fieldPath, getOptionTranslation) {
    const parts = fieldPath ? fieldPath.split('~') : [];
    let value = object;
    parts.some(part => {
      if (value instanceof Array) {
        const newList = [];
        value.forEach(current => {
          const newElement = current[part];
          if (newElement !== undefined && newElement !== null) {
            newList.push(newElement);
          }
        });
        value = newList;
      } else {
        value = value[part];
      }
      return value === undefined || value === null || value.length === 0;
    });
    if (value !== undefined && value !== null && value.length !== 0) {
      let values = [].concat(value);
      values = values.map(val => {
        if (val.value === undefined) {
          return val;
        }
        return getOptionTranslation(val, this._lang, this._defaultLang);
      });
      value = value instanceof Array ? values : values[0];
    }
    return value;
  }
}
