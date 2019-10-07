import ActivityConstants from '../modules/util/ActivityConstants';
import ResourceConstants from './constants/ResourceConstants';

export default class UIUtils {
  static stringToId(string: string) {
    string = string || '';
    let hash = 5381;
    for (let i = string.length - 1; i >= 0; i--) {
      /* eslint-disable no-bitwise */
      hash = (hash * 33) ^ string.charCodeAt(i);
    }
    return hash >>> 0;
    /* eslint-enable no-bitwise */
  }

  /**
   * Generates a unique id for each call, over the same string
   * @param string
   * @return {string}
   */
  static stringToUniqueId(string: string) {
    return `${this.stringToId(string)}-${Date.now()}-${Math.random()
      .toString()
      .substring(2)}`;
  }

  static numberRandom() {
    return Math.trunc((Math.random() * 1000000));
  }

  static capitalize(text: string) {
    return text.replace(/(?:^|\s)\S/g, char => char.toUpperCase());
  }

  static cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static getItemTitle(item, valueField, PossibleValuesManager, rtl) {
    const obj = item[valueField];
    let values = obj[ActivityConstants.HIERARCHICAL_VALUE] ?
      obj[ActivityConstants.HIERARCHICAL_VALUE] :
      PossibleValuesManager.getOptionTranslation(obj);
    if (rtl) {
      // We need to reverse the order of a string with format "[Haiti][Artibonite][Saint-Marc Arrondissement]".
      if (values && values.indexOf(']') > -1) {
        values = values.replace(/[[]/gm, '').split(']').reverse().filter(i => i.length > 0);
        values = `[${values.toString().replace(/[,]/g, '][')}]`;
      }
    }
    return values;
  }

  static getItemTitleForOrganizations(item) {
    const org = item[ActivityConstants.ORGANIZATION];
    const orgTitle = org[ActivityConstants.HIERARCHICAL_VALUE] ? org[ActivityConstants.HIERARCHICAL_VALUE] : org.value;
    const additionalInfo = item[ActivityConstants.ADDITIONAL_INFO];
    if (additionalInfo) {
      return `${orgTitle} (${additionalInfo})`;
    }
    return orgTitle;
  }

  static getActivityResourceUuids(activity) {
    const resources = new Set();
    const docs = activity[ActivityConstants.ACTIVITY_DOCUMENTS];
    if (docs && docs.length) {
      docs.forEach(d => resources.add((d[ResourceConstants.UUID] &&
        d[ResourceConstants.UUID][ResourceConstants.UUID]) || d[ResourceConstants.UUID]));
    }
    return Array.from(resources);
  }
}
