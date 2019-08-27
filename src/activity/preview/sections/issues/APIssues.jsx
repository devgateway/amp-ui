import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section.jsx';
import styles from './APIssues.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import APMeasure from './APMeasure.jsx';
import UIUtils from '../../../../../src/utils/UIUtils';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APIssues extends Component {
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
    logger = new Logger('AP issues');
    logger.debug('constructor');
  }

  _buildIssues() {
    const { DateUtils, activity, activityFieldsManager } = this.props;
    const { translate } = this.context;
    let content = [];
    if (activity[ActivityConstants.ISSUES]) {
      activity[ActivityConstants.ISSUES].forEach((issue) => {
        let date = '';
        /* eslint-disable max-len */
        if (activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.ISSUE_DATE}`)) {
          date = ` ${DateUtils.createFormattedDate(issue[ActivityConstants.ISSUE_DATE])}`;
        }
        /* eslint-enable max-len */
        content.push(
          <div className={styles.issues} key={UIUtils.stringToUniqueId()}>{`${issue.name || ''}${date}`}</div>);
        issue[ActivityConstants.MEASURES].forEach((measure) => {
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
    if (activityFieldsManager.isFieldPathEnabled(ActivityConstants.ISSUES)) {
      return <div>{this._buildIssues()}</div>;
    } else {
      return <div className={styles.nodata}>{translate('No Data')}</div>;
    }
  }
}

export default Section(APIssues, { SectionTitle: 'Issues',
  useEncapsulateHeader: true,
  sID: 'APIssues'
});
