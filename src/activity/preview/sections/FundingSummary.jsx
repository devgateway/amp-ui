import React, { Component } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FeatureManager from '../../../modules/util/FeatureManager';
import ValueConstants from '../../../utils/ValueConstants';
import FeatureManagerConstants from '../../../modules/util/FeatureManagerConstants';
import FieldPathConstants from '../../../utils/FieldPathConstants';

import FieldsManager from '../../../modules/field/FieldsManager';
import APField from '../components/APField.jsx';
import Section from './Section.jsx';


let logger = null;

/* eslint-disable class-methods-use-this */

/**
 * Funding Totals Summary section
 * @author Nadejda Mandrescu
 */
class FundingSummary extends Component {
  static propTypes = {
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    activityFundingTotals: PropTypes.object.isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activity: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('Funding summary');
    logger.debug('constructor');
  }

  /**
   * Builds "Funding Information" section by following AMP Activity Preview rules
   * @return {Section}
   * @private
   */
  _buildFundingInformation() {
    const measuresTotals = {};
    const { activityFieldsManager, translate } = this.props;
    let acEnabled = false;
    let adEnabled = false;
    // Commitments, Disbursements, Expenditures
    FieldPathConstants.TRANSACTION_TYPES.forEach(trnType => {
      if (activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, trnType)) {
        const trnAdjOptPath = `${ActivityConstants.FUNDINGS}~${trnType}~${ActivityConstants.ADJUSTMENT_TYPE}`;
        const atOptions = activityFieldsManager.getPossibleValuesOptions(trnAdjOptPath);
        acEnabled = acEnabled ||
          (trnType === ActivityConstants.COMMITMENTS && !!atOptions.find(o => o.value === ValueConstants.ACTUAL));
        adEnabled = adEnabled ||
          (trnType === ActivityConstants.DISBURSEMENTS && !!atOptions.find(o => o.value === ValueConstants.ACTUAL));
        // Actual, Planned
        atOptions.forEach(adjType => {
          const value = this.props.activityFundingTotals.getTotals(adjType.id, trnType, {});
          measuresTotals[`${adjType.value} ${trnType}`] = value;
        });
      }
    });
    // Other measures: "Unallocated Disbursements" According to online preview should show if actual Commitments
    // and actual disbursements are enabled and if expenditures are enabled.
    const expendituresAreEnabled = activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS,
      ActivityConstants.EXPENDITURES);
    if (acEnabled && adEnabled && expendituresAreEnabled) {
      const ub = ValueConstants.UNALLOCATED_DISBURSEMENTS;
      measuresTotals[ub] = this.props.activityFundingTotals.getTotals(ub, {});
    }
    // Other measures: "Total MTEF Projections".

    if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.MTEF_PROJECTIONS)) {
      measuresTotals[ValueConstants.MTEF_PROJECTIONS] = this.props.activityFundingTotals.getMTEFTotal();
    }
    // Other measures: "DURATION OF PROJECT" "Delivery rate".
    if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.ACTIVITY_DURATION_OF_PROJECT)) {
      let value = null;
      if (this.props.activity[ActivityConstants.ACTUAL_COMPLETION_DATE]
        && this.props.activity[ActivityConstants.ACTUAL_START_DATE]) {
        value = Moment(this.props.activity[ActivityConstants.ACTUAL_COMPLETION_DATE])
          .diff(Moment(this.props.activity[ActivityConstants.ACTUAL_START_DATE]), 'months', false);
        value = `${value} ${translate(`month${value > 1 ? 's' : ''}`)}`;
      }
      measuresTotals[ValueConstants.DURATION_OF_PROJECT] = value;
    }
    if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.ACTIVITY_DELIVERY_RATE)) {
      const actualCommitments = measuresTotals[`${ValueConstants.ACTUAL} ${ActivityConstants.COMMITMENTS}`];
      const actualDisbursements = measuresTotals[`${ValueConstants.ACTUAL} ${ActivityConstants.DISBURSEMENTS}`];
      let value = 0;
      if (actualCommitments && actualDisbursements && acEnabled && adEnabled) {
        value = (actualDisbursements / actualCommitments) * 100;
      }
      measuresTotals[ValueConstants.DELIVERY_RATE] = value;
    }

    return this._buildTotalFields(measuresTotals);
  }

  _buildTotalFields(measuresTotals) {
    const { translate } = this.props;
    const measuresOrder = [
      { trn: ValueConstants.ACTUAL_COMMITMENTS, total: true },
      { trn: ValueConstants.PLANNED_COMMITMENTS, total: true },
      { trn: ValueConstants.ACTUAL_DISBURSEMENTS, total: true },
      { trn: ValueConstants.PLANNED_DISBURSEMENTS, total: true },
      { trn: ValueConstants.ACTUAL_EXPENDITURES, total: true },
      // { trn: ValueConstants.UNALLOCATED_DISBURSEMENTS, total: false },
      // { trn: ValueConstants.PLANNED_EXPENDITURES, total: true },
      { trn: ValueConstants.MTEF_PROJECTIONS, total: true },
      { trn: ValueConstants.DURATION_OF_PROJECT, total: false, isText: true },
      { trn: ValueConstants.DELIVERY_RATE, total: false, isPercentage: true }];
    const fundingInfoSummary = [];
    measuresOrder.forEach(measure => {
      let value = measuresTotals[measure.trn];
      if (value !== undefined) {
        if (!measure.isText) {
          value = this.props.activityFundingTotals.formatAmount(value, measure.isPercentage);
        }
        let title = measure.trn;
        if (measure.total) {
          title = `Total ${title}`;
        }
        title = translate(title);
        const key = `Summary-Total-${measure.trn}`;
        fundingInfoSummary.push(<APField
          key={key} title={title} value={value} separator={false}
          fieldNameClass={this.props.fieldNameClass} fieldValueClass={this.props.fieldValueClass}
        />);
      }
    });
    return fundingInfoSummary;
  }

  render() {
    return <div>{this._buildFundingInformation()}</div>;
  }
}

export default Section(FundingSummary, {
  SectionTitle: 'fundingInformation'
});
