import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import APPercentageList from '../components/APPercentageList.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import FieldsManager from '../../../modules/field/FieldsManager';

const APNationalPlanList = APPercentageList(ActivityConstants.NATIONAL_PLAN_OBJECTIVE,
  ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, 'National Plan Objective');
const PrimaryProgramList = APPercentageList(ActivityConstants.PRIMARY_PROGRAMS,
  ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, 'Primary Program');
const SecondaryProgramList = APPercentageList(ActivityConstants.SECONDARY_PROGRAMS, ActivityConstants.PROGRAM,
  ActivityConstants.PROGRAM_PERCENTAGE, 'Secondary Program');

let logger = null;

/**
 * Activity Preview Program section
 * @author Nadejda Mandrescu
 */
class APProgram extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    rtl: PropTypes.bool,
    Logger: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Program');
    logger.debug('constructor');
  }

  render() {
    return (<div>
      <div className={styles.primary_sector}>
        <APNationalPlanList key="national-plan-list" {...this.props} />
      </div>
      <div className={styles.primary_sector}>
        <PrimaryProgramList key="primary-programs-list" {...this.props} />
      </div>
      <div className={styles.secondary_sector}>
        <SecondaryProgramList key="secondary-programs-list" {...this.props} />
      </div>
    </div>);
  }
}

export default Section(APProgram, { SectionTitle: 'Program',
  useEncapsulateHeader: true,
  sID: 'APProgram'
});
