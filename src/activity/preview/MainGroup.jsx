import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ActivityPreview.css';
import ActivityConstants from '../../modules/util/ActivityConstants';
import FeatureManagerConstants from '../../modules/util/FeatureManagerConstants';
import APIdentification from './sections/APIdentification.jsx';
import APInternalIds from './sections/APInternalIds.jsx';
import APPlanning from './sections/APPlanning.jsx';
import APLocation from './sections/APLocation.jsx';
import APProgram from './sections/APProgram.jsx';
import APSector from './sections/APSector.jsx';
import APFundingSources from './sections/APFundingSources.jsx';
import APFundingSection from './sections/funding/APFundingSection.jsx';
import APRelatedOrganizations from './sections/APRelatedOrganizations.jsx';
import APIssues from './sections/issues/APIssues.jsx';
import APContact from './sections/APContact.jsx';
import APStructures from './sections/APStructures.jsx';

let logger = null;

/**
 * Main content
 * @author Nadejda Mandrescu
 */
export default class MainGroup extends Component {
  static propTypes = {
    Logger: PropTypes.func.isRequired,
    APDocumentPage: PropTypes.any.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
    getAmountsInThousandsMessage: PropTypes.func.isRequired,
    getActivityContactIds: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Main group');
    logger.debug('constructor');
  }

  render() {
    // TODO (iteration 2+) hide sections that are not directly connected to a single field (e.g. planning, program)
    const {
      APDocumentPage, rawNumberToFormattedString, getAmountsInThousandsMessage,
      getActivityContactIds
    } = this.props;
    return (<div className={styles.main_group_container}>
      <APIdentification fmPath={FeatureManagerConstants.ACTIVITY_IDENTIFICATION} />
      <APInternalIds
        sectionPath={ActivityConstants.ACTIVITY_INTERNAL_IDS} />
      <APPlanning
        fmPath={FeatureManagerConstants.ACTIVITY_PLANNING}
        inline={false}
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value} />
      <APLocation
        sectionPath={ActivityConstants.LOCATIONS} tablify columns={ActivityConstants.ACTIVITY_LOCATION_COLS}
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value}
        rawNumberToFormattedString={rawNumberToFormattedString} />
      <APProgram
        fieldNameClass={styles.sector_title} fmPath={FeatureManagerConstants.ACTIVITY_PROGRAM}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value}
        rawNumberToFormattedString={rawNumberToFormattedString} />
      <APSector
        fieldNameClass={styles.sector_title} fieldValueClass={''} fmPath={FeatureManagerConstants.ACTIVITY_SECTORS}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value}
        rawNumberToFormattedString={rawNumberToFormattedString} />
      <APFundingSources
        sectionPath={ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES}
        fieldValueClass={styles.box_field_value} />
      <APFundingSection
        fieldNameClass={styles.box_field_name} fieldValueClass={styles.box_field_value}
        sectionPath={ActivityConstants.FUNDINGS} rawNumberToFormattedString={rawNumberToFormattedString}
        getAmountsInThousandsMessage={getAmountsInThousandsMessage} />
      <APRelatedOrganizations
        fieldNameClass={styles.sector_title} fieldValueClass={''}
        fmPath={FeatureManagerConstants.ACTIVITY_ORGANIZATIONS}
        percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value}
        getAmountsInThousandsMessage={getAmountsInThousandsMessage}
        rawNumberToFormattedString={rawNumberToFormattedString} />
      <APIssues sectionPath={ActivityConstants.ISSUES} />
      <APContact
        fieldNameClass={styles.hidden} fieldValueClass={styles.box_field_value_tight}
        columns={ActivityConstants.ACTIVITY_CONTACT_COLS} fmPath={FeatureManagerConstants.ACTIVITY_CONTACT}
        getActivityContactIds={getActivityContactIds} />
      <APStructures sectionPath={ActivityConstants.STRUCTURES} />
      <APDocumentPage
        sectionPath={ActivityConstants.ACTIVITY_DOCUMENTS}
        fieldNameClass={[styles.section_field_name, styles.noborder].join(' ')}
        fieldValueClass={[styles.section_field_value, styles.noborder].join(' ')}
      />
    </div>);
  }
}
