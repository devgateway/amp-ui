import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import ValueConstants from '../../../../utils/ValueConstants';
import FieldPathConstants from '../../../../utils/FieldPathConstants';
import FieldsManager from '../../../../modules/field/FieldsManager';
import UIUtils from '../../../../utils/UIUtils';
import APFundingTotalItem from './APFundingTotalItem.jsx';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APFundingTotalsSection extends Component {
  static calculateTotalActualCommitmentsDisbursements(activityFieldsManager, activityFundingTotals, translate) {
    let actualCommitments;
    let actualDisbursements;
    const options = [];
    FieldPathConstants.FUNDING_TRANSACTION_TYPES.forEach(trnType => {
      if (activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, trnType)) {
        const fieldPath = `${ActivityConstants.FUNDINGS}~${trnType}~${ActivityConstants.ADJUSTMENT_TYPE}`;
        const atOptions = activityFieldsManager.getPossibleValuesOptions(fieldPath);
        atOptions.forEach(at => {
          const value = activityFundingTotals.getTotals(at.id, trnType);
          options.push({ label: translate(`Total ${at.value} ${trnType}`), value });
          actualCommitments = (trnType === ActivityConstants.COMMITMENTS && at.value === ValueConstants.ACTUAL)
            ? value : actualCommitments;
          actualDisbursements = (trnType === ActivityConstants.DISBURSEMENTS && at.value === ValueConstants.ACTUAL)
            ? value : actualDisbursements;
        });
      }
    });
    return { actualCommitments, actualDisbursements, options };
  }
  static contextTypes = {
    activityFundingTotals: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired,
    reportingTotals: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    const { Logger, activityContext } = this.context;
    logger = new Logger('AP funding totals section');
    logger.debug('constructor');
    this._wsCurrency = activityContext.effectiveCurrency;
  }

  render() {
    const content = [];
    const { activityFieldsManager, activityFundingTotals, translate, reportingTotals } = this.context;
    const { actualCommitments, actualDisbursements, options } =
      APFundingTotalsSection.calculateTotalActualCommitmentsDisbursements(
        activityFieldsManager, activityFundingTotals, translate);
    options.forEach(g => {
      if (g.value > 0) {
        content.push(<APFundingTotalItem
          key={UIUtils.numberRandom()} currency={translate(this._wsCurrency)}
          value={g.value} label={g.label} />);
      }
    });
    if (actualDisbursements && actualCommitments) {
      content.push(<APFundingTotalItem
        label={translate('Undisbursed Balance')} value={actualCommitments - actualDisbursements}
        currency={translate(this._wsCurrency)} key={UIUtils.numberRandom()} />);
    }
    if (actualDisbursements && actualCommitments) {
      content.push(<APFundingTotalItem
        currency={translate(this._wsCurrency)} key={UIUtils.numberRandom()}
        value={Math.round((actualDisbursements / actualCommitments) * 100)}
        label={translate('Delivery rate')} isPercentage />);
    }
    return (<div>{content}</div>);
  }
}

export default APFundingTotalsSection;
