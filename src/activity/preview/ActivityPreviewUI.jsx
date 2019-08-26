import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import FieldsManager from '../../modules/field/FieldsManager';
import CurrencyRatesManager from '../../modules/util/CurrencyRatesManager';
import FeatureManager from '../../modules/util/FeatureManager';
import ActivityConstants from '../../modules/util/ActivityConstants';
import WorkspaceConstants from '../../utils/constants/WorkspaceConstants';
import styles from './ActivityPreview.css';
import APStatusBar from './sections/APStatusBar.jsx';
import MainGroup from './MainGroup.jsx';
import SummaryGroup from './SummaryGroup.jsx';

let logger = null;

/**
 * Activity Preview main container
 * @author Nadejda Mandrescu
 */
export default class ActivityPreviewUI extends Component {
  static propTypes = {
    IconFormatter: PropTypes.func,
    DesktopManager: PropTypes.object,
    APDocumentPage: PropTypes.func,
  };

  static contextTypes = {
    activityReducer: PropTypes.shape({
      isActivityLoading: PropTypes.bool,
      isActivityLoaded: PropTypes.bool,
      activity: PropTypes.object,
      activityWorkspace: PropTypes.object,
      activityWSManager: PropTypes.object,
      activityFieldsManager: PropTypes.instanceOf(FieldsManager),
      activityFundingTotals: PropTypes.object,
      currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
      currentWorkspaceSettings: PropTypes.object,
      errorMessage: PropTypes.object
    }).isRequired,
    contactReducer: PropTypes.shape({
      contactFieldsManager: PropTypes.instanceOf(FieldsManager),
      contactsByIds: PropTypes.object,
    }).isRequired,
    resourceReducer: PropTypes.object.isRequired,
    loadActivityForActivityPreview: PropTypes.func.isRequired,
    unloadActivity: PropTypes.func.isRequired,
    params: PropTypes.shape({
      activityId: PropTypes.string.isRequired
    }).isRequired,
    workspaceReducer: PropTypes.object,
    userReducer: PropTypes.object,
    startUpReducer: PropTypes.object,
    ActivityFundingTotals: PropTypes.object,
    activity: PropTypes.object,
    activityWorkspace: PropTypes.object,
    activityWSManager: PropTypes.object,
    currentWorkspaceSettings: PropTypes.object,
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
    activityFundingTotals: PropTypes.any,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object,
    calendar: PropTypes.object,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
    getActivityContactIds: PropTypes.func.isRequired,
    getAmountsInThousandsMessage: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;

    logger = new Logger('Activity preview');
    logger.debug('constructor');
  }

  /*getChildContext() {
    return {
      activity: this.context.activityReducer.activity,
      activityWorkspace: this.context.activityReducer.activityWorkspace,
      activityWSManager: this.context.activityReducer.activityWSManager,
      activityFieldsManager: this.context.activityReducer.activityFieldsManager,
      contactFieldsManager: this.context.contactReducer.contactFieldsManager,
      contactsByIds: this.context.contactReducer.contactsByIds,
      currentWorkspaceSettings: this.context.activityReducer.currentWorkspaceSettings,
      activityFundingTotals: this.context.activityReducer.activityFundingTotals,
      currencyRatesManager: this.context.activityReducer.currencyRatesManager,
      resourceReducer: this.context.resourceReducer,
      calendar: this.context.startUpReducer.calendar,
    };
  }*/

  componentWillMount() {
    this.context.loadActivityForActivityPreview(this.context.params.activityId);
  }

  componentWillUnmount() {
    this.context.unloadActivity();
  }

