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

  static contextTypes = {
    activityFundingTotals: PropTypes.object.isRequired, // PropTypes.instanceOf(ActivityFundingTotals).isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    currentWorkspaceSettings: PropTypes.object.isRequired
  };

  static propTypes = {
    rawNumberToFormattedString: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP funding totals section');
    logger.debug('constructor');
    this._wsCurrency = context.currentWorkspaceSettings.currency.code;
  }

  render() {
    const content = [];
    const { activityFieldsManager, activityFundingTotals } = this.context;
    const { translate, rawNumberToFormattedString, Logger } = this.props;
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
    options.forEach(g => {
      if (g.value > 0) {
        content.push(<APFundingTotalItem
          key={UIUtils.numberRandom()}
          currency={translate(this._wsCurrency)}
          value={g.value}
          label={g.label}
          rawNumberToFormattedString={rawNumberToFormattedString}
          Logger={Logger}
        />);
      }
    });
    if (actualDisbursements && actualCommitments) {
      content.push(<APFundingTotalItem
        label={translate('Undisbursed Balance')} value={actualCommitments - actualDisbursements}
        currency={translate(this._wsCurrency)} key={UIUtils.numberRandom()}
        rawNumberToFormattedString={rawNumberToFormattedString}
        Logger={Logger}
      />);
    }
    if (actualDisbursements && actualCommitments) {
      content.push(<APFundingTotalItem
        currency={translate(this._wsCurrency)} key={UIUtils.numberRandom()}
        value={Math.round((actualDisbursements / actualCommitments) * 100)}
        label={translate('Delivery rate')} isPercentage
        rawNumberToFormattedString={rawNumberToFormattedString}
        Logger={Logger}
      />);
    }
    return (<div>{content}</div>);
  }
}

export default APFundingTotalsSection;
