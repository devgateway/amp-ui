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
}
