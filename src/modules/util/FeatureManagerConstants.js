/* eslint-disable max-len */

/**
 * @author Nadejda Mandrescu
 */

const PUBLIC_VIEW_CHANGE_PASSWORD = '/PUBLIC VIEW/Login - User Management/Change Password';
const PUBLIC_VIEW_TROUBLE_SIGN_IN = '/PUBLIC VIEW/Login - User Management/Trouble signing in';
const ACTIVITY_DELIVERY_RATE = '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate';
const ACTIVITY_PROJECT_ID_AND_PLANNING = '/PROJECT MANAGEMENT/Project ID and Planning';
const ACTIVITY_DURATION_OF_PROJECT = '/PROJECT MANAGEMENT/Project ID and Planning/Planning/Duration of Project';
const ACTIVITY_TEAM_LEADER = '/PROJECT MANAGEMENT/Project ID and Planning/Identification/Data Team Leader';
const ACTIVITY_SAME_AS_PROPOSED_START_DATE =
  '/Activity Form/Planning/Actual Start Date/Same As Proposed Start Date';
const ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE =
  '/Activity Form/Planning/Actual Approval Date/Same As Proposed Approval Date';
const ACTIVITY_IDENTIFICATION = '/Activity Form/Identification';
const ACTIVITY_LAST_UPDATED_BY = '/Activity Form/Identification/Activity Last Updated by';
const ACTIVITY_LAST_UPDATED_ON = '/Activity Form/Identification/Activity Updated On';
const ACTIVITY_FUNDING = '/Activity Form/Funding';
const AF_FUNDING_FUNDINGGROUP_FUNDINGITEM = `${ACTIVITY_FUNDING}/Funding Group/Funding Item`;
const ACTIVITY_SECTORS = '/Activity Form/Sectors';
const ACTIVITY_PRIMARY_SECTORS = '/Activity Form/Sectors/Primary Sectors';
const ACTIVITY_SECONDARY_SECTORS = '/Activity Form/Sectors/Secondary Sectors';

const ACTIVITY_STRUCTURES = '/Activity Form/Structures';
const ACTIVITY_STRUCTURES_ADD_STRUCTURE = `${ACTIVITY_STRUCTURES}/Add Structure`;

const ACTIVITY_ORGANIZATIONS = '/Activity Form/Organizations';
const ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION = `${ACTIVITY_ORGANIZATIONS}/Donor Organization`;
const ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY = `${ACTIVITY_ORGANIZATIONS}/Beneficiary Agency`;
const ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY = `${ACTIVITY_ORGANIZATIONS}/Contracting Agency`;
const ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY = `${ACTIVITY_ORGANIZATIONS}/Executing Agency`;
const ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY = `${ACTIVITY_ORGANIZATIONS}/Implementing Agency`;
const ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP = `${ACTIVITY_ORGANIZATIONS}/Regional Group`;
const ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION = `${ACTIVITY_ORGANIZATIONS}/Related Government Organization`;
const ACTIVITY_ORGANIZATIONS_SECTOR_GROUP = `${ACTIVITY_ORGANIZATIONS}/Sector Group`;

