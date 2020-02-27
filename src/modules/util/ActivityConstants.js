import FMC from './FeatureManagerConstants';
import UIUtils from '../../utils/UIUtils';

/**
 * @author Nadejda Mandrescu
 */

// Activity fields
const ACTIVITY_BUDGET = 'activity_budget';
const ACTIVITY_STATUS = 'activity_status';
const STATUS_REASON = 'status_reason';
const FINANCIAL_INSTRUMENT = 'financial_instrument';
const TYPE_OF_IMPLEMENTATION = 'type_of_implementation';
const OBJECTIVE = 'objective';
const RESULTS = 'results';
const BUDGET_CODE_PROJECT_ID = 'budget_code_project_id';
const ACTUAL_APPROVAL_DATE = 'actual_approval_date';
const FUNDINGS = 'fundings';
const FUNDING_DONOR_ORG_ID = 'donor_organization_id';
const IS_DRAFT = 'is_draft';
const ORG_ROLE_ORG_ID = 'organization';
const ADDITIONAL_INFO = 'additional_info';
const PRIMARY_SECTORS = 'primary_sectors';
const SECONDARY_SECTORS = 'secondary_sectors';
const TERTIARY_SECTORS = 'tertiary_sectors';
const TAG_SECTORS = 'tag_sectors';
const SECTOR = 'sector';
const SECTOR_PERCENTAGE = 'sector_percentage';
const FINANCING_INSTRUMENT = 'financing_instrument';
const MODALITIES = 'modalities';
const LINE_MINISTRY_RANK = 'line_ministry_rank';
const GOVERNMENT_AGREEMENT_NUMBER = 'government_agreement_number';
const FUNDING_STATUS = 'funding_status';
const LOCATIONS = 'locations';
const LOCATION = 'location';
const LOCATION_PERCENTAGE = 'location_percentage';
const IMPLEMENTATION_LOCATION = 'implementation_location';
const IMPLEMENTATION_LEVEL = 'implementation_level';
const APPROVAL_STATUS = 'approval_status';
const APPROVED_BY = 'approved_by';
const APPROVAL_DATE = 'approval_date';
const TYPE_OF_ASSISTANCE = 'type_of_assistance';
const EXPENDITURE_CLASS = 'expenditure_class';
const FUNDING_DETAILS = 'funding_details';
const MODE_OF_PAYMENT = 'mode_of_payment';
const FUNDING_CLASSIFICATION_DATE = 'funding_classification_date';
const AGREEMENT = 'agreement';
const DONOR_OBJECTIVE = 'donor_objective';
const CONDITIONS = 'conditions';
const AGREEMENT_CODE = 'code';
const AGREEMENT_TITLE = 'title';
const PROJECT_CATEGORY = 'project_category';
const PROJECT_IMPLEMENTING_UNIT = 'project_implementing_unit';
const ORGANIZATION = 'organization';
const PERCENTAGE = 'percentage';
const AMP_ORGANIZATION_ROLE_ID = 'amp_organization_role_id';
const ROLE = 'role';
const EXECUTING_AGENCY = 'executing_agency';
const CONTRACTING_AGENCY = 'contracting_agency';
const BENEFICIARY_AGENCY = 'beneficiary_agency';
const IMPLEMENTING_AGENCY = 'implementing_agency';
const RESPONSIBLE_ORGANIZATION = 'responsible_organization';
const DONOR_ORGANIZATION = 'donor_organization';
const REGIONAL_GROUP = 'regional_group';
const SECTOR_GROUP = 'sector_group';
const BUDGETS = 'budgets';
const BUDGET_CODE = 'budget_code';
const BUDGET_ORGANIZATION_CODE = 'budget_organization_code';
const ARCHIVED = 'archived';
const TRANSACTION_DATE = 'transaction_date';
const TRANSACTION_TYPE = 'transaction_type';
const COMMITMENTS = 'commitments';
const DISBURSEMENTS = 'disbursements';
const EXPENDITURES = 'expenditures';
const ESTIMATED_DISBURSEMENTS = 'estimated_disbursements';
const TRANSACTION_AMOUNT = 'transaction_amount';
const ADJUSTMENT_TYPE = 'adjustment_type';
const ACTUAL_START_DATE = 'actual_start_date';
const PROPOSED_START_DATE = 'proposed_start_date';
const ACTUAL_COMPLETION_DATE = 'actual_completion_date';
const CONTRACTING_DATE = 'contracting_date';
const DISBURSEMENT_DATE = 'disbursement_date';
const PROPOSED_APPROVAL_DATE = 'proposed_approval_date';
const ORIGINAL_COMPLETION_DATE = 'original_completion_date';
const PROPOSED_COMPLETION_DATE = 'proposed_completion_date';
const FINAL_DATE_FOR_DISBURSEMENTS = 'final_date_for_disbursements';
const FINAL_DATE_FOR_CONTRACTING = 'final_date_for_contracting';
const EFFECTIVE_FUNDING_DATE = 'effective_funding_date';
const FUNDING_CLOSING_DATE = 'funding_closing_date';
const RATIFICATION_DATE = 'ratification_date';
const MATURITY = 'maturity';
const LAST_AUDIT_DATE = 'last_audit_date';
const SIGNATURE_DATE = 'signature_date';
const HUMANITARIAN_AID = 'humanitarian_aid';
const DISASTER_RESPONSE = 'disaster_response';
const PROGRAM_DESCRIPTION = 'program_description';
const PROGRAM = 'program';
const PROGRAM_PERCENTAGE = 'program_percentage';
const PROGRAM_SETTINGS = 'program_settings';
const NATIONAL_PLAN_OBJECTIVE = 'national_plan_objective';
const PRIMARY_PROGRAMS = 'primary_programs';
const SECONDARY_PROGRAMS = 'secondary_programs';
const TERTIAR_PROGRAMS = 'tertiary_programs';
const GOVERNMENT_APPROVAL_PROCEDURES = 'government_approval_procedures';
const JOINT_CRITERIA = 'joint_criteria';
const TEAM = 'team';
const REJECTED_ID = 'rejectedId';
const INTERNAL_ID = 'internal_id';
const AMP_ID = 'amp_id';
const PROJECT_TITLE = 'project_title';
const DESCRIPTION = 'description';
const MODIFIED_BY = 'modified_by';
const MODIFIED_ON = 'update_date';
const CREATED_BY = 'created_by';
const CREATED_ON = 'creation_date';
const LAST_IMPORTED_BY = 'last_imported_by';
const CLIENT_CHANGE_ID = 'client-change-id';
const CLIENT_CREATED_ON = 'client-created-on';
const CLIENT_UPDATED_ON = 'client-updated-on';
const IS_PUSHED = 'is-pushed';
const ACTIVITY_GROUP = 'activity_group';
const VERSION = 'version';
const PROJECT_COMMENTS = 'project_comments';
const LESSONS_LEARNED = 'lessons_learned';
const PROJECT_IMPACT = 'project_impact';
const ACTIVITY_SUMMARY = 'activity_summary';
const CONDITIONALITIES = 'conditionalities';
const PROJECT_MANAGEMENT = 'project_management';
const A_C_CHAPTER = 'a_c_chapter';
const CRIS_NUMBER = 'cris_number';
const IATI_IDENTIFIER = 'iati_identifier';
const ACTIVITY_INTERNAL_IDS = 'activity_internal_ids';
const HIERARCHICAL_VALUE = 'hierarchical_value';
const HIERARCHICAL_VALUE_PARTS = 'hierarchical_value_parts';
const HIERARCHICAL_VALUE_DEPTH = 'hierarchical_value_depth';
const PPC_AMOUNT = 'ppc_amount';
const RPC_AMOUNT = 'rpc_amount';
const PPC_ANNUAL_BUDGETS = 'ppc_annual_budgets';
const AMOUNT = 'amount';
const CURRENCY = 'currency';
const FUNDING_DATE = 'funding_date';
const COMPONENTS = 'components';
const TOTAL_NUMBER_OF_FUNDING_SOURCES = 'total_number_of_funding_sources';
const SOURCE_ROLE = 'source_role';
const AMP_FUNDING_ID = 'funding_id';
const ISSUES = 'issues';
const ISSUE_DATE = 'issue_date';
const ISSUE_NAME = 'name';
const MEASURES = 'measures';
const MEASURE_NAME = 'name';
const MEASURE_DATE = 'measure_date';
const ACTORS = 'actors';
const ACTOR_NAME = 'name';
const STRUCTURES = 'structures';
const STRUCTURES_TITLE = 'title';
const STRUCTURES_DESCRIPTION = 'description';
const STRUCTURES_LATITUDE = 'latitude';
const STRUCTURES_LONGITUDE = 'longitude';
const STRUCTURES_COLOR = 'structure_color';
const STRUCTURES_LAT = 'lat';
const STRUCTURES_LNG = 'lng';
const STRUCTURES_SHAPE = 'shape';
const STRUCTURES_POINT = 'Point';
const STRUCTURES_POLYGON = 'Polygon';
const STRUCTURES_POLYLINE = 'Polyline';
const STRUCTURES_COORDINATES = 'coordinates';
const COMPONENT_TYPE = 'component_type';
const COMPONENT_TITLE = 'component_title';
const COMPONENT_FUNDING = 'funding';
const COMPONENT_DESCRIPTION = 'description';
const COMPONENT_ORGANIZATION = 'component_organization';
const FUNDING_AMOUNT_ID = 'amp_funding_amount_id';
const EXTRA_INFO = 'extra_info';
const VALUE = 'value';
const ACRONYM = 'acronym';
const TYPE_OF_COOPERATION = 'type_of_cooperation';
const ANNUAL_PROJECT_BUDGET_ID = 'annual_project_budget_id';
const TYPE = 'type';
const YEAR = 'year';
const GROUP_VERSIONED_FUNDING = 'group_versioned_funding';
const ACTIVE_LIST = 'active_list';
const ACTIVE = 'active';
const DELEGATED_COOPERATION = 'delegated_cooperation';
const DELEGATED_PARTNER = 'delegated_partner';
const FINANCING_ID = 'financing_id';
const DISBURSEMENT_ORDER_ID = 'disbursement_order_id';
const PLEDGE = 'pledge';
const CAPITAL_SPENDING_PERCENTAGE = 'capital_spending_percentage';
const REPORTING_DATE = 'reporting_date';
const RECIPIENT_ROLE = 'recipient_role';
const RECIPIENT_ORGANIZATION = 'recipient_organization';
const TEMPORAL_ID = '_temporal_id';
const MINISTRY_CODE = 'ministry_code';
const PROJECT_CODE = 'project_code';
const FY = 'fy';
const INDIRECT_ON_BUDGET = 'indirect_on_budget';
const IMPLEMENTATION_LEVELS_EXTRA_INFO = 'implementation-levels';
const IMPLEMENTATION_LOCATION_EXTRA_INFO = 'implementation_location_name';
const DONOR_CONTACT = 'donor_contact_information';
const PROJECT_COORDINATOR_CONTACT = 'project_coordinator_contact_information';
const SECTOR_MINISTRY_CONTACT = 'sector_ministry_contact_information';
const MOFED_CONTACT = 'mofed_contact_information';
const IMPLEMENTING_EXECUTING_AGENCY_CONTACT = 'implementing/executing_agency_contact_information';
const CONTACT = 'contact';
const ORGANIZATION_GROUP = 'organization_group';
const FIXED_EXCHANGE_RATE = 'fixed_exchange_rate';
const PRIMARY_CONTACT = 'mark_as_primary';
const ACTIVITY_DOCUMENTS = 'activity_documents';
const DOCUMENT_TYPE = 'document_type';
const ISO2 = 'iso2';
const MTEF_PROJECTIONS = 'mtef_projections';
const PROJECTION = 'projection';
const PIPELINE = 'pipeline';
const PROJECTION_DATE = 'projection_date';
const NATIONAL = 'National';
const COUNTRY = 'Country';

