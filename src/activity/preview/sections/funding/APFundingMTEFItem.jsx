import React, { Component, PropTypes } from 'react';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import FieldsManager from '../../../../modules/field/FieldsManager';
import CalendarConstants from '../../../../modules/util/CalendarConstants';
import styles from './APFundingItem.css';
import stylesMTEF from './APFundingMTEF.css';
import WorkspaceConstants from '../../../../utils/constants/WorkspaceConstants';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APFundingMTEFItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    wsCurrency: PropTypes.string.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
  };

  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      activityStatus: PropTypes.string,
      userTeamMember: PropTypes.number.isRequired,
      [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_COMPUTED]: PropTypes.bool.isRequired,
      [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
      teamMemberRole: PropTypes.number.isRequired,
      workspaceCurrency: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_PRIVATE]: PropTypes.bool.isRequired,
      calendar: PropTypes.object,
      workspaceLeadData: PropTypes.string
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP Funding MTEF item');
  }
  _formatDate(date) {
    const isFiscalCalendar = this.context.activityContext.calendar[CalendarConstants.IS_FISCAL];
    const year = this.props.DateUtils.createFormattedDate(date);
    return isFiscalCalendar ? `${year} / ${year + 1}` : year;
  }

  render() {
    const { item, wsCurrency, rawNumberToFormattedString } = this.props;
    const { translate } = this.context;
    logger.debug('render');
    const convertedAmount = this.context.currencyRatesManager.convertAmountToCurrency(item[ActivityConstants.AMOUNT],
      item[ActivityConstants.CURRENCY].value, item[ActivityConstants.PROJECTION_DATE], null, wsCurrency);
    return (
      <tbody>
        <tr className={styles.row}>
          <td className={styles.left_text}>{translate(item[ActivityConstants.PROJECTION].value)}</td>
          <td className={stylesMTEF.td_20} />
          <td className={styles.right_text}>{this._formatDate(item[ActivityConstants.PROJECTION_DATE])}</td>
          <td className={styles.right_text}>
            {`${rawNumberToFormattedString(convertedAmount)} ${wsCurrency}`}
          </td>
          <td className={stylesMTEF.td_11} />
        </tr>
      </tbody>);
  }
}
export default APFundingMTEFItem;
