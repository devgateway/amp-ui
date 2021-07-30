import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row, Alert } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router';
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
import GenerateWordPreview from '../../utils/export/GenerateWordPreview';
import wordIcon from '../../assets/images/word.svg';
import IconFormatter from '../common/IconFormatter.jsx';
import APWorkspaceInfo from './sections/info/APWorkspaceInfo.jsx';
import APActivityVersionHistory from './sections/info/APActivityVersionHistory.jsx';
import ActivityLinks from '../../utils/helpers/ActivityLinks';

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
      hideEditableExportFormatsPublicView: PropTypes.bool,
      showActivityWorkspaces: PropTypes.bool,
      validationStatus: PropTypes.string,
      rtlDirection: PropTypes.bool,
      activityStatus: PropTypes.string,
      effectiveCurrency: PropTypes.string,
      calendar: PropTypes.object,
      workspaceLeadData: PropTypes.string,
      activityWorkspace: PropTypes.shape({}),
      validation: PropTypes.shape({
        status: PropTypes.string.isRequired,
        daysToAutomaticValidation: PropTypes.number
      }),
      versionHistoryInformation: PropTypes.shape({
        activityLastVersionId: PropTypes.number.isRequired
      }),
      teamMember: PropTypes.shape({
        teamMemberRole: PropTypes.number.isRequired,
        workspace: PropTypes.shape({
          [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
          [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
          prefix: PropTypes.string
        })
      })
    }).isRequired,
    messageInformation: PropTypes.object,
    isOnline: PropTypes.bool
  };

  static contextTypes = {
    resourceReducer: PropTypes.object.isRequired,
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
      canEditActivities: PropTypes.bool.isRequired,
      rtlDirection: PropTypes.bool,
      activityStatus: PropTypes.string,
      teamMember: PropTypes.shape({
        teamMemberRole: PropTypes.number.isRequired,
        workspace: PropTypes.shape({
          [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
          [WorkspaceConstants.IS_COMPUTED]: PropTypes.bool.isRequired,
          [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
          [WorkspaceConstants.IS_PRIVATE]: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
          prefix: PropTypes.string
        })
      })
    })
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('Activity preview');
    logger.debug('constructor');
    this.state = { rtl: this.props.activityContext.rtlDirection };
  }

  getChildContext() {
    return {
      activity: this.props.activity,
      activityContext: this.props.activityContext
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleMenuClick(hash, event) {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView();
    event.preventDefault();
  }

  _renderData() {
    const { activity, activityContext } = this.props;

    const { rtl } = this.state;
    const { translate, getActivityContactIds, APDocumentPage, activityFieldsManager, DateUtils } = this.context;

    const categories = ActivityConstants.AP_SECTION_IDS.map((category) => {
      if (category.sectionPath
        && !activityFieldsManager.isFieldPathEnabled(category.sectionPath)) {
        return null;
      }
      if (category.fmPath && !FeatureManager.isFMSettingEnabled(category.fmPath)) {
        return null;
      }
      if (category.showhide && category.showhide(activityContext)) {
        return null;
      }
      return (<li key={category.value}>
        <a onClick={this.handleMenuClick.bind(null, category.hash)}>{translate(category.value)}</a>
      </li>);
    });

    const categoryKeys = ActivityConstants.AP_SECTION_IDS.map(category => category.key);

    const teamLeadFlag = (activityContext.teamMember !== null
      && (activityContext.teamMember.teamMemberRole === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_MANAGER
        || activityContext.teamMember.teamMemberRole === WorkspaceConstants.ROLE_TEAM_MEMBER_WS_APPROVER));
    const privateWSWarning = activityContext.activityWorkspace[WorkspaceConstants.IS_PRIVATE] ?
      translate('privateWorkspaceWarning') : '';
    const edit = activityContext.teamMember !== null && activity[ActivityConstants.REJECTED_ID] === undefined
      && activityContext.teamMember !== undefined && activityContext.canEditActivities;
    const teamId = activityContext.teamMember ? activityContext.teamMember.workspace.id : undefined;
    const wsAccessType = activityContext.teamMember ?
      activityContext.teamMember.workspace[WorkspaceConstants.ACCESS_TYPE] : undefined;
    const crossTeamWS = activityContext.teamMember !== null &&
      activityContext.teamMember.workspace[WorkspaceConstants.CROSS_TEAM_VALIDATION];
    const showWordExport = activityContext.teamMember !== null || !activityContext.hideEditableExportFormatsPublicView;
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
                  teamId={teamId}
                  teamLeadFlag={teamLeadFlag}
                  wsAccessType={wsAccessType}
                  crossTeamWS={crossTeamWS}
                  translate={this.context.translate}
                />
                <li>
                  <img
                    className={styles.print_word} onClick={() => window.print()} alt="print" src={printIcon}
                    title={translate('clickToPrint')} />
                </li>
                {showWordExport && <li><img
                  className={styles.print_word} alt="Export to word" src={wordIcon}
                  title={translate('exportToWord')} onClick={() => this.wordExport()} /></li>
                }
                <li>
                  <APWorkspaceInfo
                    show={this.state.showViewDialog}
                    onClose={() => this.setState({ showViewDialog: false })}
                    activityWsInfo={this.context.activityWsInfo}
                    showActivityWorkspaces={this.props.activityContext.showActivityWorkspaces}
                  />
                  <APActivityVersionHistory
                    activityContext={activityContext} activity={activity} translate={translate}
                    DateUtils={DateUtils} />
                </li>
              </ul>
            </span>
            {this._getMessages()}
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

  _getMessages() {
    const messages = {};
    messages.info = [];
    messages.danger = [];
    this._checkDraft(messages);
    if (this.props.isOnline) {
      this._getAdditionalMessages(messages);
      this._checkLatestVersion(messages);
      this._getValidations(messages);
    }
    const retAlerts = [];
    if (messages.info.length === 0 && messages.danger.length === 0) {
      return null;
    } else {
      if (messages.danger.length > 0) {
        retAlerts.push((<div key="danger"><Alert bsStyle="danger">{messages.danger}</Alert></div>));
      }
      if (messages.info.length > 0) {
        retAlerts.push((<div key="info"><Alert bsStyle="info">{messages.info}</Alert></div>));
      }
    }
    return retAlerts;
  }

  _getAdditionalMessages(messages) {
    const { translate } = this.context;
    if (this.props.messageInformation) {
      if (this.props.messageInformation.editingUser) {
        messages.danger.push(<li>{translate('editingOtherUserError') +
        this.props.messageInformation.editingUser}</li>);
      }
      if (this.props.messageInformation.editPermissionError) {
        messages.danger.push((<li>{translate('editPermissionError')}</li>));
      }
      if (this.props.messageInformation.sameUserEditing) {
        messages.danger.push((<li>{translate('sameUserEditingError')}</li>));
      }
    }
  }

  _checkDraft(messages) {
    const { activity } = this.props;
    const { translate } = this.context;
    if (activity[ActivityConstants.IS_DRAFT]) {
      messages.info.push((<li>{translate('draft_activity')}</li>));
    }
    return messages;
  }

  _checkLatestVersion(messages) {
    const { activity, activityContext } = this.props;
    const { translate } = this.context;

    if (activity[ActivityConstants.INTERNAL_ID] !== activityContext.versionHistoryInformation.activityLastVersionId) {
      messages.danger.push((
        <li key="not_latest_version">{translate('not_latest_version')}.&nbsp;
          <a
            className={styles.message_link}
            href={`${ActivityLinks.getViewLink().url}${
              activityContext.versionHistoryInformation.activityLastVersionId}`}>
            {translate('click_latest_version')}
          </a></li>));
    }
  }

  _getValidations(messages) {
    const { activityContext } = this.props;
    const { translate } = this.context;

    switch (activityContext.validation.status) {
      case ActivityConstants.AUTOMATIC_VALIDATION:
        messages.info.push((<li key="automatic_validation">{translate('automatic_validation')
          .replace('{0}', activityContext.validation.daysToAutomaticValidation)}</li>));
        break;
      case ActivityConstants.AWAITING_VALIDATION :
        messages.info.push((<li key="awaiting_validation">{translate('awaiting_validation')}</li>));
        break;
      case ActivityConstants.UNKNOWN:
        break;
      case ActivityConstants.CANNOT_BE_VALIDATE:
      default:
        messages.danger.push((<li key="cannot_be_validated">{translate('cannot_be_validated')}</li>));
        break;
    }
    return messages;
  }

  _hasActivity() {
    return this.props.activity !== undefined && this.props.activity !== null;
  }

  wordExport() {
    GenerateWordPreview.generateDocument(this.props, this.context, this.state.rtl);
  }

  render() {
    const activityPreview = this._hasActivity() ? this._renderData() : '';

    return (
      <div>
        {activityPreview}
      </div>
    );
  }
}