// Activity labels (usually those that don't come as part of Fields Def EP)
const SAME_AS_PROPOSED_START_DATE_LABEL = 'Same as Proposed Start Date';
const SAME_AS_PROPOSED_APPROVAL_DATE_LABEL = 'Same as Proposed Approval Date';

// Activity validation rules
const DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT = 'implementation_level_present';
const DEPENDENCY_IMPLEMENTATION_LEVEL_VALID = 'implementation_level_valid';
const DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT = 'implementation_location_present';
const DEPENDENCY_IMPLEMENTATION_LOCATION_VALID = 'implementation_location_valid';
const DEPENDENCY_PROJECT_CODE_ON_BUDGET = 'project_code_on_budget';
const DEPENDENCY_ON_BUDGET = 'on_budget';
const DEPENDENCY_TRANSACTION_PRESENT = 'transaction_present';
const DEPENDENCY_COMPONENT_FUNDING_ORG_VALID = 'organization_present';

// Activity Validation Status
const AUTOMATIC_VALIDATION = 'AUTOMATIC_VALIDATION';
const AWAITING_VALIDATION = 'AWAITING_VALIDATION';
const CANNOT_BE_VALIDATE = 'CANNOT_BE_VALIDATE';
const UNKNOWN = 'UNKNOWN';