const ACTIVITY_REGIONAL_FUNDING = '/Activity Form/Regional Funding';
const ACTIVITY_REGIONAL_ITEM = 'Region Item';
const ACTIVITY_REGIONAL_COMMITMENTS = 'Commitments';
const ACTIVITY_REGIONAL_DISBURSEMENTS = 'Disbursements';
const ACTIVITY_REGIONAL_EXPENDITURES = 'Expenditures';
const ACTIVITY_REGIONAL_COMMITMENTS_TABLE = 'Commitments Table';
const ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE = 'Disbursements Table';
const ACTIVITY_REGIONAL_EXPENDITURES_TABLE = 'Expenditures Table';
const ACTIVITY_REGIONAL_FUNDINGS_PROVINCE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/Region`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_ADD_TRANSACTION = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/Add Transaction`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_ADJUSTMENTS_TYPE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/${ACTIVITY_REGIONAL_COMMITMENTS_TABLE}/Adjustment Type`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_AMOUNT = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/${ACTIVITY_REGIONAL_COMMITMENTS_TABLE}/Amount`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_CURRENCY = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/${ACTIVITY_REGIONAL_COMMITMENTS_TABLE}/Currency`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_DELETE_ITEM = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/${ACTIVITY_REGIONAL_COMMITMENTS_TABLE}/Delete Item`;
const ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_TRANSACTION_DATE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/${ACTIVITY_REGIONAL_COMMITMENTS_TABLE}/Transaction Date`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_ADD_TRANSACTION = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_COMMITMENTS}/Add Transaction`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_ADJUSTMENTS_TYPE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_DISBURSEMENTS}/${ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE}/Adjustment Type`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_AMOUNT = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_DISBURSEMENTS}/${ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE}/Amount`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_CURRENCY = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_DISBURSEMENTS}/${ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE}/Currency`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_DELETE_ITEM = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_DISBURSEMENTS}/${ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE}/Delete Item`;
const ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_TRANSACTION_DATE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_DISBURSEMENTS}/${ACTIVITY_REGIONAL_DISBURSEMENTS_TABLE}/Transaction Date`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_ADD_TRANSACTION = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/Add Transaction`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_ADJUSTMENTS_TYPE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/${ACTIVITY_REGIONAL_EXPENDITURES_TABLE}/Adjustment Type`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_AMOUNT = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/${ACTIVITY_REGIONAL_EXPENDITURES_TABLE}/Amount`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_CURRENCY = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/${ACTIVITY_REGIONAL_EXPENDITURES_TABLE}/Currency`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_DELETE_ITEM = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/${ACTIVITY_REGIONAL_EXPENDITURES_TABLE}/Delete Item`;
const ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_TRANSACTION_DATE = `${ACTIVITY_REGIONAL_FUNDING}/${ACTIVITY_REGIONAL_ITEM}/${ACTIVITY_REGIONAL_EXPENDITURES}/${ACTIVITY_REGIONAL_EXPENDITURES_TABLE}/Transaction Date`;

const ADD_FUNDING_AUTO = 'Add Funding Item Automatically';
const ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION}/${ADD_FUNDING_AUTO}`;
const ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO = `${ACTIVITY_ORGANIZATIONS_SECTOR_GROUP}/${ADD_FUNDING_AUTO}`;

const ACTIVITY_FUNDING_SEARCH = `${ACTIVITY_FUNDING}/Search Funding Organizations`;
const ACTIVITY_FUNDING_SEARCH_ORGANIZATION = `${ACTIVITY_FUNDING_SEARCH}/Search Organizations`;
const ACTIVITY_FUNDING_SELECT_ORG_TYPE = `${ACTIVITY_FUNDING_SEARCH}/Select Organization Type`;

const ACTIVITY_PROGRAM = '/Activity Form/Program';
const ACTIVITY_PLANNING = '/Activity Form/Planning';

const ACTIVITY_CONTACT = '/Activity Form/Contacts';
const ACTIVITY_DOCUMENTS_ADD_DOCUMENT = '/Activity Form/Related Documents/Add New Document';
const ACTIVITY_DOCUMENTS_ADD_WEBLINK = '/Activity Form/Related Documents/Add New Web Link';

const ACTIVITY_ISSUES = '/Activity Form/Issues Section';
const ACTIVITY_ISSUES_ADD_TOP = `${ACTIVITY_ISSUES}/Add Issue`;
const ACTIVITY_ISSUES_DELETE_TOP = `${ACTIVITY_ISSUES}/Issue/Delete Item`;
const ACTIVITY_ISSUES_ADD_MEASURE = `${ACTIVITY_ISSUES}/Issue/Add Item`;
const ACTIVITY_ISSUES_DELETE_MEASURE = `${ACTIVITY_ISSUES}/Issue/Measure/Delete Item`;
const ACTIVITY_ISSUES_ADD_ACTOR = `${ACTIVITY_ISSUES}/Issue/Measure/Add Item`;
const ACTIVITY_ISSUES_DELETE_ACTOR = `${ACTIVITY_ISSUES}/Issue/Measure/Actor/Delete Item`;

const ACTIVITY_LINE_MINISTRY_OBSERVATIONS = '/Activity Form/Line Ministry Observations';
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_TOP = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Add Observation`;
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_TOP = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Observation/Delete Item`;
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_MEASURE = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Observation/Add Item`;
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_MEASURE = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Observation/Measure/Delete Item`;
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_ACTOR = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Observation/Measure/Add Item`;
const ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_ACTOR = `${ACTIVITY_LINE_MINISTRY_OBSERVATIONS}/Observation/Measure/Actor/Delete Item`;

const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Implementing Agency`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Contracting Agency`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Beneficiary Agency`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Donor Organization`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Executing Agency`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Regional Group`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Responsible Organization`;
const ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Sector Group`;

const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Implementing Agency`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Contracting Agency`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Beneficiary Agency`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Donor Organization`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Executing Agency`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Regional Group`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Responsible Organization`;
const ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Sector Group`;

