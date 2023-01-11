import React, { Component, PropTypes } from 'react';
import styles from '../ActivityPreview.css';

let logger = null;

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */
export default class APField extends Component {
  /**
   * Gets an instance of Simple Field
   * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
   * @param value the field value
   * @param inline show title and value in the same row.
   * @param separator add or not an <hr> tag.
   * @param nameClass css class for the field label
   * @param valueClass css class for the field value
   * @param translate the translation function
   * @return {SimpleField}
   */
  static instance(trnLabel, value, inline = false, separator = false, nameClass, valueClass, translate) {
    return (<APField
      key={trnLabel} title={translate(trnLabel)} value={value} inline={inline} separator={separator}
      fieldNameClass={nameClass} fieldValueClass={valueClass} />);
  }
  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.any,
    inline: PropTypes.bool,
    useInnerHTML: PropTypes.bool,
    fieldClass: PropTypes.string,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    separator: PropTypes.bool,
  };
  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP field');
    logger.log('constructor');
    this.useSeparator = this.props.separator !== false;
    this.displayClass = this.props.fieldClass || (this.props.inline === true ? styles.inline : styles.block);
  }

  _getValue() {
    const { translate } = this.context;
    const classNames = `${this.props.fieldValueClass} ${this.displayClass}`;
    // To handle boolean fields we dont want to show 'false' as 'No Data'.
    const value = (this.props.value || typeof this.props.value === 'number' || this.props.value === false)
      ? this.props.value
      : translate('No Data');
    let displayValue;
    if (Array.isArray(value)) {
      if (value[0] instanceof Object) {
        displayValue = [];
        value.forEach(v => displayValue.push(v));
      } else {
        displayValue = value.sort()
          .join(', ');
      }
    } else if (typeof value === 'boolean') {
      displayValue = value === true ? translate('Yes') : translate('No');
    } else {
      displayValue = (this.props.inline && this.props.value instanceof String) ? `${value} ` : value;
    }
    if (this.props.useInnerHTML) {
      return <div className={classNames} dangerouslySetInnerHTML={{ __html: displayValue }} />;
    } else {
      return <div className={classNames}>{displayValue}</div>;
    }
  }

  render() {
    const classNames = `${this.props.fieldNameClass} ${this.displayClass}`;
    return (<div className={this.displayClass}>
      <div className={classNames}>{this.props.title}</div>
      {this._getValue()}
      {this.useSeparator ? <hr /> : ''}
    </div>);
  }
}
