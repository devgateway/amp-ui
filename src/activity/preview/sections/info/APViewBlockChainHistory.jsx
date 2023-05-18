import React, { Component, PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import blockChainStyles from './ApViewBlockChainHistory.css';
import blockChain from '../../../../assets/images/blockchain-icon.svg';

function debounce(cb, delay = 200) {
  let timeout = null;
  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}

function iframe() {
  return {
    __html: '<iframe src="/TEMPLATE/html/budget-content.html" style="width: 100%;overflow: hidden;height: 810px;border: 0px" ></iframe>'
  }
}

export default class APViewBlockChainHistory extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
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

  showBlockChainInfo() {
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

  render() {
    const { paddingTop, showDialog } = this.state;
    const { translate } = this.context;

    return (
      <div>
        <a onClick={this.showBlockChainInfo.bind(this)} title={translate('View Workspaces')}>
          <img
            src={blockChain}
            onClick={this.showBlockChainInfo.bind(this)} alt="" /></a>
        <Modal
          show={showDialog}
          onShow={this.onShow.bind(this)}
          onHide={this.close.bind(this)}
          style={{ paddingTop }}
          dialogClassName={blockChainStyles.window_50w}
        >
          <Modal.Header closeButton>
            <Modal.Title>{translate('View approval history')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={iframe()}  />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide.bind(this)}>{translate('close')}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
