import Moment from 'moment';

export default class DateUtilsHelper {
  static getDateTimeFormat(gSDateFormat) {
    return `${gSDateFormat} H:mm:ss`;
  }

  static formatDate(date, format) {
    const dateAsMoment = Moment(date);
    if (dateAsMoment.isValid()) {
      return dateAsMoment.format(format);
    } else {
      return '';
    }
  }
}
