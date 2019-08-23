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
    currentWorkspaceSettings: PropTypes.object.isRequired
  };

  static propTypes = {
    Logger: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('Summary group');
    logger.log('constructor');
  }

  render() {
    const currency = this.context.currentWorkspaceSettings.currency.code;
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
