import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import APPercentageList from '../components/APPercentageList.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import FieldsManager from '../../../modules/field/FieldsManager';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';

const APNationalPlanList = APPercentageList(ActivityConstants.NATIONAL_PLAN_OBJECTIVE,
  ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, 'National Plan Objective',
  { field: 'indirect_programs', value: 'program', percentage: 'percentage' });
const PrimaryProgramList = APPercentageList(ActivityConstants.PRIMARY_PROGRAMS,
  ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, 'Primary Program',
  { field: 'indirect_programs', value: 'program', percentage: 'percentage' });
const SecondaryProgramList = APPercentageList(ActivityConstants.SECONDARY_PROGRAMS, ActivityConstants.PROGRAM,
  ActivityConstants.PROGRAM_PERCENTAGE, 'Secondary Program',
  { field: 'indirect_programs', value: 'program', percentage: 'percentage' });

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
    Logger: PropTypes.func.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Program');
    logger.debug('constructor');
  }

  getItemTitle(item) {
    return item[ActivityConstants.PROGRAM].value;
  }

  render() {
    const { buildSimpleField } = this.props;
    const options = { fieldNameClass: styles.section_field_name };
    return (<div>
      <div className={styles.primary_sector}>
        <APNationalPlanList
          key="national-plan-list" getItemTitle={this.getItemTitle} {...this.props}
        />
      </div>
      <div className={styles.primary_sector}>
        <PrimaryProgramList
          key="primary-programs-list" getItemTitle={this.getItemTitle} {...this.props} />
      </div>
      <div className={styles.secondary_sector}>
        <SecondaryProgramList
          key="secondary-programs-list" getItemTitle={this.getItemTitle} {...this.props} />
      </div>
      <div>
        {buildSimpleField('program_description', true, null, false, null, null, options)}
      </div>
    </div>);
  }
}

export default Section(APProgram, {
  SectionTitle: 'Program',
  useEncapsulateHeader: true,
  sID: 'APProgram'
});
