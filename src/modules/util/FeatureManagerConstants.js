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

const ACTIVITY_ISSUES_ADD_ISSUE = '/Activity Form/Issues Section/Add Issue';
const ACTIVITY_ISSUES_DELETE_ISSUE = '/Activity Form/Issues Section/Issue/Delete Item';
const ACTIVITY_ISSUES_ADD_MEASURE = '/Activity Form/Issues Section/Issue/Add Item';
const ACTIVITY_ISSUES_DELETE_MEASURE = '/Activity Form/Issues Section/Issue/Measure/Delete Item';
const ACTIVITY_ISSUES_ADD_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Add Item';
const ACTIVITY_ISSUES_DELETE_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Actor/Delete Item';

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

const MTEF_PROJECTIONS = `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections`;
const MTEF_PROJECTIONS_AMOUNT =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Amount`;
const MTEF_PROJECTIONS_CURRENCY =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Currency`;
const MTEF_PROJECTIONS_PROJECTION =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/MTEF Projection`;
const MTEF_PROJECTIONS_DATE =
  `${AF_FUNDING_FUNDINGGROUP_FUNDINGITEM}/MTEF Projections/MTEF Projections Table/Projection Date`;

module.exports = Object.freeze({
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
  ACTIVITY_FUNDING,
  AF_FUNDING_FUNDINGGROUP_FUNDINGITEM,
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
  ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_FUNDING_SEARCH,
  ACTIVITY_FUNDING_SEARCH_ORGANIZATION,
  ACTIVITY_FUNDING_SELECT_ORG_TYPE,
  ACTIVITY_PROGRAM,
  ACTIVITY_PLANNING,
  ACTIVITY_CONTACT,
  ACTIVITY_DOCUMENTS_ADD_DOCUMENT,
  ACTIVITY_DOCUMENTS_ADD_WEBLINK,
  ACTIVITY_ISSUES_ADD_ISSUE,
  ACTIVITY_ISSUES_DELETE_ISSUE,
  ACTIVITY_ISSUES_ADD_MEASURE,
  ACTIVITY_ISSUES_DELETE_MEASURE,
  ACTIVITY_ISSUES_ADD_ACTOR,
  ACTIVITY_ISSUES_DELETE_ACTOR,
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
  MTEF_PROJECTIONS,
  MTEF_PROJECTIONS_AMOUNT,
  MTEF_PROJECTIONS_CURRENCY,
  MTEF_PROJECTIONS_PROJECTION,
  MTEF_PROJECTIONS_DATE,
});
