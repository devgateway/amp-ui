/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import APField from '../components/APField.jsx';
import FeatureManager from '../../../modules/util/FeatureManager';
import FeatureManagerConstants from '../../../modules/util/FeatureManagerConstants';

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

  /** Resolve a country name from activity.locations by AmpActivityLocation id. */
  _getLocationName(locationId) {
    const { activity } = this.props;
    const locations = activity[ActivityConstants.LOCATIONS] || [];
    const found = locations.find(loc => loc.id === locationId);
    if (found && found[ActivityConstants.LOCATION]) {
      return found[ActivityConstants.LOCATION].value;
    }
    return null;
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
      {this._generateDisaggregationTable(indicator)}
    </div>);
  }

  _generateValueOrValuesTable(sectionName, value) {
    return (<div>
      {Array.isArray(value)
        ? value.map(v => this._generateValueTable(sectionName, v))
        : this._generateValueTable(sectionName, value)}
    </div>);
  }

  _generateValueTable(sectionName, value) {
    if (!value) {
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
              key={Math.random()} title={translate(`${sectionName} ${ActivityConstants.INDICATOR_VALUE}`)}
              value={value[ActivityConstants.INDICATOR_VALUE]} inline={false} separator={false}
              fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} /> : null}
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
      <tr key={Math.random()}>
        <td colSpan={2}>
          {FeatureManager.isFMSettingEnabled(FeatureManagerConstants[`ME_ITEM_${sectionName.toUpperCase()}_VALUE_BASE_COMMENTS`]) ?
            <APField
              key={Math.random()} title={translate(`${sectionName} ${ActivityConstants.INDICATOR_COMMENT}`)}
              value={value[ActivityConstants.INDICATOR_COMMENT]} inline={false} separator={false}
              fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} /> : null}
        </td>
      </tr>
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
          key={Math.random()} title={`${titlePrefix} - ${titleSuffix}`}
          value={value[ActivityConstants.INDICATOR_TAGGED_VALUE]} inline={false} separator={false}
          fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
      </td>
    );
  }

  _renderGlobalValue(gv) {
    if (!gv) return null;
    const { translate } = this.props;
    return (
      <span>
        {gv[ActivityConstants.ORIGINAL_VALUE] != null ? gv[ActivityConstants.ORIGINAL_VALUE] : '—'}
        {gv[ActivityConstants.ORIGINAL_VALUE_DATE] ? ` (${gv[ActivityConstants.ORIGINAL_VALUE_DATE]})` : ''}
        {gv[ActivityConstants.REVISED_VALUE] != null
          ? ` / ${translate('Revised')}: ${gv[ActivityConstants.REVISED_VALUE]}` : ''}
        {gv[ActivityConstants.REVISED_VALUE_DATE] ? ` (${gv[ActivityConstants.REVISED_VALUE_DATE]})` : ''}
      </span>
    );
  }

  _generateDisaggregationTable(indicator) {
    const disaggValues = indicator[ActivityConstants.DISAGGREGATION_VALUES];
    if (!disaggValues || !disaggValues.length) return null;
    const { translate } = this.props;
    return (
      <table key={Math.random()} className={[styles.box_table, styles.section_group_class].join(' ')}
        style={{ marginTop: 6, borderTop: '1px solid #ccc', width: '100%' }}>
        <thead>
          <tr>
            <th colSpan={5} style={{ textAlign: 'left', padding: '4px 0' }}>
              {translate('Disaggregation Values')}
            </th>
          </tr>
          <tr>
            <th>{translate('Category')}</th>
            <th>{translate('Sub-Category')}</th>
            <th>{translate('Base Value')}</th>
            <th>{translate('Target Value')}</th>
            <th>{translate('Actual Values')}</th>
          </tr>
        </thead>
        <tbody>
          {disaggValues.map(dv => (
            <tr key={dv.id || Math.random()}>
              <td>{dv[ActivityConstants.PARENT_CATEGORY_NAME] || '—'}</td>
              <td>{dv[ActivityConstants.CHILD_CATEGORY_NAME] || '—'}</td>
              <td>{this._renderGlobalValue(dv[ActivityConstants.BASE_VALUE])}</td>
              <td>{this._renderGlobalValue(dv[ActivityConstants.TARGET_VALUE])}</td>
              <td>
                {(dv[ActivityConstants.ACTUAL_VALUES] || []).map((av, i) => (
                  <div key={i}>{this._renderGlobalValue(av)}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { activity, translate } = this.props;
    const indicators = activity[ActivityConstants.INDICATORS];
    if (!indicators || !indicators.length) return null;

    const isMulticountry = indicators.some(ind => ind[ActivityConstants.ACTIVITY_LOCATION]);

    if (!isMulticountry) {
      return (<div>
        {indicators.map(indicator => this._generateTable(indicator))}
      </div>);
    }

    // Group by activity_location id; null/undefined → "Common" group
    const groups = new Map();
    indicators.forEach(ind => {
      const locId = ind[ActivityConstants.ACTIVITY_LOCATION] || null;
      if (!groups.has(locId)) groups.set(locId, []);
      groups.get(locId).push(ind);
    });

    const sections = [];
    groups.forEach((inds, locId) => {
      const locationName = locId ? this._getLocationName(locId) : null;
      sections.push(
        <div key={locId || 'common'}>
          <div className={styles.box_field_name} style={{ background: '#e8e8e8', padding: '4px 6px', marginTop: 8 }}>
            {locationName || translate('Common Indicators')}
          </div>
          {inds.map(ind => this._generateTable(ind))}
        </div>
      );
    });

    return <div>{sections}</div>;
  }
}

export default Section(APME, { SectionTitle: 'M&E',
  useEncapsulateHeader: true,
  sID: 'APME'
});


