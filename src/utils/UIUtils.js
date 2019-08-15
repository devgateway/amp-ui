import Constants from './Constants';

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

  static toMap(key, value) {
    const result = {};
    result[key] = value;
    return result;
  }

  /**
   * Expects a list of map elements that contain ids and extracts those ids into a flatten list
   * @param listOfMap a list of map elements, each having id field e.g. [ { id: 1, ...}, { id: 2,... }, ...]
   * @param key the key to use to convert each map to the value of this key
   * @return flatten list of ids, e.g. [1, 2, ...]
   */
  static flattenToListByKey(listOfMap, key) {
    return listOfMap.reduce((acc, val) => acc.concat(val[key]), []);
  }

  /**
   * Converts a list of objects (e.g. from DB query) to a Map by specified unique key (e.g. usually id)
   * @param listOfMap
   * @param key (optional) the key to map by. Default is 'id'.
   * @return {Map}
   */
  toMapByKey(listOfMap, key = 'id') {
    return listOfMap.reduce((acc, val) => acc.set(val[key], val), new Map());
  }

  /**
   * Wait for the specified timeout
   * @param timeout in milliseconds
   * @return {Promise}
   */
  delay(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }

  static capitalize(text: string) {
    return text.replace(/(?:^|\s)\S/g, char => char.toUpperCase());
  }

  static stripTags(tagString) {
    if (tagString) {
      const htmlTags = /<[^>]*>/g;
      const noTags = tagString.replace(htmlTags, '');
      return noTags;
    }
    return '';
  }

  static joinMessages(messages: Array, endPunctuationIfMissing = '.') {
    return messages && messages.map(m => {
      const msg = `${m.message || m}`;
      if (!msg.match(Constants.ENDS_WITH_PUNCTUATION_REGEX)) {
        return `${msg}${endPunctuationIfMissing}`;
      }
      return msg;
    })
      .join(' ');
  }

  /**
   * Show in the highest unit or exact unit if such is given
   * @param bytes
   * @param exactUnit
   * @return {{value: string, label: string}}
   */
  static simplifyDataSize(bytes, exactUnit) {
    const convertTo = ['Bytes', 'KB', 'MB', 'GB'];
    let value = bytes;
    const label = convertTo.find(unit => {
      if ((value / 1024 < 1 && !exactUnit) || (exactUnit === unit)) {
        return true;
      }
      value /= 1024.0;
      return false;
    });
    return { value, label };
  }

  static compareWithCollate(text1, text2, collator) {
    collator = collator || { sensitivity: 'base', ignorePunctuation: true };
    return new Intl.Collator('us', collator).compare(text1, text2);
  }

  static arrayFlatMap(array: Array) {
    return array.reduce((result, elem) => result.concat(elem), []);
  }

  static cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static selfBindMethods(obj) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(obj))
      .filter(prop => typeof obj[prop] === 'function')
      .forEach(methodName => {
        obj[methodName] = obj[methodName].bind(obj);
      });
  }
};