/** IDs for AP sections **/
const AP_SECTION_IDS =
  [{ key: 'APIdentification', hash: '#APIdentification', value: 'Identification', fmPath: FMC.ACTIVITY_IDENTIFICATION },
    { key: 'APInternalIds', hash: '#APInternalIds', value: 'Agency Internal IDs', sectionPath: ACTIVITY_INTERNAL_IDS },
    { key: 'APPlanning', hash: '#APPlanning', value: 'Planning', fmPath: FMC.ACTIVITY_PLANNING },
    { key: 'APLocation', hash: '#APLocation', value: 'Location', sectionPath: LOCATIONS },
    { key: 'APProgram', hash: '#APProgram', value: 'Program', fmPath: FMC.ACTIVITY_PROGRAM },
    { key: 'APSector', hash: '#APSector', value: 'Sectors', fmPath: FMC.ACTIVITY_SECTORS },
    {
      key: 'APFundingSources',
      hash: '#APFundingSources',
      value: 'Funding Sources',
      sectionPath: TOTAL_NUMBER_OF_FUNDING_SOURCES
    },
    { key: 'APFunding', hash: '#APFunding', value: 'Funding', sectionPath: FUNDINGS },
    {
      key: 'APRelatedOrganizations',
      hash: '#APRelatedOrganizations',
      value: 'Related Organizations',
      fmPath: FMC.ACTIVITY_ORGANIZATIONS
    },
    { key: 'APIssues', hash: '#APIssues', value: 'Issues', sectionPath: ISSUES },
    { key: 'APContact', hash: '#APContact', value: 'Contact Information', fmPath: FMC.ACTIVITY_CONTACT },
    { key: 'APStructures', hash: '#APStructures', value: 'Structures', sectionPath: STRUCTURES },
    { key: 'APDocument', hash: '#APDocument', value: 'Related Documents', sectionPath: ACTIVITY_DOCUMENTS },
  ];

