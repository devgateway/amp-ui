/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import APField from '../components/APField.jsx';
import FeatureManager from '../../../modules/util/FeatureManager';
import FeatureManagerConstants from '../../../modules/util/FeatureManagerConstants';
import NumberUtils from "../../../utils/NumberUtils";

let logger = null;

class APME extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP M&E');
    logger.debug('constructor');
  }

  _generateTable(indicator) {
    const { buildSimpleField } = this.props;
    return (<div key={Math.random()}>
      {buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.INDICATOR}`, true, null, false, indicator,
        null, { noTitle: true, fieldValueClass: styles.sector_title })}
      {buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.LOG_FRAME}`, true, null, false, indicator,
        null, { fieldClass: styles.noborder })}
      {buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.RISK}`, true, null, false, indicator,
        null, { fieldClass: styles.noborder })}
      {ActivityConstants.ME_SECTIONS
        ? ActivityConstants.ME_SECTIONS.map(s => this._generateValueOrValuesTable(s, indicator[s]))
        : null}
    </div>);
  }

  _generateValueOrValuesTable(sectionName, value) {
    let content;
    if (Array.isArray(value)) {
      if (value.length > 0) {
        content = value.map(v => this._generateValueTable(sectionName, v));
      } else {
        content = this._generateValueTable(sectionName, {});
      }
    } else {
      content = this._generateValueTable(sectionName, value);
    }
    return (
      <div>
        {content}
      </div>
    );
  }

  _generateValueTable(sectionName, value) {
    if (!value && (sectionName === ActivityConstants.BASE || sectionName === ActivityConstants.REVISED)) {
      return null;
    }
    const { translate } = this.props;
    return (<table
      key={Math.random()}
      className={[styles.box_table, styles.section_group_class].join(' ')}>
      <tbody>
        <tr key={Math.random()}>
          <td>
            {FeatureManager.isFMSettingEnabled(FeatureManagerConstants[`ME_ITEM_${sectionName.toUpperCase()}_VALUE_BASE_VALUE`])
              ? <APField
                key={Math.random()}
                title={translate(`${sectionName} ${ActivityConstants.INDICATOR_VALUE}`)}
                value={NumberUtils.rawNumberToFormattedString(value[ActivityConstants.INDICATOR_VALUE])}
                inline={false}
                separator={false}
                fieldNameClass={styles.box_field_name}
                fieldValueClass={styles.box_field_value} /> : null}
          </td>
          <td>
            {FeatureManager.isFMSettingEnabled(FeatureManagerConstants[`ME_ITEM_${sectionName.toUpperCase()}_VALUE_BASE_DATE`]) ?
              <APField
                key={Math.random()} title={translate(`${sectionName} ${ActivityConstants.INDICATOR_DATE}`)}
                value={value[ActivityConstants.INDICATOR_DATE]} inline={false} separator={false}
                fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} /> : null}
          </td>
        </tr>
        {this._generateTaggedValuesRows(sectionName, value[ActivityConstants.INDICATOR_TAGGED_VALUES])}
        {FeatureManager.isFMSettingEnabled(FeatureManagerConstants[`ME_ITEM_${sectionName.toUpperCase()}_VALUE_BASE_COMMENTS`]) ?
          <tr key={Math.random()}>
            <td colSpan={2}>
              <APField
                key={Math.random()} title={translate(`${sectionName} ${ActivityConstants.INDICATOR_COMMENT}`)}
                value={value[ActivityConstants.INDICATOR_COMMENT]} inline={false} separator={false}
                fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
            </td>
          </tr> : null}
      </tbody>
    </table>);
  }

  _generateTaggedValuesRows(sectionName, value) {
    if (Array.isArray(value)) {
      const arr = [];
      for (let i = 0; i < value.length; i += 2) {
        arr.push((
          <tr key={Math.random()}>
            {this._generateTaggedValueDataCell(sectionName, value[i])}
            {this._generateTaggedValueDataCell(sectionName, (i + 1 < value.length) ? value[i + 1] : null)}
          </tr>
        ));
      }
      return arr;
    } else {
      return null;
    }
  }

  _generateTaggedValueDataCell(sectionName, value) {
    if (!value) {
      return null;
    }
    const { translate } = this.props;
    const titlePrefix = translate(`${sectionName} ${ActivityConstants.INDICATOR_VALUE}`);
    const titleSuffix = translate(value[ActivityConstants.INDICATOR_TAGGED_VALUE_TAG]);
    return (
      <td>
        <APField
          key={Math.random()}
          title={`${titlePrefix} - ${titleSuffix}`}
          value={NumberUtils.rawNumberToFormattedString(value[ActivityConstants.INDICATOR_TAGGED_VALUE])}
          inline={false}
          separator={false}
          fieldNameClass={styles.box_field_name}
          fieldValueClass={styles.box_field_value} />
      </td>
    );
  }

  render() {
    const { activity } = this.props;
    return (<div>
      {activity[ActivityConstants.INDICATORS] ?
        activity[ActivityConstants.INDICATORS].map(indicator => (this._generateTable(indicator))) :
        null}
    </div>);
  }
}

export default Section(APME, { SectionTitle: 'M&E',
  useEncapsulateHeader: true,
  sID: 'APME'
});
