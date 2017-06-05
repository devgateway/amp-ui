import React, { Component } from 'react';
import styles from './ActivityPreview.css';
import * as AC from '../../../utils/constants/ActivityConstants';
import * as FMC from '../../../utils/constants/FeatureManagerConstants';
import APIdentification from './sections/APIdentification';
import { APInternalIds } from './sections/APInternalIds';
import APPlanning from './sections/APPlanning';
import APLocation from './sections/APLocation';
import APProgram from './sections/APProgram';
import APSector from './sections/APSector';
import APFundingSources from './sections/APFundingSources';
import Logger from '../../../modules/util/LoggerManager';
import APFundingSection from './sections/funding/APFundingSection';
import APRelatedOrganizations from './sections/APRelatedOrganizations';
import APIssues from './sections/issues/APIssues';
import APContact from './sections/APContact';
import APStructures from './sections/APStructures';
import { APDocumentPage } from '../../../containers/ResourcePage';

const logger = new Logger('AP Main group');

/**
 * Main content
 * @author Nadejda Mandrescu
 */
export default class MainGroup extends Component {

  constructor(props) {
    super(props);
    logger.debug('constructor');
  }

  render() {
    // TODO (iteration 2+) hide sections that are not directly connected to a single field (e.g. planning, program)
    return (<div className={styles.main_group_container}>
      <APIdentification fmPath={FMC.ACTIVITY_IDENTIFICATION} />
      <APInternalIds
        sectionPath={AC.ACTIVITY_INTERNAL_IDS} />
      <APPlanning
        fmPath={FMC.ACTIVITY_PLANNING}
        inline={false}
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
      <APLocation
        sectionPath={AC.LOCATIONS} tablify columns={AC.ACTIVITY_LOCATION_COLS}
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
      <APProgram
        fieldNameClass={styles.sector_title} fmPath={FMC.ACTIVITY_PROGRAM}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value} />
      <APSector
        fieldNameClass={styles.sector_title} fieldValueClass={''} fmPath={FMC.ACTIVITY_SECTORS}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value} />
      <APFundingSources sectionPath={AC.TOTAL_NUMBER_OF_FUNDING_SOURCES} fieldValueClass={styles.box_field_value} />
      <APFundingSection
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} sectionPath={AC.FUNDINGS} />
      <APRelatedOrganizations
        fieldNameClass={styles.sector_title} fieldValueClass={''} fmPath={FMC.ACTIVITY_ORGANIZATIONS}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value} />
      <APIssues sectionPath={AC.ISSUES} />
      <APContact
        fieldNameClass={styles.hidden} fieldValueClass={styles.box_field_value_tight}
        columns={AC.ACTIVITY_CONTACT_COLS} fmPath={FMC.ACTIVITY_CONTACT} />
      <APStructures sectionPath={AC.STRUCTURES} />
      <APDocumentPage
        sectionPath={AC.ACTIVITY_DOCUMENTS}
        fieldNameClass={[styles.section_field_name, styles.noborder].join(' ')}
        fieldValueClass={[styles.section_field_value, styles.noborder].join(' ')}
      />
    </div>);
  }
}