import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../activityAssets/stylesheets/ActivityPreview.css';


/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */
export default class TestAPField extends Component {
  /**
   * Gets an instance of Simple Field
   * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
   * @param value the field value
   * @param inline show title and value in the same row.
   * @param separator add or not an <hr> tag.
   * @param nameClass css class for the field label
   * @param valueClass css class for the field value
   * @return {SimpleField}
   */
  static instance(trnLabel, value, inline = false, separator = false, nameClass, valueClass) {
    return (<TestAPField
      key={trnLabel} title={this.props.translate(trnLabel)} value={value} inline={inline} separator={separator}
      fieldNameClass={nameClass} fieldValueClass={valueClass} />);
  }

  constructor(props) {
    super(props);
    this.props.ampLogger.log('constructore');
    this.useSeparator = this.props.separator !== false;
    this.displayClass = this.props.fieldClass || (this.props.inline === true ? styles.inline : styles.block);
  }

  _getValue() {
    const classNames = `${this.props.fieldValueClass} ${this.displayClass}`;
    // To handle boolean fields we dont want to show 'false' as 'No Data'.
    const value = (this.props.value || this.props.value === false) ? this.props.value : this.props.translate('No Data');
    let displayValue;
    if (Array.isArray(value)) {
      if (value[0] instanceof Object) {
        displayValue = [];
        value.forEach(v => displayValue.push(v));
      } else {
        displayValue = value.sort().join(', ');
      }
    } else if (typeof value === 'boolean') {
      displayValue = value === true ? this.props.translate('Yes') : this.props.translate('No');
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

TestAPField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  useInnerHTML: PropTypes.bool,
  fieldClass: PropTypes.string,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  separator: PropTypes.bool,
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};
