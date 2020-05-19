import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section.jsx';
import styles from './APLineMinistryObservations.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import APMeasure from '../issues/APMeasure.jsx';
import UIUtils from '../../../../../src/utils/UIUtils';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APLineMinistryObservations extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    DateUtils: PropTypes.func,
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP LineMinistryObservations');
    logger.debug('constructor');
  }

  _buildLineMinistryObservations() {
    const { DateUtils, activity, activityFieldsManager } = this.props;
    const { translate } = this.context;
    let content = [];
    if (activity[ActivityConstants.LINE_MINISTRY_OBSERVATIONS]) {
      activity[ActivityConstants.LINE_MINISTRY_OBSERVATIONS].forEach((lmo) => {
        let date = '';
        /* eslint-disable max-len */
        if (activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.LINE_MINISTRY_OBSERVATIONS}~${ActivityConstants.LINE_MINISTRY_OBSERVATIONS_DATE}`)) {
          date = ` ${DateUtils.createFormattedDate(lmo[ActivityConstants.LINE_MINISTRY_OBSERVATIONS_DATE])}`;
        }
        /* eslint-enable max-len */
        content.push(
          <div className={styles.lmo} key={UIUtils.stringToUniqueId()}>{`${lmo.name || ''}${date}`}</div>);
        lmo[ActivityConstants.MEASURES].forEach((measure) => {
          content.push(
            <APMeasure
              key={UIUtils.stringToUniqueId()} activityFieldsManager={activityFieldsManager}
              measure={measure}
              DateUtils={DateUtils} />);
        });
      });
      if (content.length === 0) {
        content = (<div className={styles.nodata}>{translate('No Data')}</div>);
      }
    }
    return content;
  }

  render() {
    const { activityFieldsManager } = this.props;
    const { translate } = this.context;
    if (activityFieldsManager.isFieldPathEnabled(ActivityConstants.LINE_MINISTRY_OBSERVATIONS)) {
      return <div>{this._buildLineMinistryObservations()}</div>;
    } else {
      return <div className={styles.nodata}>{translate('No Data')}</div>;
    }
  }
}

export default Section(APLineMinistryObservations, { SectionTitle: 'Line Ministry Observations',
  useEncapsulateHeader: true,
  sID: 'APLineMinistryObservations'
});
