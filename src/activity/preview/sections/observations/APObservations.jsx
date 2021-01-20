import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section.jsx';
import styles from './APObservations.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import APMeasure from '../issues/APMeasure.jsx';
import UIUtils from '../../../../../src/utils/UIUtils';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
const APObservations = (fieldName) => class extends Component {
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
    logger = new Logger('AP Observations');
    logger.debug('constructor');
  }

  _buildObservations() {
    const { DateUtils, activity, activityFieldsManager } = this.props;
    const { translate } = this.context;
    let content = [];
    if (activity[fieldName]) {
      activity[fieldName].forEach((o) => {
        let date = '';
        if (activityFieldsManager.isFieldPathEnabled(
          `${fieldName}~${ActivityConstants.OBSERVATIONS_DATE}`)) {
          date = ` ${DateUtils.createFormattedDate(o[ActivityConstants.OBSERVATIONS_DATE])}`;
        }
        content.push(
          <div
            className={styles.lmo}
            key={UIUtils.stringToUniqueId()}>{`${o.name || ''}${date}`}
          </div>);
        o[ActivityConstants.MEASURES].forEach((measure) => {
          content.push(
            <APMeasure
              key={UIUtils.stringToUniqueId()} activityFieldsManager={activityFieldsManager}
              measure={measure}
              path={fieldName}
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
    if (activityFieldsManager.isFieldPathEnabled(fieldName)) {
      return <div>{this._buildObservations()}</div>;
    } else {
      return <div className={styles.nodata}>{translate('No Data')}</div>;
    }
  }
};

export const APLineMinistryObservations = Section(APObservations(ActivityConstants.LINE_MINISTRY_OBSERVATIONS),
  {
    SectionTitle: 'Line Ministry Observations',
    useEncapsulateHeader: true,
    sID: 'APLineMinistryObservations'
  });

export const APRegionalObservations = Section(APObservations(ActivityConstants.REGIONAL_OBSERVATIONS),
  {
    SectionTitle: 'Regional Observations',
    useEncapsulateHeader: true,
    sID: 'APRegionalObservations'
  });

