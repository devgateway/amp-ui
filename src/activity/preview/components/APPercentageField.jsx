import React, { Component, PropTypes } from 'react';
import NumberUtils from '../../../utils/NumberUtils';
import styles from '../ActivityPreview.css';
import UIUtils from '../../../utils/UIUtils';

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
    subList: PropTypes.object
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP percentage field');
    logger.log('constructor');
    this.generateSubList = this.generateSubList.bind(this);
  }

  generateSubList() {
    const { subList } = this.props;
    const content = [];
    subList.forEach(i => {
      content.push(<APPercentageField
        key={UIUtils.stringToUniqueId(i.title)} title={i.title} value={i.percentage}
        titleClass={this.props.titleClass} valueClass={this.props.valueClass} />);
    });
    return <div>{content}</div>;
  }

  render() {
    const { subList } = this.props;
    const percentage = this.props.value !== undefined && this.props.value !== null
      ? `${NumberUtils.rawNumberToFormattedString(this.props.value, true)}%` : null;
    return (<div>
      <span className={this.props.titleClass}>{this.props.title} </span>
      <span className={`${this.props.valueClass} ${styles.alignRight}`}>{percentage}</span>
      {subList ? this.generateSubList() : null}
    </div>);
  }
}
