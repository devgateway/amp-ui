/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActivityConstants from '../../../../modules/util/ActivityConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import ValueConstants from '../../../../utils/ValueConstants';
import FieldPathConstants from '../../../../utils/FieldPathConstants';
import Tablify from '../../components/Tablify.jsx';
import APFundingMTEFSection from './APFundingMTEFSection.jsx';
import APFundingTransactionTypeItem from './APFundingTransactionTypeItem.jsx';
import APFundingTotalItem from './APFundingTotalItem.jsx';
import styles from './APFundingOrganizationSection.css';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APFundingOrganizationSection extends Component {
  static propTypes = {
    funding: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired
  };

  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      workspaceCurrency: PropTypes.string.isRequired
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger, activityContext } = this.context;
    logger = new Logger('AP funding organization section');
    logger.debug('constructor');
    this._currency = activityContext.workspaceCurrency;
  }

  _buildDonorInfo() {
    const content = [];
    const { buildSimpleField, funding } = this.props;
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_DONOR_ORG_ID]}`, true,
      null, false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.SOURCE_ROLE]}`, true, null,
      false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.TYPE_OF_ASSISTANCE]}`, true,
      null, false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_INSTRUMENT]}`, true,
      null, false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_STATUS]}`, true, null,
      false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.MODE_OF_PAYMENT]}`, true, null,
      false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_CLASSIFICATION_DATE]}`,
      true, null, false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_ID]}`, true, null,
      false, funding));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_TITLE]}`,
      true, null, false, funding && funding[ActivityConstants.AGREEMENT]));
    content.push(buildSimpleField(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_CODE]}`,
      true, null, false, funding && funding[ActivityConstants.AGREEMENT]));

    const tableContent = Tablify.addRows(content, ActivityConstants.ACTIVITY_FUNDING_COLS);
    return tableContent;
  }

  _buildFieldTable(field) {
    const content = [];
    const { buildSimpleField, funding } = this.props;
    content.push(buildSimpleField(field, true, null, false, funding));
    return Tablify.addRows(content, 1);
  }

  _buildMTEFDetailSection() {
    const { rawNumberToFormattedString, DateUtils } = this.props;
    return (<APFundingMTEFSection
      funding={this.props.funding}
      DateUtils={DateUtils} rawNumberToFormattedString={rawNumberToFormattedString}
    />);
  }

  _buildFundingDetailSection() {
    // Group the list of funding details by adjustment_type and transaction_type.
    const { rawNumberToFormattedString, DateUtils } = this.props;
    const groups = [];
    FieldPathConstants.FUNDING_TRANSACTION_TYPES.forEach(trnType => {
      const fds = this.props.funding[trnType];
      if (fds && fds.length) {
        const fdByAT = new Map();
        ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => fdByAT.set(adjType, []));
        fds.forEach(it => {
          const items = fdByAT.get(it[ActivityConstants.ADJUSTMENT_TYPE] &&
            it[ActivityConstants.ADJUSTMENT_TYPE].value);
          if (items) {
            items.push(it);
          }
        });
        ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => {
          const items = fdByAT.get(adjType);
          if (items.length) {
            groups.push([trnType, items]);
          }
        });
      }
    });
    return groups.map(([trnType, group], idx) =>
      (<APFundingTransactionTypeItem
        trnType={trnType}
        fundingDetails={group}
        key={idx}
        buildSimpleField={this.props.buildSimpleField}
        DateUtils={DateUtils}
        rawNumberToFormattedString={rawNumberToFormattedString} />)
    );
  }

  _buildUndisbursedBalanceSection() {
    const { rawNumberToFormattedString } = this.props;
    const { translate } = this.context;
    let totalActualDisbursements = 0;
    let totalActualCommitments = 0;
    const fd = this.props.funding;
    if (!fd || fd.length === 0) {
      // Dont show this section if there are no funding details.
      return null;
    }
    const fdActualCommitments = (fd[ActivityConstants.COMMITMENTS] || []).filter(item =>
      item[ActivityConstants.ADJUSTMENT_TYPE].value === ValueConstants.ACTUAL
    );
    totalActualCommitments = this.context.currencyRatesManager.convertFundingDetailsToCurrency(fdActualCommitments,
      this._currency);
    const fdActualDisbursements = (fd[ActivityConstants.DISBURSEMENTS] || []).filter(item =>
      item[ActivityConstants.ADJUSTMENT_TYPE].value === ValueConstants.ACTUAL
    );
    totalActualDisbursements = this.context.currencyRatesManager.convertFundingDetailsToCurrency(fdActualDisbursements,
      this._currency);

    return (<div>
      <APFundingTotalItem
        label={translate('Undisbursed Balance')}
        value={totalActualCommitments - totalActualDisbursements}
        currency={translate(this._currency)}
        key={'undisbursed-balance-key'}
        rawNumberToFormattedString={rawNumberToFormattedString}

      />
    </div>);
  }

  render() {
    logger.debug('render');
    return (<div>
      <div className={styles.section_header} />
      <table className={styles.two_box_table}>
        <tbody>{this._buildDonorInfo()}</tbody>
      </table>
      <table className={styles.two_box_table}>
        <tbody>{this._buildFieldTable(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.DONOR_OBJECTIVE]}`)}</tbody>
      </table>
      <table className={styles.two_box_table}>
        <tbody>{this._buildFieldTable(`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.CONDITIONS]}`)}</tbody>
      </table>
      <div className={styles.funding_detail}>{this._buildMTEFDetailSection()}</div>
      <div className={styles.funding_detail}>{this._buildFundingDetailSection()}</div>
      <div>{this._buildUndisbursedBalanceSection()}</div>
    </div>);
  }
}

export default APFundingOrganizationSection;
