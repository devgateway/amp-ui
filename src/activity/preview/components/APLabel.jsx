import React, { Component, PropTypes } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

let logger = null;

export default class APLabel extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    dontTranslate: PropTypes.bool,
    labelClass: PropTypes.string,
    /* decorator: PropTypes.func, // TODO: To be implemented. */
    separator: PropTypes.bool,
    tooltip: PropTypes.string,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Label');
    logger.debug('constructor');
  }

  getContent() {
    const { translate } = this.props;
    const label = (this.props.dontTranslate === true ? this.props.label : translate(this.props.label));
    const labelClass = (this.props.labelClass ? this.props.labelClass : '');
    return (<div className={labelClass}><span>{label}</span>{this.props.separator ? <hr /> : ''}</div>);
  }

  tooltip() {
    const { tooltip, dontTranslate, translate } = this.props;
    return <Tooltip id="tooltip">{dontTranslate ? tooltip : translate(this.props.tooltip)}</Tooltip>;
  }

  render() {
    if (this.props.tooltip) {
      return (<OverlayTrigger placement="right" overlay={this.tooltip()}>
        {this.getContent()}
      </OverlayTrigger>);
    } else {
      return this.getContent();
    }
  }
}
