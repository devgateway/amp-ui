import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../ActivityPreview.css';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import Section from './Section.jsx';
import CurrencyRatesManager from '../../../modules/util/CurrencyRatesManager';
import NumberUtils from '../../../utils/NumberUtils';

let logger = null;

/**
 * Activity Preview Proposed Project Cost section
 * @author Nadejda Mandrescu
 */
const APProjectCost = (fieldName) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    DateUtils: PropTypes.func.isRequired
  };
  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    Logger: PropTypes.func.isRequired,
    activityFieldsManager: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired
  }
  constructor(props, context) {
    super(props);
    const { Logger } = context;
    logger = new Logger('AP project cost');
    logger.debug('constructor');
  }

  getFieldValue(fieldPath) {
    // apparently you can disable Amount in FM... but probably this is unrealistic to happen
    if (this.context.activityFieldsManager.isFieldPathEnabled(fieldPath)) {
      return this.context.activityFieldsManager.getValue(this.props.activity, fieldPath,
        PossibleValuesManager.getOptionTranslation);
    }
    return null;
  }

  render() {
    let content = null;
    const { DateUtils } = this.props;
    const { translate, activityContext } = this.context;
    if (this.context.activityFieldsManager.isFieldPathEnabled(fieldName) === true) {
      const currency = activityContext.effectiveCurrency;
      let amount = 0;
      let showPPC = false;
      const ppcAsFunding = this.props.activity[ActivityConstants.PPC_AMOUNT];
      if (ppcAsFunding && ppcAsFunding[ActivityConstants.AMOUNT] && ppcAsFunding[ActivityConstants.CURRENCY]) {
        showPPC = true;
        ppcAsFunding[ActivityConstants.CURRENCY] = ppcAsFunding[ActivityConstants.CURRENCY];
        ppcAsFunding[ActivityConstants.TRANSACTION_AMOUNT] = ppcAsFunding[ActivityConstants.AMOUNT];
        if (ppcAsFunding[ActivityConstants.CURRENCY] && ppcAsFunding[ActivityConstants.TRANSACTION_AMOUNT]) {
          amount = this.context.currencyRatesManager.convertTransactionAmountToCurrency(ppcAsFunding, currency);
          amount = NumberUtils.rawNumberToFormattedString(amount);
        }
      }
      if (showPPC) {
        let date = this.getFieldValue(`${fieldName}~${ActivityConstants.FUNDING_DATE}`);
        date = date ? DateUtils.createFormattedDate(date) : translate('No Data');
        content = (<div>
          <div className={styles.project_cost_left}>
            <span className={styles.project_cost_title}>{translate('Cost')} </span>
            <span className={styles.project_cost_currency}>{amount} {currency}</span>
          </div>
          <div className={styles.project_cost_right}>
            <span className={styles.project_cost_title}>{translate('Date')}</span>
            <span className={styles.project_cost_date}>{date}</span>
          </div>
        </div>);
      } else {
        content = (<div>
          <div className={styles.project_cost_left}>
            <span className={styles.project_cost_title}>{translate('Cost')} </span>
            <span className={styles.project_cost_date}>{translate('No Data')}</span>
          </div>
          <div className={styles.project_cost_right}>
            <span className={styles.project_cost_title}>{translate('Date')}</span>
            <span className={styles.project_cost_date}>{translate('No Data')}</span>
          </div>
        </div>);
      }
    }
    return content;
  }
};
export const APProposedProjectCost = Section(APProjectCost(ActivityConstants.PPC_AMOUNT),
  { SectionTitle: 'Proposed Project Cost'
  });
export const APRevisedProjectCost = Section(APProjectCost(ActivityConstants.RPC_AMOUNT),
  { SectionTitle: 'Revised Project Cost'
  });