/** Column counts for each section **/
const ACTIVITY_INTERNAL_IDS_COLS = 3;
const ACTIVITY_PLANNING_COLS = 2;
const ACTIVITY_LOCATION_COLS = 3;
const ACTIVITY_FUNDING_COLS = 2;
const ACTIVITY_CONTACT_COLS = 2;
const AP_FUNDINGS_TABLE_COLS = 4;

const MULTI_SELECT_MIN_SIZE = 8;
const MULTI_SELECT_MAX_SIZE = 8;

// TODO: move these functions to an Utils class.
const toFieldNames = function (listOfNames) {
  return listOfNames.map(name => toFieldName(name));
};

/**
 * Converts the original non-translated label to internal field name
 * @param name
 * @return {string}
 */
const toFieldName = function (name: string) {
  return name.toLowerCase()
    .replace(' ', '_');
};

/**
 * Converts the internal field name to the Original non-translated label
 * @param fieldName
 * @return {string}
 */
const toOriginalLabel = function (fieldName: string) {
  return UIUtils.capitalize(fieldName.replace('_', ' '));
};

export default Object.freeze({
  ACTIVITY_BUDGET,
  ACTIVITY_STATUS,
  STATUS_REASON,
  FINANCIAL_INSTRUMENT,
  TYPE_OF_IMPLEMENTATION,
  OBJECTIVE,
  RESULTS,
  BUDGET_CODE_PROJECT_ID,
  ACTUAL_APPROVAL_DATE,
  FUNDINGS,
  FUNDING_DONOR_ORG_ID,
  IS_DRAFT,
  ORG_ROLE_ORG_ID,
  ADDITIONAL_INFO,
  PRIMARY_SECTORS,
  SECONDARY_SECTORS,
  TERTIARY_SECTORS,
  TAG_SECTORS,
  SECTOR,
  SECTOR_PERCENTAGE,
  FINANCING_INSTRUMENT,
  MODALITIES,
  LINE_MINISTRY_RANK,
  GOVERNMENT_AGREEMENT_NUMBER,
  FUNDING_STATUS,
  LOCATIONS,
  LOCATION,
  LOCATION_PERCENTAGE,
  IMPLEMENTATION_LOCATION,
  IMPLEMENTATION_LEVEL,
  APPROVAL_STATUS,
  APPROVED_BY,
  APPROVAL_DATE,
  TYPE_OF_ASSISTANCE,
  EXPENDITURE_CLASS,
  FUNDING_DETAILS,
  MODE_OF_PAYMENT,
  FUNDING_CLASSIFICATION_DATE,
  AGREEMENT,
  DONOR_OBJECTIVE,
  CONDITIONS,
  AGREEMENT_CODE,
  AGREEMENT_TITLE,
  PROJECT_CATEGORY,
  PROJECT_IMPLEMENTING_UNIT,
  ORGANIZATION,
  PERCENTAGE,
  AMP_ORGANIZATION_ROLE_ID,
  ROLE,
  EXECUTING_AGENCY,
  CONTRACTING_AGENCY,
  BENEFICIARY_AGENCY,
  IMPLEMENTING_AGENCY,
  RESPONSIBLE_ORGANIZATION,
  DONOR_ORGANIZATION,
  REGIONAL_GROUP,
  SECTOR_GROUP,
  BUDGETS,
  BUDGET_CODE,
  BUDGET_ORGANIZATION_CODE,
  ARCHIVED,
  TRANSACTION_DATE,
  TRANSACTION_TYPE,
  COMMITMENTS,
  DISBURSEMENTS,
  EXPENDITURES,
  ESTIMATED_DISBURSEMENTS,
  TRANSACTION_AMOUNT,
  ADJUSTMENT_TYPE,
  ACTUAL_START_DATE,
  PROPOSED_START_DATE,
  ACTUAL_COMPLETION_DATE,
  CONTRACTING_DATE,
  DISBURSEMENT_DATE,
  PROPOSED_APPROVAL_DATE,
  ORIGINAL_COMPLETION_DATE,
  PROPOSED_COMPLETION_DATE,
  FINAL_DATE_FOR_DISBURSEMENTS,
  FINAL_DATE_FOR_CONTRACTING,
  EFFECTIVE_FUNDING_DATE,
  FUNDING_CLOSING_DATE,
  RATIFICATION_DATE,
  MATURITY,
  LAST_AUDIT_DATE,
  SIGNATURE_DATE,
  HUMANITARIAN_AID,
  DISASTER_RESPONSE,
  PROGRAM,
  PROGRAM_PERCENTAGE,
  PROGRAM_SETTINGS,
  NATIONAL_PLAN_OBJECTIVE,
  PRIMARY_PROGRAMS,
  SECONDARY_PROGRAMS,
  TERTIAR_PROGRAMS,
  GOVERNMENT_APPROVAL_PROCEDURES,
  JOINT_CRITERIA,
  TEAM,
  REJECTED_ID,
  INTERNAL_ID,
  AMP_ID,
  PROJECT_TITLE,
  DESCRIPTION,
  MODIFIED_BY,
  MODIFIED_ON,
  CREATED_BY,
  CREATED_ON,
  LAST_IMPORTED_BY,
  CLIENT_CHANGE_ID,
  CLIENT_CREATED_ON,
  CLIENT_UPDATED_ON,
  IS_PUSHED,
  ACTIVITY_GROUP,
  VERSION,
  PROJECT_COMMENTS,
  LESSONS_LEARNED,
  PROJECT_IMPACT,
  ACTIVITY_SUMMARY,
  CONDITIONALITIES,
  PROJECT_MANAGEMENT,
  A_C_CHAPTER,
  CRIS_NUMBER,
  IATI_IDENTIFIER,
  ACTIVITY_INTERNAL_IDS,
  HIERARCHICAL_VALUE,
  HIERARCHICAL_VALUE_PARTS,
  HIERARCHICAL_VALUE_DEPTH,
  PPC_AMOUNT,
  RPC_AMOUNT,
  PPC_ANNUAL_BUDGETS,
  AMOUNT,
  CURRENCY,
  FUNDING_DATE,
  COMPONENTS,
  TOTAL_NUMBER_OF_FUNDING_SOURCES,
  SOURCE_ROLE,
  AMP_FUNDING_ID,
  ISSUES,
  ISSUE_DATE,
  ISSUE_NAME,
  MEASURES,
  MEASURE_NAME,
  MEASURE_DATE,
  ACTORS,
  ACTOR_NAME,
  STRUCTURES,
  STRUCTURES_TITLE,
  STRUCTURES_DESCRIPTION,
  STRUCTURES_LATITUDE,
  STRUCTURES_LONGITUDE,
  STRUCTURES_COLOR,
  STRUCTURES_LAT,
  STRUCTURES_LNG,
  STRUCTURES_SHAPE,
  STRUCTURES_POINT,
  STRUCTURES_POLYGON,
  STRUCTURES_POLYLINE,
  STRUCTURES_COORDINATES,
  COMPONENT_TYPE,
  COMPONENT_TITLE,
  COMPONENT_FUNDING,
  COMPONENT_DESCRIPTION,
  COMPONENT_ORGANIZATION,
  FUNDING_AMOUNT_ID,
  EXTRA_INFO,
  VALUE,
  ACRONYM,
  TYPE_OF_COOPERATION,
  ANNUAL_PROJECT_BUDGET_ID,
  TYPE,
  YEAR,
  GROUP_VERSIONED_FUNDING,
  ACTIVE_LIST,
  ACTIVE,
  DELEGATED_COOPERATION,
  DELEGATED_PARTNER,
  FINANCING_ID,
  DISBURSEMENT_ORDER_ID,
  PLEDGE,
  CAPITAL_SPENDING_PERCENTAGE,
  REPORTING_DATE,
  RECIPIENT_ROLE,
  RECIPIENT_ORGANIZATION,
  TEMPORAL_ID,
  MINISTRY_CODE,
  PROJECT_CODE,
  FY,
  INDIRECT_ON_BUDGET,
  IMPLEMENTATION_LEVELS_EXTRA_INFO,
  IMPLEMENTATION_LOCATION_EXTRA_INFO,
  DONOR_CONTACT,
  PROJECT_COORDINATOR_CONTACT,
  SECTOR_MINISTRY_CONTACT,
  MOFED_CONTACT,
  IMPLEMENTING_EXECUTING_AGENCY_CONTACT,
  CONTACT,
  ORGANIZATION_GROUP,
  FIXED_EXCHANGE_RATE,
  PRIMARY_CONTACT,
  ACTIVITY_DOCUMENTS,
  DOCUMENT_TYPE,
  ISO2,
  MTEF_PROJECTIONS,
  PROJECTION,
  PIPELINE,
  PROJECTION_DATE,
  NATIONAL,
  COUNTRY,
  SAME_AS_PROPOSED_START_DATE_LABEL,
  SAME_AS_PROPOSED_APPROVAL_DATE_LABEL,
  DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LEVEL_VALID,
  DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LOCATION_VALID,
  DEPENDENCY_PROJECT_CODE_ON_BUDGET,
  DEPENDENCY_ON_BUDGET,
  DEPENDENCY_TRANSACTION_PRESENT,
  DEPENDENCY_COMPONENT_FUNDING_ORG_VALID,
  AP_SECTION_IDS,
  ACTIVITY_INTERNAL_IDS_COLS,
  ACTIVITY_PLANNING_COLS,
  ACTIVITY_LOCATION_COLS,
  ACTIVITY_FUNDING_COLS,
  ACTIVITY_CONTACT_COLS,
  AP_FUNDINGS_TABLE_COLS,
  MULTI_SELECT_MIN_SIZE,
  MULTI_SELECT_MAX_SIZE,
  toFieldNames,
  toFieldName,
  toOriginalLabel,
  AUTOMATIC_VALIDATION,
  AWAITING_VALIDATION,
  CANNOT_BE_VALIDATE,
  PROGRAM_DESCRIPTION,
  UNKNOWN
});
