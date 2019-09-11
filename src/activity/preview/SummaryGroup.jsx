import React, { Component, PropTypes } from 'react';
import styles from './ActivityPreview.css';
import FundingSummary from './sections/FundingSummary.jsx';
import AdditionalInfo from './sections/AdditionalInfo.jsx';
import WorkspaceConstants from '../../utils/constants/WorkspaceConstants';

let logger = null;

/**
 * Activty summary information
 * @author Nadejda Mandrescu
 */
export default class SummaryGroup extends Component {
  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      activityStatus: PropTypes.string,
      userTeamMember: PropTypes.number.isRequired,
      [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_COMPUTED]: PropTypes.bool.isRequired,
      [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
      teamMemberRole: PropTypes.number.isRequired,
      workspaceCurrency: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_PRIVATE]: PropTypes.bool.isRequired,
      calendar: PropTypes.object,
      workspaceLeadData: PropTypes.string
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('Summary group');
    logger.log('constructor');
  }

  render() {
    const currency = this.context.activityContext.workspaceCurrency;
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
