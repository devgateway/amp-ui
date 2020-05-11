import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import UIUtils from '../../../utils/UIUtils';
import { FeatureManagerConstants } from '../../../index';
import APField from '../components/APField.jsx';

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
    const { buildSimpleField, translate } = this.props;
    return (<div key={Math.random()}>
      {buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.INDICATOR}`, true, null, false, indicator,
        null, { noTitle: true, fieldClass: styles.noborder })}
      {ActivityConstants.ME_SECTIONS.map(s => (<table
        key={Math.random()}
        className={[styles.box_table, styles.section_group_class].join(' ')}>
        <tbody>
          <tr key={Math.random()}>
            <td>
              <APField
                key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_VALUE}: `)}
                value={indicator[s][ActivityConstants.INDICATOR_VALUE]} inline={false} separator={false}
                fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
            </td>
            <td>
              <APField
                key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_DATE}: `)}
                value={indicator[s][ActivityConstants.INDICATOR_DATE]} inline={false} separator={false}
                fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
            </td>
          </tr>
          <tr key={Math.random()}>
            <td colSpan={2}>
              <APField
                key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_COMMENT}: `)}
                value={indicator[s][ActivityConstants.INDICATOR_COMMENT]} inline={false} separator={false}
                fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
            </td>
          </tr>
        </tbody>
      </table>))}
    </div>);
  }

  render() {
    const { activity } = this.props;
    return (<div>
      {activity[ActivityConstants.INDICATORS].map(indicator => (this._generateTable(indicator)))}
    </div>);
  }
}

export default Section(APME, { SectionTitle: 'M&E',
  useEncapsulateHeader: true,
  sID: 'APME'
});
