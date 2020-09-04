import React, { Component, PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Checkbox from 'rc-checkbox';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import history from '../../../../assets/images/ws_view.svg';
import ActivityLinks from '../../../../utils/helpers/ActivityLinks';
import ahStyles from './APActivityVersionHistory.css';
import { COMPARE, SET_VERSION, BLANK, SELF, POST, NONE, FORM, HIDDEN, INPUT }
  from './APActivityVersionHistoryConstants.jsx';

export default class APActivityVersionHistory extends Component {
  static submitPostForm(url, data, target) {
    const form = document.createElement(FORM);
    form.target = target;
    form.method = POST;
    form.action = url;
    form.style.display = NONE;

    Object.keys(data)
      .forEach((key) => {
        const input = document.createElement(INPUT);
        input.type = HIDDEN;
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  static propTypes = {
    activityContext: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleUpdateVersion = this.handleUpdateVersion.bind(this);
    this.currentValues = [];
    this.state = {
      show: false,
      compareVersionEnabled: false
    };
  }

  handleChangeCheckbox(event) {
    if (event.target.checked) {
      this.currentValues.push(event.target.name);
    } else {
      this.currentValues.splice(this.currentValues.indexOf(event.target.name), 1);
    }
    this.setState({
      compareVersionEnabled: this.currentValues.length === 2
    });
  }

  handleCompare(event) {
    event.preventDefault();
    const data = {
      action: COMPARE,
      activityOneId: this.currentValues[0],
      activityTwoId: this.currentValues[1],
      showMergeColumn: false,
      method: COMPARE,
      activityId: this.props.activity[ActivityConstants.INTERNAL_ID]
    };

    APActivityVersionHistory.submitPostForm(ActivityLinks.getCompareActivityLink().url, data, BLANK);
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChangeSummary(event) {
    event.preventDefault();
    const data = {
      actionMethod: 'changesSummary',
      activityId: this.props.activity[ActivityConstants.INTERNAL_ID]
    };
    APActivityVersionHistory.submitPostForm(ActivityLinks.getVersionHistoryLink().url, data, BLANK);
  }

  handleUpdateVersion(event, newVersionId) {
    event.preventDefault();
    const data = {
      action: SET_VERSION,
      method: COMPARE,
      activityCurrentVersion: newVersionId
    };
    this.submitPostForm(ActivityLinks.getCompareActivityLink().url, data, SELF);
  }


  addCheckbox(cell, row) {
    return (
      <Checkbox
        name={`${row.activityId}`}
        onChange={this.handleChangeCheckbox.bind(this)}
      />
    );
  }

  addButton(cell, row) {

    const { translate } = this.props;
    const { versionHistoryInformation } = this.props.activityContext;
    let actionLabel;
    if (row[ActivityConstants.AMP_ACTIVITY_ID] === versionHistoryInformation.activityLastVersionId) {
      actionLabel = translate('Current version');
    } else if (versionHistoryInformation.updateCurrentVersion) {
      actionLabel = (
        <Button
          className={ahStyles.link_version} bsStyle="link" bsSize="xsmall"
          onClick={(evt) => this.handleUpdateVersion(evt, row[ActivityConstants.AMP_ACTIVITY_ID])}>
          {translate('makeCurrentVersion')}</Button>);
    }
    return actionLabel;
  }

  dateFormatter(cell) {
    const { DateUtils } = this.props;
    return DateUtils.createFormattedDate(cell);
  }

  render() {
    const { activityContext, translate } = this.props;
    const { versionHistoryInformation } = activityContext;
    if (!versionHistoryInformation.showVersionHistory || activityContext.teamMember === null) {
      return null;
    }
    const { versionHistory } = versionHistoryInformation;
    const label = translate('versionHistory');
    return (
      <div>
        <a title={label} onClick={() => this.setState({ show: true })}>
          <img src={history} alt={label} />
        </a>
        <Modal
          show={this.state.show} onHide={this.handleHide.bind(this)} bsSize="large"
          container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BootstrapTable data={versionHistory} striped hover>
              <TableHeaderColumn
                dataField="checkbox"
                dataFormat={this.addCheckbox.bind(this)}
                columnClassName={[ahStyles.width_10, ahStyles.thClassNameItem].join(' ')}
                className={[ahStyles.thClassName, ahStyles.thClassName_10].join(' ')}
              >#</TableHeaderColumn>
              <TableHeaderColumn
                isKey dataField={ActivityConstants.MODIFIED_BY.replace('_', '-')}
                columnClassName={[ahStyles.width_30, ahStyles.thClassNameItem].join(' ')}
                className={[ahStyles.thClassName, ahStyles.thClassName_30].join(' ')}
              >{translate('LastModifiedBy')}
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField={ActivityConstants.MODIFIED_DATE}
                columnClassName={[ahStyles.width_30, ahStyles.thClassNameItem].join(' ')}
                className={[ahStyles.thClassName, ahStyles.thClassName_30].join(' ')}
                dataFormat={this.dateFormatter.bind(this)}
              >{translate('Date')}</TableHeaderColumn>
              <TableHeaderColumn
                dataField="button"
                dataFormat={this.addButton.bind(this)}
                columnClassName={[ahStyles.width_30, ahStyles.thClassNameItem].join(' ')}
                className={[ahStyles.thClassName, ahStyles.thClassName_30].join(' ')}
              >{translate('Action')}</TableHeaderColumn>
            </BootstrapTable>
            <Button onClick={this.handleCompare.bind(this)} disabled={!this.state.compareVersionEnabled}>
              {translate('compare_version')}
            </Button>
            {versionHistoryInformation.showChangeSummary &&
            <Button onClick={this.handleChangeSummary.bind(this)}>{translate('show_change_summary')}</Button>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide.bind(this)}>{translate('close')}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
