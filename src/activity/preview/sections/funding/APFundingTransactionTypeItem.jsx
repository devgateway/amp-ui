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
  static contextTypes = {
    currentWorkspaceSettings: PropTypes.object.isRequired,
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  };

  static propTypes = {
    trnType: PropTypes.string.isRequired,
    fundingDetails: PropTypes.array.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Funding transaction type item');
    logger.debug('constructor');
    this._currency = context.currentWorkspaceSettings.currency.code;
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
    const { translate, Logger } = this.props;
    return (
      <div>
        <APLabel
          label={translate(this._measure)} labelClass={styles.header} key={this._key}
          translate={translate} Logger={Logger} />
        {this._showFixedExRate ?
          <APLabel
            label={translate('Fixed Exchange Rate')} labelClass={styles.exchange_rate}
            translate={translate} Logger={Logger} /> : null}
      </div>);
  }

  _drawDetail() {
    const { fundingDetails, trnType, translate, Logger, DateUtils, rawNumberToFormattedString } = this.props;
    return (<table className={styles.funding_table}>
      {fundingDetails.map(item =>
        (<APFundingItem
          item={item} trnType={trnType} key={UIUtils.numberRandom()} wsCurrency={this._currency}
          showDisasterResponse={this._showDisasterResponse} showPledge={this._showPledge}
          showFixedExchangeRate={this._showFixedExRate}
          buildSimpleField={this.props.buildSimpleField}
          translate={translate}
          DateUtils={DateUtils}
          rawNumberToFormattedString={rawNumberToFormattedString}
          Logger={Logger}
        />))
      }
    </table>);
  }

  _drawSubTotalFooter() {
    const { fundingDetails, translate, Logger, rawNumberToFormattedString } = this.props;
    const subtotal = this.context.currencyRatesManager.convertFundingDetailsToCurrency(fundingDetails, this._currency);
    const labelTrn = translate(`Subtotal ${this._measure}`).toUpperCase();
    return (
      <div>
        <APFundingTotalItem
          value={subtotal}
          label={labelTrn}
          currency={translate(this._currency)}
          key={this._key}
          rawNumberToFormattedString={rawNumberToFormattedString}
          Logger={Logger}
        />
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
