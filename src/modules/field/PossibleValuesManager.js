import FieldPathConstants from '../../utils/FieldPathConstants';
import FieldsManager from './FieldsManager';
import Constants from '../../utils/Constants';
import ActivityConstants from '../util/ActivityConstants';
import CurrencyRatesManager from '../util/CurrencyRatesManager';


/**
 * Possible Values manager that allows to fill in additional information and transformations
 * @author Nadejda Mandrescu
 */
export default class PossibleValuesManager {
  static _langState = {
    lang: Constants.LANGUAGE_ENGLISH,
    defaultLang: Constants.LANGUAGE_ENGLISH
  };

  static _logger;

  static setLangState(langState) {
    PossibleValuesManager._langState = langState;
  }

  static setLogger(Logger) {
    PossibleValuesManager._logger = new Logger('Possible values manager');
  }
  static buildFormattedHierarchicalValues(options) {
    // TODO optimize
    const hOptions = {};
    Object.values(options).forEach(option => {
      hOptions[option.id] = PossibleValuesManager.buildHierarchicalData(options, option.id);
    });
    return hOptions;
  }

  static buildHierarchicalData(options, selectedId) {
    const option = Object.assign({}, options[selectedId]);
    const valueParts = PossibleValuesManager.getHierarchicalValue(options, selectedId);
    option[ActivityConstants.HIERARCHICAL_VALUE] = PossibleValuesManager.formatValueParts(valueParts);
    option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = (valueParts && valueParts instanceof Array) ?
      valueParts.length : 0;
    return option;
  }

  static getHierarchicalValue(options, selectedId) {
    const nameParts = [];
    let current = options[selectedId];
    while (current) {
      nameParts.push(PossibleValuesManager.getOptionTranslation(current));
      current = options[current.parentId];
    }
    return nameParts;
  }

  static formatValueParts(valueParts) {
    return (valueParts && valueParts instanceof Array) ? `[${valueParts.reverse().join('][')}]` : valueParts;
  }

  /**
   * Fills hierarchical depth of each option
   * @param options
   */
  static fillHierarchicalDepth(options) {
    Object.values(options).forEach(option => {
      PossibleValuesManager._fillHierarchicalDepth(options, option);
    });
    return options;
  }

  static _fillHierarchicalDepth(options, option) {
    if (!option) {
      PossibleValuesManager._logger.error(`option is unspecified: ${option}`);
      return 0;
    }
    let depth = option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH];
    if (depth === undefined) {
      // So far it is based on the current locations extra info approach
      if (option.parentId) {
        const parent = options[option.parentId];
        depth = 1 + PossibleValuesManager._fillHierarchicalDepth(options, parent);
      } else {
        depth = 0;
      }
      option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = depth;
    }
    return depth;
  }

  static findOption(options, id) {
    return Object.values(options).find(o => o.id === id);
  }

  static findOptionByValue(options, value) {
    return Object.values(options).find(o => o.value === value);
  }

  static getOptionTranslation(option) {
    let resVal = option.value;
    const translations = option['translated-value'];
    if (translations !== undefined) {
      const langState = PossibleValuesManager._langState;
      resVal = translations[langState.lang] || translations[langState.defaultLang] || resVal;
    }
    return resVal ? resVal.trim() : resVal;
  }

  static setVisibility(options, fieldPath, currencyRatesManager: CurrencyRatesManager, filters, isORFilter = false,
    selectedId) {
    const isLocations = FieldPathConstants.LOCATION_PATH === fieldPath;
    const isCurrency = FieldPathConstants.PATHS_FOR_CURRENCY.has(fieldPath);
    options = { ...options };
    Object.values(options).forEach(option => {
      option.visible = !isORFilter;
      if (isLocations) {
        option.displayHierarchicalValue = true;
      } else if (isCurrency) {
        option[FieldPathConstants.FIELD_OPTION_USABLE] =
          PossibleValuesManager.isCurrencyOptionUsable(option, currencyRatesManager);
        if (!option[FieldPathConstants.FIELD_OPTION_USABLE]) {
          option.visible = option.id === selectedId;
        }
      }
    });
    if (filters) {
      filters.forEach(filter => {
        const filterBy = filter.value;
        Object.values(options).forEach(option => {
          const optionDataToCheck = FieldsManager.getValue(option, filter.path);
          if ((isORFilter || option.visible) && optionDataToCheck && (
            (optionDataToCheck instanceof Array && optionDataToCheck.includes(filterBy)) ||
            (optionDataToCheck === filterBy))) {
            option.visible = true;
          } else if (isORFilter) {
            // Do nothing, keep it visible/invisible.
          } else {
            option.visible = false;
          }
        });
      });
    }
    return options;
  }

  static isCurrencyOptionUsable(option, currencyRatesManager: CurrencyRatesManager) {
    const hasExchangeRates = currencyRatesManager.currenciesWithExchangeRates.has(option.value);
    const isActive = option.extra_info && option.extra_info.active;
    return isActive && hasExchangeRates;
  }

  static getTreeSortedOptionsList(optionsObj, reverseSortOptions) {
    const added = new Set();
    const optionsList = [];
    const idsStack = Object.values(optionsObj).filter(o => !o.parentId).sort(reverseSortOptions)
      .map(o => o.id);
    while (idsStack.length) {
      const id = idsStack.pop();
      if (!added.has(id)) {
        const option = optionsObj[id];
        if (option.reverseSortedChildren) {
          idsStack.push(...option.reverseSortedChildren);
        }
        added.add(id);
        optionsList.push(option);
      }
    }
    return optionsList;
  }
}
