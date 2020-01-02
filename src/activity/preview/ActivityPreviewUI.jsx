import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row, Button } from 'react-bootstrap';
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
import printIcon from '../../assets/images/print.svg';
import IconFormatter from '../common/IconFormatter.jsx';
import APWorkspaceInfo from './sections/info/APWorkspaceInfo.jsx';

let logger = null;

/**
 * Activity Preview main container
 * @author Nadejda Mandrescu
 */
export default class ActivityPreviewUI extends Component {
  /* Notice we dont implement getChildContext() and childContextTypes here because thats defined in Offline's
  * ActivityPreview.jsx and thats enough to go down to any depth level here. */

  static propTypes = {
    activity: PropTypes.object,
    activityContext: PropTypes.shape({
      showActivityWorkspaces: PropTypes.bool,
      rtlDirection: PropTypes.bool,
      activityStatus: PropTypes.string,
      workspaceCurrency: PropTypes.string,
      calendar: PropTypes.object,
      workspaceLeadData: PropTypes.string,
      teamMember: PropTypes.shape({
        teamMemberRole: PropTypes.number.isRequired,
        workspace: PropTypes.shape({
          [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
          [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired
        })
      })
    }).isRequired,
  };

  static contextTypes = {
    resourceReducer: PropTypes.object.isRequired,
    ActivityFundingTotals: PropTypes.object,
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
    activityFundingTotals: PropTypes.any,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    getActivityContactIds: PropTypes.func.isRequired,
    APDocumentPage: PropTypes.any.isRequired,
    activityWsInfo: PropTypes.array
  };

  static childContextTypes = {
    activity: PropTypes.object,
    activityContext: PropTypes.shape({
      rtlDirection: PropTypes.bool,
      activityStatus: PropTypes.string,
      teamMember: PropTypes.shape({
        teamMemberRole: PropTypes.number.isRequired,
        workspace: PropTypes.shape({
          [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
          [WorkspaceConstants.IS_COMPUTED]: PropTypes.bool.isRequired,
          [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
          [WorkspaceConstants.IS_PRIVATE]: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired
        })
      })
    })
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('Activity preview');
    logger.debug('constructor');
    this.state = { rtl: this.props.activityContext.rtlDirection, showViewDialog: false };
    this.showInfoWorkspace = this.showInfoWorkspace.bind(this);
  }

  getChildContext() {
    return {
      activity: this.props.activity,
      activityContext: this.props.activityContext
    };
  }

  getAPWorkspaceInfo() {
    const { activityContext } = this.props;
    if (activityContext.showActivityWorkspaces) {
      return (<APWorkspaceInfo
        show={this.state.showViewDialog}
        onClose={() => this.setState({ showViewDialog: false })}
        activityWsInfo={this.context.activityWsInfo}
      />);
    } else {
      return null;
    }
  }

  _renderData() {
    const { activity, activityContext } = this.props;

    const { rtl } = this.state;
    const { translate, getActivityContactIds, APDocumentPage, activityFieldsManager } = this.context;

    const categories = ActivityConstants.AP_SECTION_IDS.map((category) => {
      if (category.sectionPath
        && !activityFieldsManager.isFieldPathEnabled(category.sectionPath)) {
        return null;
      }
      if (category.fmPath && !FeatureManager.isFMSettingEnabled(category.fmPath)) {
        return null;
      }
      return <li key={category.value}><a href={category.hash}> {translate(category.value)} </a></li>;
    });

    const categoryKeys = ActivityConstants.AP_SECTION_IDS.map(category => category.key);

    const teamLeadFlag = activityContext.teamMember.teamMemberRole === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_MANAGER
      || activityContext.teamMember.teamMemberRole === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_APPROVER;

    const privateWSWarning = activityContext[WorkspaceConstants.IS_PRIVATE] ? translate('privateWorkspaceWarning') : '';
    const edit = activity[ActivityConstants.REJECTED_ID] === undefined && activityContext.teamMember !== undefined;

    return (
      <div className={rtl ? styles.rtl : ''}>
        <div className={styles.preview_container}>
          <div className={styles.preview_header}>
            <span className={styles.top_warning_text}>{privateWSWarning}</span>
            <span className={styles.preview_title}>{activity[ActivityConstants.PROJECT_TITLE]}</span>
            <span className={styles.preview_icons}>
              <ul>
                <IconFormatter
                  id={activity.id} edit={edit} view={false}
                  status={activityContext.activityStatus}
                  activityTeamId={activity[ActivityConstants.TEAM].id}
                  teamId={activityContext.teamMember.workspace.id}
                  teamLeadFlag={teamLeadFlag}
                  wsAccessType={activityContext.teamMember.workspace[WorkspaceConstants.ACCESS_TYPE]}
                  crossTeamWS={activityContext.teamMember.workspace[WorkspaceConstants.CROSS_TEAM_VALIDATION]}
                  translate={this.context.translate}
                />
                <img
                  className={styles.print} onClick={() => window.print()} alt="print" src={printIcon}
                  title={translate('clickToPrint')} />
                {activityContext.showActivityWorkspaces && <Button
                  bsStyle="primary"
                  onClick={this.showInfoWorkspace.bind(this)}>{translate('View')}</Button>}
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
                <Col
                  md={9}
                  className={rtl ? [styles.float_right].join(' ') : null}>
                  <MainGroup
                    getActivityContactIds={getActivityContactIds} rtl={rtl}
                    APDocumentPage={APDocumentPage}
                  />
                </Col>
                <Col
                  md={3}
                  className={rtl ? [styles.preview_summary, styles.float_left].join(' ') : styles.preview_summary}>
                  <SummaryGroup />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }

  _hasActivity() {
    return this.props.activity !== undefined && this.props.activity !== null;
  }

  showInfoWorkspace() {
    this.setState({ showViewDialog: true });
  }

  render() {
    const activityPreview = this._hasActivity() ? this._renderData() : '';
    return (
      <div>
        {this.getAPWorkspaceInfo()}
        {activityPreview}
      </div>
    );
  }
}
