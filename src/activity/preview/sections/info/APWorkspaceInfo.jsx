import React, { Component, PropTypes } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import question from '../../../../assets/images/tooltip-help.png';
import wsInfoStyles from './ApWorkspaceInfo.css';
import history from '../../../../assets/images/history.svg';

const DELAY = 40;

function debounce(cb, delay = 200) {
  let timeout = null;
  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}

export default class APWorkspaceInfo extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    activityWsInfo: PropTypes.array,
    showActivityWorkspaces: PropTypes.bool.isRequired
  };

  static contextTypes = {
    translate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      paddingTop: 0
    };
  }

  onShow() {
    this.recalcPaddingTop();
    this.windowResizeListener = debounce(this.recalcPaddingTop.bind(this));
    window.addEventListener('resize', this.windowResizeListener);
  }

  handleHide() {
    this.setState({ showDialog: false });
  }

  showInfoWorkspace() {
    this.setState({ showDialog: true });
  }

  recalcPaddingTop() {
    const el = document.querySelector('.modal-dialog');
    if (!el) return;
    this.setState({
      paddingTop: (window.innerHeight - el.clientHeight) / 2
    });
  }

  open() {
    this.setState({ showDialog: true });
  }

  close() {
    this.setState({ showDialog: false });
    this.props.onClose();
    window.removeEventListener('resize', this.windowResizeListener);
  }

  renderTooltip() {
    const { translate } = this.context;
    return (<Tooltip id="info_ws_tooltip">
      <div>
        <div className={wsInfoStyles.tooltip_item}>
          <strong>TEAMS</strong> - {translate('infoWsTooltipTeam')}.
        </div>
        <div className={wsInfoStyles.tooltip_item}>
          <strong>MANAGEMENT</strong> - {translate('infoWsTooltipManagement')}.
        </div>
        <div className={wsInfoStyles.tooltip_item}><strong>COMPUTED</strong> - {translate('infoWsTooltipComputed')}.
        </div>
      </div>
    </Tooltip>);
  }

  render() {
    const { activityWsInfo, showActivityWorkspaces } = this.props;
    if (!showActivityWorkspaces) {
      return null;
    }
    const { paddingTop, showDialog } = this.state;
    const { translate } = this.context;
    const tooltipContent = this.renderTooltip();
    const options = {
      noDataText: translate('noDataText')
    };
    return (
      <div>
        <a onClick={this.showInfoWorkspace.bind(this)} title={translate('View Workspaces')}>
          <img
            src={history}
            onClick={this.showInfoWorkspace.bind(this)} alt="" /></a>
        <Modal
          show={showDialog}
          onShow={this.onShow.bind(this)}
          onHide={this.close.bind(this)}
          style={{ paddingTop }}
          dialogClassName={wsInfoStyles.window_50w}
        >
          <Modal.Header closeButton>
            <Modal.Title>{translate('View Workspaces')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BootstrapTable data={activityWsInfo} options={options} striped hover>
              <TableHeaderColumn
                isKey dataField="name" columnClassName={[wsInfoStyles.width_30, wsInfoStyles.wsInfoItem].join(' ')}
                className={[wsInfoStyles.thClassName_30, wsInfoStyles.thClassName].join(' ')}
              >{translate('workspaceWhereActivityIsDisplayed')}
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="type"
                columnClassName={[wsInfoStyles.width_20, wsInfoStyles.wsInfoItem].join(' ')}
                className={[wsInfoStyles.thClassName_20, wsInfoStyles.thClassName].join(' ')}
              >{translate('workspaceType')}&nbsp;
                <OverlayTrigger
                  placement="right"
                  delay={DELAY}
                  overlay={tooltipContent}
                >
                  <img src={question} className={wsInfoStyles.help_icon} alt={'footer'} />
                </OverlayTrigger> </TableHeaderColumn>
              <TableHeaderColumn
                dataField="extraInfo" columnClassName={[wsInfoStyles.width_50, wsInfoStyles.wsInfoItem].join(' ')}
                className={[wsInfoStyles.thClassName_50, wsInfoStyles.thClassName].join(' ')}
              >{translate('howActivityIsLinked')}</TableHeaderColumn>
            </BootstrapTable>
          </Modal.Body>
          <Modal.Footer >
            <Button onClick={this.handleHide.bind(this)}>{translate('close')}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
