import React, { Component, PropTypes } from 'react';
import Section from './Section';
import * as AC from '../../../../utils/constants/ActivityConstants';
import LoggerManager from '../../../../modules/util/LoggerManager';
import ActivityFieldsManager from '../../../../modules/activity/ActivityFieldsManager';
import * as VC from '../../../../utils/constants/ValueConstants';

/**
 * Identification section
 * @author Nadejda Mandrescu
 */
class APIdentification extends Component {
  static propTypes = {
    buildSimpleField: PropTypes.func.isRequired,
    activityFieldsManager: PropTypes.instanceOf(ActivityFieldsManager).isRequired,
    activity: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    LoggerManager.log('constructor');
  }

  render() {
    const { buildSimpleField } = this.props;
    const fieldPaths = [AC.STATUS_REASON, AC.TYPE_OF_IMPLEMENTATION,
      AC.MODALITIES, AC.OBJECTIVE, AC.DESCRIPTION, AC.PROJECT_COMMENTS, AC.LESSONS_LEARNED, AC.PROJECT_IMPACT,
      AC.ACTIVITY_SUMMARY, AC.CONDITIONALITIES, AC.PROJECT_MANAGEMENT, AC.A_C_CHAPTER];
    // Show ministry_code only when activity_budget is enabled and has value 'On Budget'.
    if (this.props.activityFieldsManager.isFieldPathEnabled(AC.ACTIVITY_BUDGET)
      && this.props.activity[AC.ACTIVITY_BUDGET]
      && this.props.activity[AC.ACTIVITY_BUDGET].value === VC.ON_BUDGET) {
      fieldPaths.push(AC.MINISTRY_CODE);
    }
    return (
      <div>
        {fieldPaths.map(fieldPath => buildSimpleField(fieldPath, true))}
      </div>
    );
  }
}

export default Section(APIdentification, 'Identification', true, 'APIdentification');
