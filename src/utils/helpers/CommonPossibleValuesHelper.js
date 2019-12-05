import FieldPathConstants from '../FieldPathConstants';

const CommonPossibleValuesHelper = {
  /**
   * Transforms data from AMP format to local format
   * @param fieldPath
   * @param possibleOptionsFromAMP
   * @return {{id: String, field-path: (Array|*), possible-options: { id: (String|Integer) }}}
   */
  transformToClientUsage([fieldPath, possibleOptionsFromAMP]) {
    const fieldPathParts = !fieldPath ? [] : fieldPath.split('~');
    const possibleOptions = this._transformOptions(possibleOptionsFromAMP);
    const possibleValuesForLocalUsage = {
      id: fieldPath,
      [FieldPathConstants.FIELD_PATH]: fieldPathParts,
      [FieldPathConstants.FIELD_OPTIONS]: possibleOptions
    };
    return possibleValuesForLocalUsage;
  },

  _transformOptions(possibleOptionsFromAMP, parentId, possibleOptions = {}) {
    if (Array.isArray(possibleOptionsFromAMP)) {
      possibleOptionsFromAMP.forEach(option => {
        possibleOptions[option.id] = option;
        option.parentId = parentId;
        if (option.children) {
          this._transformOptions(option.children, option.id, possibleOptions);
          // sort once at sync up
          option.reverseSortedChildren = option.children.sort(this.reverseSortOptions)
            .map(o => o.id);
          delete option.children;
        }
      });
    } else {
      // delegating data structure validation to the point it will be saved to DB, now keeping options as is
      possibleOptions = possibleOptionsFromAMP;
    }
    return possibleOptions;
  },

  reverseSortOptions(o1, o2) {
    if (o1 === o2) {
      return 0;
    }
    if (o1 === null || (o2 && o1.value === null)) {
      return 1;
    }
    if (o2 === null || o2.value === null) {
      return -1;
    }
    if (o1.extra_info && o1.extra_info.index !== undefined) {
      return o2.extra_info.index - o1.extra_info.index;
    }
    return o1.value.localeCompare(o2.value) * (-1);
  }
};
export default CommonPossibleValuesHelper;