const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Implementing Agency`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Contracting Agency`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Beneficiary Agency`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Donor Organization`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Executing Agency`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Regional Group`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Responsible Organization`;
const ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Sector Group`;

const ME = '/Activity Form/M&E';
const ME_ADD_INDICATOR = `${ME}/Add Indicator`;
const ME_CODE = `${ME}/Code`;
const ME_CREATION_DATE = `${ME}/Creation Date`;
const ME_CREATION_DATE_SAME_AS = `${ME_CREATION_DATE}/Same As`;
const ME_DELETE_ME_ITEM = `${ME}/Delete ME Item`;
const ME_DELETE_SECTOR = `${ME}/Delete Sector`;
const ME_INDICATOR_DESCRIPTION = `${ME}/Indicator Description`;
const ME_ITEM = `${ME}/ME Item`;
const ME_ITEM_BASE_VALUE = `${ME_ITEM}/Base Value`;
const ME_ITEM_BASE_VALUE_BASE_COMMENTS = `${ME_ITEM_BASE_VALUE}/Base Comments`;
const ME_ITEM_BASE_VALUE_BASE_DATE = `${ME_ITEM_BASE_VALUE}/Base Date`;
const ME_ITEM_BASE_VALUE_BASE_VALUE = `${ME_ITEM_BASE_VALUE}/Base Value`;
const ME_ITEM_ACTUAL_VALUE = `${ME_ITEM}/Current Value`;
const ME_ITEM_ACTUAL_VALUE_BASE_COMMENTS = `${ME_ITEM_ACTUAL_VALUE}/Current Comments`;
const ME_ITEM_ACTUAL_VALUE_BASE_DATE = `${ME_ITEM_ACTUAL_VALUE}/Current Date`;
const ME_ITEM_ACTUAL_VALUE_BASE_VALUE = `${ME_ITEM_ACTUAL_VALUE}/Current Value`;
const ME_ITEM_LOGFRAME_CATEGORY = `${ME_ITEM}/Logframe Category`;
const ME_ITEM_REVISED_VALUE = `${ME_ITEM}/Revised Value`;
const ME_ITEM_REVISED_VALUE_BASE_COMMENTS = `${ME_ITEM_REVISED_VALUE}/Revised Comments`;
const ME_ITEM_REVISED_VALUE_BASE_DATE = `${ME_ITEM_REVISED_VALUE}/Revised Date`;
const ME_ITEM_REVISED_VALUE_BASE_VALUE = `${ME_ITEM_REVISED_VALUE}/Revised Value`;
const ME_SET_VALUE = `${ME}/Set Value`;
const ME_ITEM_TARGET_VALUE = `${ME_ITEM}/Target Value`;
const ME_ITEM_TARGET_VALUE_BASE_COMMENTS = `${ME_ITEM_TARGET_VALUE}/Target Comments`;
const ME_ITEM_TARGET_VALUE_BASE_DATE = `${ME_ITEM_TARGET_VALUE}/Target Date`;
const ME_ITEM_TARGET_VALUE_BASE_VALUE = `${ME_ITEM_TARGET_VALUE}/Target Value`;
const ME_NAME = `${ME}/Name`;
const ME_SEARCH_INDICATORS = `${ME}/Search Indicators`;
const ME_SEARCH_ME = `${ME}/Search M&E`;
const ME_SEARCH_SECTORS_FOR_ME = `${ME}/Search Sectors For M&E`;
const ME_TYPE = `${ME}/Type`;
const ME_UNIQUE_ME_VALIDATOR = `${ME}/Unique MEs Validator`;
const ME_UNIQUE_SECTOR_VALIDATOR = `${ME}/uniqueSectorsValidator`;

const MTEF_PROJECTIONS = `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections`;
const MTEF_PROJECTIONS_AMOUNT =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Amount`;
const MTEF_PROJECTIONS_CURRENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Currency`;
const MTEF_PROJECTIONS_PROJECTION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/MTEF Projection`;
const MTEF_PROJECTIONS_DATE =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Projection Date`;

