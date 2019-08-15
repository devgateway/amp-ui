import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import APPercentageList from '../components/APPercentageList';
import {
  PRIMARY_PROGRAMS,
  SECONDARY_PROGRAMS,
  PROGRAM,
  PROGRAM_PERCENTAGE,
  NATIONAL_PLAN_OBJECTIVE
} from '../../../../utils/constants/ActivityConstants';
import * as styles from '../ActivityPreview.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import Logger from '../../../../modules/util/LoggerManager';

const APNationalPlanList = APPercentageList(NATIONAL_PLAN_OBJECTIVE, PROGRAM, PROGRAM_PERCENTAGE,
  'National Plan Objective');
const PrimaryProgramList = APPercentageList(PRIMARY_PROGRAMS, PROGRAM, PROGRAM_PERCENTAGE, 'Primary Program');
const SecondaryProgramList = APPercentageList(SECONDARY_PROGRAMS, PROGRAM, PROGRAM_PERCENTAGE, 'Secondary Program');

const logger = new Logger('AP Program');

/**
 * Activity Preview Program section
 * @author Nadejda Mandrescu
 */
class APProgram extends Component {
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired
  };
  /* eslint-enable react/no-unused-prop-types */

  constructor(props) {
    super(props);
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

export default Section(APProgram, 'Program', true, 'APProgram');