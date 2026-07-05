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

  _generateTable(indicator) {
    const { buildSimpleField } = this.props;
    return (<div key={Math.random()}>
      {buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.INDICATOR}`, true, null, false, indicator,
        null, { noTitle: true, fieldValueClass: styles.sector_title })}
      {/*{buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.LOG_FRAME}`, true, null, false, indicator,*/}
      {/*  null, { fieldClass: styles.noborder })}*/}
      {/*{buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.RISK}`, true, null, false, indicator,*/}
      {/*  null, { fieldClass: styles.noborder })}*/}
      <div className={styles.box_field_name} style={{ marginTop: 8, marginBottom: 4 }}>
        {this.props.translate('Value Tracking')}
      </div>
      {(!indicator[ActivityConstants.DISAGGREGATION_VALUES] || !indicator[ActivityConstants.DISAGGREGATION_VALUES].length)
        && ActivityConstants.ME_SECTIONS
        ? ActivityConstants.ME_SECTIONS.map(s => this._generateValueOrValuesTable(s, indicator[s]))
        : null}
      {this._generateDisaggregationTable(indicator)}
    </div>);
  }

  _generateValueOrValuesTable(sectionName, value) {
    // For the 'actual' section we may have multiple entries — render as a single structured table.
    if (sectionName === ActivityConstants.CURRENT && Array.isArray(value) && value.length > 0) {
      return this._generateActualsTable(value);
    }
    return (<div>
      {Array.isArray(value)
        ? value.map(v => this._generateValueTable(sectionName, v))
        : this._generateValueTable(sectionName, value)}
    </div>);
  }

  _generateActualsTable(values) {
    const { translate } = this.props;
    const hasComment = values.some(v => v[ActivityConstants.INDICATOR_COMMENT]);
    return (
      <table key={Math.random()} className={[styles.box_table, styles.section_group_class].join(' ')}
        style={{ marginTop: 6, width: '100%' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '4px 6px' }}>{translate('Actual Date')}</th>
            <th style={{ textAlign: 'left', padding: '4px 6px' }}>{translate('Actual Value')}</th>
            {hasComment && <th style={{ textAlign: 'left', padding: '4px 6px' }}>{translate('Comment')}</th>}
          </tr>
        </thead>
        <tbody>
          {values.map((v, idx) => (
            <tr key={idx}>
              <td style={{ padding: '3px 6px' }}>
                {v[ActivityConstants.INDICATOR_DATE] || '\u2014'}
              </td>
              <td style={{ padding: '3px 6px' }}>
                {v[ActivityConstants.INDICATOR_VALUE] != null ? v[ActivityConstants.INDICATOR_VALUE] : '\u2014'}
              </td>
              {hasComment && (
                <td style={{ padding: '3px 6px' }}>
                  {v[ActivityConstants.INDICATOR_COMMENT] || '\u2014'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
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
    const original = [
      gv[ActivityConstants.ORIGINAL_VALUE] != null ? gv[ActivityConstants.ORIGINAL_VALUE] : '—',
      gv[ActivityConstants.ORIGINAL_VALUE_DATE] ? `(${gv[ActivityConstants.ORIGINAL_VALUE_DATE]})` : null,
    ].filter(Boolean).join(' ');

    const revised = gv[ActivityConstants.REVISED_VALUE] != null
      ? [
        `${translate('Revised')}: ${gv[ActivityConstants.REVISED_VALUE]}`,
        gv[ActivityConstants.REVISED_VALUE_DATE] ? `(${gv[ActivityConstants.REVISED_VALUE_DATE]})` : null,
      ].filter(Boolean).join(' ')
      : null;

    return (
      <div className={styles.me_disagg_global_value}>
        <div>{original}</div>
        {revised ? <div className={styles.me_disagg_global_value_revised}>{revised}</div> : null}
      </div>
    );
  }

  _generateDisaggregationTable(indicator) {
    const disaggValues = indicator[ActivityConstants.DISAGGREGATION_VALUES];
    if (!disaggValues || !disaggValues.length) return null;
    const { translate } = this.props;

    const groups = [];
    const groupIndex = new Map();
    disaggValues.forEach(dv => {
      const parentKey = dv[ActivityConstants.PARENT_CATEGORY_NAME] || '\u2014';
      if (!groupIndex.has(parentKey)) {
        groupIndex.set(parentKey, []);
        groups.push({ key: parentKey, items: groupIndex.get(parentKey) });
      }
      groupIndex.get(parentKey).push(dv);
    });

    // Flatten into renderable rows, carrying rowSpan info
    const rows = [];
    groups.forEach(group => {
      let groupRowCount = 0;
      const groupRows = [];
      group.items.forEach(dv => {
        const actuals = dv[ActivityConstants.ACTUAL_VALUES] || [];
        const dvRowCount = Math.max(1, actuals.length);
        groupRowCount += dvRowCount;
        Array.from({ length: dvRowCount }).forEach((_, i) => {
          groupRows.push({
            dv,
            isFirstDvRow: i === 0,
            dvRowCount,
            av: actuals[i] || null,
          });
        });
      });
      groupRows.forEach((row, idx) => {
        rows.push({ ...row, isFirstGroupRow: idx === 0, groupKey: group.key, groupRowCount });
      });
    });

    return (
      <table key={Math.random()} className={[styles.box_table, styles.section_group_class, styles.me_disagg_table].join(' ')}
        style={{ marginTop: 6, borderTop: '1px solid #ccc', width: '100%' }}>
        <thead>
          <tr>
            <th colSpan={6} className={styles.me_disagg_title}>
              {translate('Disaggregation Values')}
            </th>
          </tr>
          <tr>
            <th className={[styles.me_disagg_header, styles.me_disagg_category_col].join(' ')}>{translate('Category')}</th>
            <th className={[styles.me_disagg_header, styles.me_disagg_subcategory_col].join(' ')}>{translate('Sub-Category')}</th>
            <th className={[styles.me_disagg_header, styles.me_disagg_value_col].join(' ')}>{translate('Base Value')}</th>
            <th className={[styles.me_disagg_header, styles.me_disagg_value_col].join(' ')}>{translate('Target Value')}</th>
            <th className={[styles.me_disagg_header, styles.me_disagg_actual_col].join(' ')}>{translate('Actual Value')}</th>
            <th className={[styles.me_disagg_header, styles.me_disagg_date_col].join(' ')}>{translate('Actual Date')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.isFirstGroupRow && (
                <td rowSpan={row.groupRowCount} className={[styles.me_disagg_cell, styles.me_disagg_category_col].join(' ')}>{row.groupKey}</td>
              )}
              {row.isFirstDvRow && (
                <td rowSpan={row.dvRowCount} className={[styles.me_disagg_cell, styles.me_disagg_subcategory_col].join(' ')}>
                  {row.dv[ActivityConstants.CHILD_CATEGORY_NAME] || '\u2014'}
                </td>
              )}
              {row.isFirstDvRow && (
                <td rowSpan={row.dvRowCount} className={[styles.me_disagg_cell, styles.me_disagg_value_col].join(' ')}>
                  {this._renderGlobalValue(row.dv[ActivityConstants.BASE_VALUE]) || '\u2014'}
                </td>
              )}
              {row.isFirstDvRow && (
                <td rowSpan={row.dvRowCount} className={[styles.me_disagg_cell, styles.me_disagg_value_col].join(' ')}>
                  {this._renderGlobalValue(row.dv[ActivityConstants.TARGET_VALUE]) || '\u2014'}
                </td>
              )}
              <td className={[styles.me_disagg_cell, styles.me_disagg_actual_col].join(' ')}>
                {row.av && row.av[ActivityConstants.ORIGINAL_VALUE] != null
                  ? row.av[ActivityConstants.ORIGINAL_VALUE] : '\u2014'}
              </td>
              <td className={[styles.me_disagg_cell, styles.me_disagg_date_col].join(' ')}>
                {row.av && row.av[ActivityConstants.ORIGINAL_VALUE_DATE]
                  ? row.av[ActivityConstants.ORIGINAL_VALUE_DATE] : '\u2014'}
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

    const isMulticountry = indicators.some(ind => {
      const raw = ind[ActivityConstants.ACTIVITY_LOCATION];
      return raw && (typeof raw === 'object' ? raw.id : raw);
    });

    if (!isMulticountry) {
      return (<div>
        {indicators.map(indicator => this._generateTable(indicator))}
      </div>);
    }

    // Group by activity_location id; null/undefined → "Common" group.
    // activity_location may be hydrated to {id, value} so normalise to a numeric key.
    const groups = new Map();
    indicators.forEach(ind => {
      const raw = ind[ActivityConstants.ACTIVITY_LOCATION];
      const locIdNum = raw && (typeof raw === 'object' ? raw.id : raw) || null;
      if (!groups.has(locIdNum)) groups.set(locIdNum, []);
      groups.get(locIdNum).push(ind);
    });

    const sections = [];
    groups.forEach((inds, locId) => {
      // activity_location is now AmpCategoryValueLocations — after hydration its .value is the location name.
      const raw = inds[0][ActivityConstants.ACTIVITY_LOCATION];
      const locationName = raw && typeof raw === 'object' ? (raw.value || null) : null;
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


