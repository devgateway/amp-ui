import React, { Component, PropTypes } from 'react';
import styles from '../ActivityPreview.css';

let logger = null;

/**
 * Percentage Field component
 * @author Nadejda Mandrescu
 */
export default class APPercentageField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number,
    titleClass: PropTypes.string,
    valueClass: PropTypes.string,
    rawNumberToFormattedString: PropTypes.func.isRequired
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP percentage field');
    logger.log('constructor');
  }

  render() {
    const { rawNumberToFormattedString } = this.props;
    const percentage = this.props.value !== undefined && this.props.value !== null
      ? `${rawNumberToFormattedString(this.props.value, true)}%` : null;
    return (<div>
      <span className={this.props.titleClass}>{this.props.title} </span>
      <span className={`${this.props.valueClass} ${styles.alignRight}`}>{percentage}</span>
    </div>);
  }
}
