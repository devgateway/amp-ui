import React, { Component, PropTypes } from 'react';
import styles from './ActivityPreview.css';
import FundingSummary from './sections/FundingSummary.jsx';
import AdditionalInfo from './sections/AdditionalInfo.jsx';

let logger = null;

/**
 * Activty summary information
 * @author Nadejda Mandrescu
 */
export default class SummaryGroup extends Component {
  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired,
    reportingTotals: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('Summary group');
    logger.log('constructor');
  }

  render() {
    const currency = this.context.activityContext.effectiveCurrency;
    return (<div className={styles.summary_container}>
      <FundingSummary
        titleDetails={`(${currency})`}
        titleClass={styles.summary_section_title}
        groupClass={styles.summary_section_group}
        fieldNameClass={styles.summary_field_name}
        fieldValueClass={styles.summary_field_value} />
      <AdditionalInfo
        titleClass={styles.summary_section_title}
        groupClass={styles.summary_section_group}
        fieldNameClass={styles.summary_field_name}
        fieldValueClass={styles.summary_field_value} />
    </div>);
  }
}
