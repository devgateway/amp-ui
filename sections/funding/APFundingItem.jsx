/* eslint-disable camelcase */
import React, { Component, PropTypes } from 'react';
import Logger from '../../../../../modules/util/LoggerManager';
import CurrencyRatesManager from '../../../../../modules/util/CurrencyRatesManager';
import * as AC from '../../../../../utils/constants/ActivityConstants';
import * as FPC from '../../../../../utils/constants/FieldPathConstants';
import translate from '../../../../../utils/translate';
import { createFormattedDate } from '../../../../../utils/DateUtils';
import styles from './APFundingItem.css';
import { rawNumberToFormattedString } from '../../../../../utils/NumberUtils';
import * as FMC from '../../../../../utils/constants/FeatureManagerConstants';
import * as VC from '../../../../../utils/constants/ValueConstants';
import FeatureManager from '../../../../../modules/util/FeatureManager';
import FieldsManager from '../../../../../modules/field/FieldsManager';

const logger = new Logger('AP Funding item');

/**
 * @author Gabriel Inchauspe
 */
class APFundingItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    wsCurrency: PropTypes.string.isRequired
  };
  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
  };

  constructor(props) {
    super(props);
    logger.log('constructor');
  }

  getDisasterResponse() {
    if (this.props.item[AC.DISASTER_RESPONSE] === true) {
      return this.context.activityFieldsManager.getFieldLabelTranslation(FPC.DISASTER_RESPONSE_PATH);
    }
    return '';
  }

  insertPledgeRow() {
    let pledgeFMPath;
    switch (this.props.item[AC.TRANSACTION_TYPE].value) {
      case VC.COMMITMENTS:
        pledgeFMPath = FMC.ACTIVITY_COMMITMENTS_PLEDGES;
        break;
      case VC.DISBURSEMENTS:
        pledgeFMPath = FMC.ACTIVITY_DISBURSEMENTS_PLEDGES;
        break;
      case VC.EXPENDITURES:
        pledgeFMPath = FMC.ACTIVITY_EXPENDITURES_PLEDGES;
        break;
      default:
        break;
    }
    if (this.props.item.pledge && FeatureManager.isFMSettingEnabled(pledgeFMPath)) {
      return (<tr className={styles.row}>
        <td colSpan={AC.AP_FUNDINGS_TABLE_COLS} className={styles.left_text}>
          <span className={styles.pledge_row}>
            <span>{`${translate('Source Pledge')}: `}</span>
            <span className={styles.value}>{`${translate(this.props.item[AC.PLEDGE].value)}`}</span>
          </span>
        </td>
      </tr>);
    } else {
      return null;
    }
  }

  insertRecipientOrgRow() {
    const { item } = this.props;
    if (item[AC.RECIPIENT_ORGANIZATION] && item[AC.RECIPIENT_ROLE]) {
      const role = item[AC.RECIPIENT_ROLE];
      const org = item[AC.RECIPIENT_ORGANIZATION];
      return (<tr>
        <td colSpan={AC.AP_FUNDINGS_TABLE_COLS} className={styles.left_text}>
          <span className={styles.recipient_row}>
            <span className={styles.normal}>{`${translate('Recipient')}: `}</span>
            {translate(org.value)}
            <span className={styles.normal}>{` ${translate('as the')} `}</span>
            {translate(role.value)}
          </span>
        </td>
      </tr>);
    } else {
      return null;
    }
  }

  insertFixedExchangeRateCell() {
    let exchangeRateFMPath;
    switch (this.props.item[AC.TRANSACTION_TYPE].value) {
      case VC.COMMITMENTS:
        exchangeRateFMPath = FMC.ACTIVITY_COMMITMENTS_FIXED_EXCHANGE_RATE;
        break;
      case VC.DISBURSEMENTS:
        exchangeRateFMPath = FMC.ACTIVITY_DISBURSEMENTS_FIXED_EXCHANGE_RATE;
        break;
      case VC.EXPENDITURES:
        exchangeRateFMPath = FMC.ACTIVITY_EXPENDITURES_FIXED_EXCHANGE_RATE;
        break;
      default:
        break;
    }
    if (FeatureManager.isFMSettingEnabled(exchangeRateFMPath)) {
      return this.props.item[AC.FIXED_EXCHANGE_RATE];
    } else {
      return null;
    }
  }

  render() {
    logger.log('render');
    const convertedAmount = this.context.currencyRatesManager.convertTransactionAmountToCurrency(this.props.item,
      this.props.wsCurrency);
    return (
      <tbody>
        <tr className={styles.row}>
          <td className={styles.left_text}>{translate(this.props.item[AC.ADJUSTMENT_TYPE].value)}</td>
          <td className={styles.disaster_response}>{this.getDisasterResponse()}</td>
          <td className={styles.right_text}>{createFormattedDate(this.props.item[AC.TRANSACTION_DATE])}</td>
          <td
            className={styles.right_text}>
            {`${rawNumberToFormattedString(convertedAmount)} ${this.props.wsCurrency}`}</td>
          <td className={styles.exchange_rate}>{this.insertFixedExchangeRateCell()}</td>
        </tr>
        {this.insertPledgeRow()}
        {this.insertRecipientOrgRow()}
      </tbody>);
  }
}

export default APFundingItem;
