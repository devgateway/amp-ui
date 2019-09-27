import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Constants from '../../utils/Constants';
import styles from './IconFormatter.css';
import view from '../../assets/images/view.svg';
import edit from '../../assets/images/edit.svg';
import check from '../../assets/images/check.svg';

export default class IconFormatter extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    view: PropTypes.bool.isRequired,
    teamLeadFlag: PropTypes.bool.isRequired,
    crossTeamWS: PropTypes.bool.isRequired,
    wsAccessType: PropTypes.string.isRequired,
    teamId: PropTypes.number.isRequired,
    activityTeamId: PropTypes.number.isRequired,
    translate: PropTypes.func.isRequired,
  };

  render() {
    const { translate } = this.props;
    // TODO: These links could be dispatch to some action too if needed.
    const editUrl = `${Constants.ACTIVITY_EDIT_URL}/${this.props.id}`;
    const viewUrl = `${Constants.ACTIVITY_PREVIEW_URL}/${this.props.id}`;
    const editLink = (<Link to={editUrl} title={translate('clickToEditActivity')}>
      <img src={edit} className={styles.edit_icon} alt="edit" />
    </Link>);
    const validateLink = (<Link to={editUrl} title={translate('clickToValidateActivity')}>
      <img src={check} className={styles.validate_icon} alt="validate" />
    </Link>);
    const viewLink = (<Link to={viewUrl} title={translate('clickToPreviewActivity')}>
      <img src={view} className={styles.view_icon} alt="view" />
    </Link>);
    let showEditValidate;
    let showView;
    if (this.props.edit) {
      if (this.props.status === Constants.ACTIVITY_STATUS_UNVALIDATED) {
        if (this.props.crossTeamWS && this.props.teamLeadFlag) {
          if (this.props.wsAccessType !== Constants.WS_ACCESS_TYPE_MANAGEMENT) {
            showEditValidate = validateLink;
          } else {
            showEditValidate = editLink;
          }
        } else if (!this.props.crossTeamWS
          && this.props.teamId === this.props.activityTeamId
          && this.props.teamLeadFlag) {
          showEditValidate = validateLink;
        } else {
          showEditValidate = editLink;
        }
      } else {
        showEditValidate = editLink;
      }
    }
    if (this.props.view) {
      showView = viewLink;
    }
    return (showEditValidate || showView ? (<div>{showEditValidate}{showView}</div>) : <span />);
  }
}
