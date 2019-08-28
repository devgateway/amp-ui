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
  /* Notice we dont implement getChildContext() and childContextTypes here because thats defined in Offline's
  * ActivityPreview.jsx and thats enough to go down to any depth level here. */
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
    getAmountsInThousandsMessage: PropTypes.func.isRequired,
    IconFormatter: PropTypes.func.isRequired,
    DesktopManager: PropTypes.object.isRequired,
    APDocumentPage: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('Activity preview');
    logger.debug('constructor');
  }

  componentWillMount() {
    this.context.loadActivityForActivityPreview(this.context.params.activityId);
  }

  componentWillUnmount() {
    this.context.unloadActivity();
  }

  _renderData() {
    const activity = this.context.activityReducer.activity;
    const {
      translate, rawNumberToFormattedString, getActivityContactIds,
      getAmountsInThousandsMessage, activityReducer, userReducer, workspaceReducer,
      IconFormatter, DesktopManager, APDocumentPage
    } = this.context;

    const categories = ActivityConstants.AP_SECTION_IDS.map((category) => {
      if (category.sectionPath
        && !activityReducer.activityFieldsManager.isFieldPathEnabled(category.sectionPath)) {
        return null;
      }
      if (category.fmPath && !FeatureManager.isFMSettingEnabled(category.fmPath)) {
        return null;
      }
      return <li key={category.value}><a href={category.hash}> {translate(category.value)} </a></li>;
    });

    const categoryKeys = ActivityConstants.AP_SECTION_IDS.map(category => category.key);

    const teamLeadFlag =
      userReducer.teamMember[WorkspaceConstants.ROLE_ID] === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_MANAGER
      || userReducer.teamMember[WorkspaceConstants.ROLE_ID] === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_APPROVER;

    const privateWSWarning = workspaceReducer.currentWorkspace[WorkspaceConstants.IS_PRIVATE]
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
                teamId={userReducer.teamMember[WorkspaceConstants.WORKSPACE_ID]}
                teamLeadFlag={teamLeadFlag}
                wsAccessType={workspaceReducer.currentWorkspace[WorkspaceConstants.ACCESS_TYPE]}
                crossTeamWS={workspaceReducer.currentWorkspace[WorkspaceConstants.CROSS_TEAM_VALIDATION]} />
            </ul>
          </span>

          <div className={styles.preview_status_container}>
            <APStatusBar
              fieldClass={styles.inline_flex}
              fieldNameClass={styles.preview_status_title} fieldValueClass={styles.preview_status_detail}
              titleClass={styles.status_title_class} groupClass={styles.status_group_class} />
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
                  APDocumentPage={APDocumentPage}
                  rawNumberToFormattedString={rawNumberToFormattedString}
                  getAmountsInThousandsMessage={getAmountsInThousandsMessage}
                  getActivityContactIds={getActivityContactIds} />
              </Col>
              <Col mdOffset={9} className={styles.preview_summary}>
                <SummaryGroup />
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
    const { translate, activityReducer } = this.context;
    let message = null;
    if (activityReducer.isActivityLoading === true) {
      message = translate('activityLoading');
    } else if (activityReducer.isActivityLoaded === true) {
      if (!activityReducer.activity) {
        message = translate('activityUnexpectedError');
      }
    } else if (activityReducer.errorMessage) {
      message = `${activityReducer.errorMessage}`;
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