  _renderData() {
    const activity = this.context.activityReducer.activity;
    const {
      translate, Logger, rawNumberToFormattedString, getActivityContactIds,
      getAmountsInThousandsMessage
    } = this.context;
    const { IconFormatter, DesktopManager, APDocumentPage } = this.props;

    const categories = ActivityConstants.AP_SECTION_IDS.map((category) => {
      if (category.sectionPath
        && !this.context.activityReducer.activityFieldsManager.isFieldPathEnabled(category.sectionPath)) {
        return null;
      }
      if (category.fmPath && !FeatureManager.isFMSettingEnabled(category.fmPath)) {
        return null;
      }
      return <li key={category.value}><a href={category.hash}> {translate(category.value)} </a></li>;
    });

    const categoryKeys = ActivityConstants.AP_SECTION_IDS.map(category => category.key);

    const teamLeadFlag =
      this.context.userReducer.teamMember[WorkspaceConstants.ROLE_ID] === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_MANAGER
      || this.context.userReducer.teamMember[WorkspaceConstants.ROLE_ID] === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_APPROVER;

    const privateWSWarning = this.context.workspaceReducer.currentWorkspace[WorkspaceConstants.IS_PRIVATE]
      ? translate('privateWorkspaceWarning') : '';

    return (
      <div className={styles.preview_container}>
        <div className={styles.preview_header}>
          <span className={styles.top_warning_text}>{privateWSWarning}</span>
          <span className={styles.preview_title}>{activity[ActivityConstants.PROJECT_TITLE]}</span>
          <span className={styles.preview_icons}>
            <ul>
              <IconFormatter
                id={activity.id} edit={!activity[ActivityConstants.REJECTED_ID]} view={false}
                status={DesktopManager.getActivityStatus(activity)}
                activityTeamId={activity[ActivityConstants.TEAM].id}
                teamId={this.context.userReducer.teamMember[WorkspaceConstants.WORKSPACE_ID]}
                teamLeadFlag={teamLeadFlag}
                wsAccessType={this.context.workspaceReducer.currentWorkspace[WorkspaceConstants.ACCESS_TYPE]}
                crossTeamWS={this.context.workspaceReducer.currentWorkspace[WorkspaceConstants.CROSS_TEAM_VALIDATION]} />
            </ul>
          </span>

          <div className={styles.preview_status_container}>
            <APStatusBar
              fieldClass={styles.inline_flex}
              fieldNameClass={styles.preview_status_title} fieldValueClass={styles.preview_status_detail}
              titleClass={styles.status_title_class} groupClass={styles.status_group_class} Logger={Logger} />
          </div>
          <div className={styles.preview_categories}>
            <Scrollspy items={categoryKeys} currentClassName={styles.preview_category_selected}>
              {categories}
            </Scrollspy>
          </div>
        </div>
        <div className={styles.preview_content}>
          <Grid fluid>
            <Row>
              <Col md={9}>
                <MainGroup
                  Logger={Logger} APDocumentPage={APDocumentPage}
                  rawNumberToFormattedString={rawNumberToFormattedString}
                  getAmountsInThousandsMessage={getAmountsInThousandsMessage}
                  getActivityContactIds={getActivityContactIds} {...this.props} {...this.context} />
              </Col>
              <Col mdOffset={9} className={styles.preview_summary}>
                <SummaryGroup Logger={Logger} {...this.props} {...this.context} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }

  _hasActivity() {
    return this.context.activityReducer.activity !== undefined && this.context.activityReducer.activity !== null;
  }

  _getMessage() {
    const { translate } = this.context;
    let message = null;
    if (this.context.activityReducer.isActivityLoading === true) {
      message = translate('activityLoading');
    } else if (this.context.activityReducer.isActivityLoaded === true) {
      if (!this.context.activityReducer.activity) {
        message = translate('activityUnexpectedError');
      }
    } else if (this.context.activityReducer.errorMessage) {
      message = `${this.context.activityReducer.errorMessage}`;
    }
    return message === null ? '' : <h1>{message}</h1>;
  }

  render() {
    const activityPreview = this._hasActivity() ? this._renderData() : '';
    return (
      <div>
        {this._getMessage()}
        {activityPreview}
      </div>
    );
  }
}
