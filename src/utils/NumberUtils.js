/**
 * Created by Gabriel on 20/04/2017.
 */
import numeral from 'numeral';
import GlobalSettingsConstants from './constants/GlobalSettingsConstants';
import UIUtils from './UIUtils';

// require('./customNumeral');
// this should be moved to its own file
/**
 * Due to a known old issue https://github.com/adamwdraper/Numeral-js/issues/459,
 * validation method cannot work with custom thousand and decimal separators.
 *
 * validate function was extracted from the source, adjusted eslint and fixed to support custom settings
 * https://github.com/adamwdraper/Numeral-js/blob/7de892ffb438af6e63b9c4f6aff0c9bc3932f09f/src/numeral.js#L477
 *
 * @param val
 * @param culture
 * @return {*}
 */

const validate = (val, culture) => {
  let _thousandSep;
  let _valArray;
  let localeData;
  let temp;

  // coerce val to string
  if (typeof val !== 'string') {
    val += '';

    if (console.warn) {
      console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
    }
  }

  // trim whitespaces from either sides
  val = val.trim();

  // if val is just digits return true
  if (val.match(/^\d+$/)) {
    return true;
  }

  // if val is empty return false
  if (val === '') {
    return false;
  }

  // get the decimal and thousands separator from numeral.localeData
  try {
    // check if the culture is understood by numeral. if not, default it to current locale
    localeData = numeral.localeData(culture);
  } catch (e) {
    localeData = numeral.localeData(numeral.locale());
  }

  // setup the delimiters and currency symbol based on culture/locale
  const _currSymbol = localeData.currency.symbol;
  const _abbrObj = localeData.abbreviations;
  const _decimalSep = localeData.delimiters.decimal;
  if (localeData.delimiters.thousands === '.') {
    _thousandSep = '\\.';
  } else {
    _thousandSep = localeData.delimiters.thousands;
  }

  // validating currency symbol
  temp = val.match(/^[^\d]+/);
  if (temp !== null) {
    val = val.substr(1);
    if (temp[0] !== _currSymbol) {
      return false;
    }
  }

  // validating abbreviation symbol
  temp = val.match(/[^\d]+$/);
  if (temp !== null) {
    val = val.slice(0, -1);
    if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million &&
      temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
      return false;
    }
  }

  const _thousandRegEx = new RegExp(`${_thousandSep}{2}`);

  // AMP OFFLINE FIXES for regexp & checks to use thousand and decimal separators settings
  if (!val.match(new RegExp(`[^\\d${_thousandSep}${_decimalSep}]/g`))) {
    _valArray = val.split(_decimalSep);
    if (_valArray.length > 2) {
      return false;
    }
    const wholePartValid = _valArray[0].length === 1 ? _valArray[0].match(/^\d+$/) :
      _valArray[0].match(new RegExp(`^(\\d+(${_thousandSep}+\\d+)*)+$`));
    if (_valArray.length === 2) {
      return wholePartValid && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
    }
    return wholePartValid;
  }

  return false;
};

numeral.validate = validate;

// END customNumeral

let logger;
let translate;
const settings = {};
export default class NumberUtils {
  static registerSettings({ gsDefaultGroupSeparator, gsDefaultDecimalSeparator, gsDefaultNumberFormat,
    gsAmountInThousands, Translate, Logger, shouldForceUnits }) {
    settings.gsDefaultGroupSeparator = gsDefaultGroupSeparator;
    settings.gsDefaultDecimalSeparator = gsDefaultDecimalSeparator;
    settings.gsDefaultNumberFormat = gsDefaultNumberFormat;
    settings.gsAmountInThousands = gsAmountInThousands;
    settings.shouldForceUnits = shouldForceUnits;
    translate = Translate;
    if (logger === undefined) {
      logger = new Logger('Number utils');
    }
  }
  static createLanguage() {
    logger.log('buildLocale');
    const localeName = `locale_${UIUtils.stringToUniqueId('')}`;
    numeral.register('locale', localeName, {
      delimiters: {
        thousands: settings.gsDefaultGroupSeparator,
        decimal: settings.gsDefaultDecimalSeparator
      },
      abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
      },
      ordinal: (number) => {
        switch (number) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      },
      currency: {
        symbol: '$'
      }
    });
    // switch between locales
    numeral.locale(localeName);
  }

  static rawNumberToFormattedString(number, forceUnits = false) {
    logger.debug('rawNumberToFormattedString');
    const formatted = numeral(forceUnits || settings.shouldForceUnits ? number :
      NumberUtils.calculateInThousands(number)).format(settings.gsDefaultNumberFormat);
    return formatted;
  }

  /**
   * Parses the number based on its formatted representation
   * @param formatted the formatted representation of the number
   * @return {number} the parsed number or NaN if value cannot be parsed based on the preconfigured format
   */
  static formattedStringToRawNumberOrNaN(formatted: string) {
    if (!numeral.validate(formatted)) {
      return Number.NaN;
    }
    return NumberUtils.formattedStringToRawNumber(formatted);
  }

  static formattedStringToRawNumber(numberString) {
    logger.debug('formattedStringToRawNumber');
    return numeral(numberString).value();
  }

  static calculateInThousands(number) {
    logger.debug('calculateInThousands');
    switch (settings.gsAmountInThousands) {
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_UNITS:
        return number;
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_THOUSANDS:
        return number / 1000;
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_MILLIONS:
        return number / 1000 / 1000;
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_BILLIONS:
        return number / 1000 / 1000 / 1000;
      default:
        return number;
    }
  }

  static getAmountsInThousandsMessage() {
    logger.debug('getAmountsInThousandsMessage');
    switch (settings.gsAmountInThousands) {
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_UNITS:
        return translate('Amounts in Units');
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_THOUSANDS:
        return translate('Amounts in Thousands (000)');
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_MILLIONS:
        return translate('Amounts in Millions (000 000)');
      case GlobalSettingsConstants.GS_AMOUNT_OPTION_IN_BILLIONS:
        return translate('Amounts in Billions (000 000 000)');
      default:
        return '';
    }
  }
}
