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

  static padNumbers(str) {
    return (typeof str === 'string')
      ? str.replace(/[0-9]+/g, v => v.padStart(10, '0'))
      : str;
  }

  static sortByLocalCompare(a, b) {
    if (!a && !b) {
      return 0;
    } else if (!a) {
      return 1;
    } else if (!b) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  }

  static sortByAlphaNumLocalCompare(a, b) {
    return this.sortByLocalCompare(this.padNumbers(a), this.padNumbers(b));
  }
}
