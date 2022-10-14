import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import FieldsManager from '../../../../modules/field/FieldsManager';
import UIUtils from '../../../../utils/UIUtils';
import APLabel from '../../components/APLabel.jsx';
import APFundingTotalItem from './APFundingTotalItem.jsx';
import APFundingItem from './APFundingItem.jsx';
import styles from './APFundingTransactionTypeItem.css';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
export default class APFundingTransactionTypeItem extends Component {
  static propTypes = {
    trnType: PropTypes.string.isRequired,
    fundingDetails: PropTypes.array.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired
  };

  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger, activityContext } = this.context;
    logger = new Logger('AP Funding transaction type item');
    logger.debug('constructor');
    this._currency = activityContext.effectiveCurrency;
    this._adjType = props.fundingDetails[0][ActivityConstants.ADJUSTMENT_TYPE];
    this._measure = `${this._adjType.value} ${props.trnType}`;
    this._key = this._adjType.value + props.trnType;
    const trnPath = `${ActivityConstants.FUNDINGS}~${props.trnType}`;
    this._showFixedExRate = context.activityFieldsManager
      .isFieldPathEnabled(`${trnPath}~${ActivityConstants.FIXED_EXCHANGE_RATE}`);
    this._showDisasterResponse = context.activityFieldsManager
      .isFieldPathEnabled(`${trnPath}~${ActivityConstants.DISASTER_RESPONSE}`);
    this._showPledge = context.activityFieldsManager
      .isFieldPathEnabled(`${trnPath}~${ActivityConstants.PLEDGE}`);
  }

  _drawHeader() {
    const { translate } = this.context;
    return (
      <div>
        <APLabel
          label={translate(this._measure)} labelClass={styles.header} key={this._key}
        />
        {this._showFixedExRate ?
          <APLabel
            label={translate('Fixed Exchange Rate')} labelClass={styles.exchange_rate}
          /> : null}
      </div>);
  }

  _drawDetail() {
    const { fundingDetails, trnType, DateUtils } = this.props;
    const { translate } = this.context;
    const additionalFields = [];
    if (trnType === ActivityConstants.DISBURSEMENTS) {
      additionalFields.push({ fmId: 'disbursement_id', label: translate('disbursementId') });
    }
    return (<table className={styles.funding_table}>
      {fundingDetails.map(item =>
        (<APFundingItem
          item={item} trnType={trnType} key={UIUtils.numberRandom()} wsCurrency={this._currency}
          showDisasterResponse={this._showDisasterResponse} showPledge={this._showPledge}
          showFixedExchangeRate={this._showFixedExRate}
          buildSimpleField={this.props.buildSimpleField}
          DateUtils={DateUtils}
          additionalFields={additionalFields} />))
      }
    </table>);
  }

  _drawSubTotalFooter() {
    const { fundingDetails } = this.props;
    const { translate } = this.context;
    const subtotal = this.context.currencyRatesManager.convertFundingDetailsToCurrency(fundingDetails, this._currency);
    const labelTrn = translate(`Subtotal ${this._measure}`).toUpperCase();
    return (
      <div>
        <APFundingTotalItem
          value={subtotal}
          label={labelTrn}
          currency={translate(this._currency)}
          key={this._key} />
      </div>);
  }

  render() {
    logger.debug('render');
    return (<div className={styles.table_container}>
      <div>{this._drawHeader()}</div>
      <div>{this._drawDetail()}</div>
      <div>{this._drawSubTotalFooter()}</div>
    </div>);
  }
}