export default Object.freeze({
  PUBLIC_VIEW_CHANGE_PASSWORD,
  PUBLIC_VIEW_TROUBLE_SIGN_IN,
  ACTIVITY_DELIVERY_RATE,
  ACTIVITY_PROJECT_ID_AND_PLANNING,
  ACTIVITY_DURATION_OF_PROJECT,
  ACTIVITY_TEAM_LEADER,
  ACTIVITY_SAME_AS_PROPOSED_START_DATE,
  ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE,
  ACTIVITY_IDENTIFICATION,
  ACTIVITY_LAST_UPDATED_BY,
  ACTIVITY_LAST_UPDATED_ON,
  ACTIVITY_SECTORS,
  ACTIVITY_PRIMARY_SECTORS,
  ACTIVITY_SECONDARY_SECTORS,
  ACTIVITY_STRUCTURES,
  ACTIVITY_STRUCTURES_ADD_STRUCTURE,
  ACTIVITY_ORGANIZATIONS,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP,
  ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_REGIONAL_FUNDING,
  ACTIVITY_REGIONAL_FUNDINGS_PROVINCE,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_ADD_TRANSACTION,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_ADJUSTMENTS_TYPE,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_AMOUNT,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_CURRENCY,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_DELETE_ITEM,
  ACTIVITY_REGIONAL_FUNDINGS_COMMITMENTS_TRANSACTION_DATE,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_ADD_TRANSACTION,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_ADJUSTMENTS_TYPE,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_AMOUNT,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_CURRENCY,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_DELETE_ITEM,
  ACTIVITY_REGIONAL_FUNDINGS_DISBURSEMENTS_TRANSACTION_DATE,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_ADD_TRANSACTION,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_ADJUSTMENTS_TYPE,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_AMOUNT,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_CURRENCY,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_DELETE_ITEM,
  ACTIVITY_REGIONAL_FUNDINGS_EXPENDITURES_TRANSACTION_DATE,
  ACTIVITY_FUNDING_SEARCH,
  ACTIVITY_FUNDING_SEARCH_ORGANIZATION,
  ACTIVITY_FUNDING_SELECT_ORG_TYPE,
  ACTIVITY_PROGRAM,
  ACTIVITY_PLANNING,
  ACTIVITY_CONTACT,
  ACTIVITY_DOCUMENTS_ADD_DOCUMENT,
  ACTIVITY_DOCUMENTS_ADD_WEBLINK,
  ACTIVITY_ISSUES,
  ACTIVITY_ISSUES_ADD_TOP,
  ACTIVITY_ISSUES_DELETE_TOP,
  ACTIVITY_ISSUES_ADD_MEASURE,
  ACTIVITY_ISSUES_DELETE_MEASURE,
  ACTIVITY_ISSUES_ADD_ACTOR,
  ACTIVITY_ISSUES_DELETE_ACTOR,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_TOP,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_TOP,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_MEASURE,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_MEASURE,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_ADD_ACTOR,
  ACTIVITY_LINE_MINISTRY_OBSERVATIONS_DELETE_ACTOR,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ME,
  ME_ADD_INDICATOR,
  ME_CODE,
  ME_CREATION_DATE,
  ME_CREATION_DATE_SAME_AS,
  ME_DELETE_ME_ITEM,
  ME_DELETE_SECTOR,
  ME_INDICATOR_DESCRIPTION,
  ME_ITEM,
  ME_ITEM_BASE_VALUE,
  ME_ITEM_BASE_VALUE_BASE_COMMENTS,
  ME_ITEM_BASE_VALUE_BASE_DATE,
  ME_ITEM_BASE_VALUE_BASE_VALUE,
  ME_ITEM_ACTUAL_VALUE,
  ME_ITEM_ACTUAL_VALUE_BASE_COMMENTS,
  ME_ITEM_ACTUAL_VALUE_BASE_DATE,
  ME_ITEM_ACTUAL_VALUE_BASE_VALUE,
  ME_ITEM_LOGFRAME_CATEGORY,
  ME_ITEM_REVISED_VALUE,
  ME_ITEM_REVISED_VALUE_BASE_COMMENTS,
  ME_ITEM_REVISED_VALUE_BASE_DATE,
  ME_ITEM_REVISED_VALUE_BASE_VALUE,
  ME_SET_VALUE,
  ME_ITEM_TARGET_VALUE,
  ME_ITEM_TARGET_VALUE_BASE_COMMENTS,
  ME_ITEM_TARGET_VALUE_BASE_DATE,
  ME_ITEM_TARGET_VALUE_BASE_VALUE,
  ME_NAME,
  ME_SEARCH_INDICATORS,
  ME_SEARCH_ME,
  ME_SEARCH_SECTORS_FOR_ME,
  ME_TYPE,
  ME_UNIQUE_ME_VALIDATOR,
  ME_UNIQUE_SECTOR_VALIDATOR,
  MTEF_PROJECTIONS,
  MTEF_PROJECTIONS_AMOUNT,
  MTEF_PROJECTIONS_CURRENCY,
  MTEF_PROJECTIONS_PROJECTION,
  MTEF_PROJECTIONS_DATE,
});
