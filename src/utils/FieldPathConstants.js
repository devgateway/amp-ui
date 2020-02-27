import ActivityConstants from '../modules/util/ActivityConstants';
import FeatureManagerConstants from '../modules/util/FeatureManagerConstants';
import ValueConstants from './ValueConstants';

/**
 * This is a set of field paths that are used for frequent needs
 * @author Nadejda Mandrescu
 */

const FUNDING_ACTIVE_LIST = 'fundings~active_list';
const FUNDING_TYPE_OF_ASSISTANCE = `${ActivityConstants.FUNDINGS}~${ActivityConstants.TYPE_OF_ASSISTANCE}`;
const FUNDING_DETAILS_PATH = `${ActivityConstants.FUNDINGS}~${ActivityConstants.FUNDING_DETAILS}`;
/**
 * Legacy funding currency path used for data migration
 * @deprecated since 1.4
 */
const FUNDING_CURRENCY_PATH = `${FUNDING_DETAILS_PATH}~${ActivityConstants.CURRENCY}`;
const MTEF_CURRENCY_PATH =
  `${ActivityConstants.FUNDINGS}~${ActivityConstants.MTEF_PROJECTIONS}~${ActivityConstants.CURRENCY}`;
const PPC_CURRENCY_PATH = `${ActivityConstants.PPC_AMOUNT}~${ActivityConstants.CURRENCY}`;
const RPC_CURRENCY_PATH = `${ActivityConstants.RPC_AMOUNT}~${ActivityConstants.CURRENCY}`;
const COMPONENT_CURRENCY_PATH =
  `${ActivityConstants.COMPONENTS}~${ActivityConstants.COMPONENT_FUNDING}~${ActivityConstants.CURRENCY}`;
const DISBURSEMENTS_PATH = `${ActivityConstants.FUNDINGS}~${ActivityConstants.DISBURSEMENTS}`;
const ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH = 'activity_internal_ids~internal_id';
const ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH = 'activity_internal_ids~organization';
const LOCATION_PATH = 'locations~location';
const NATIONAL_PLAN_OBJECTIVE_PATH = 'national_plan_objective~program';
const PRIMARY_PROGRAM_PATH = 'primary_programs~program';
const SECONDARY_PROGRAM_PATH = 'secondary_programs~program';
const PRIMARY_SECTOR_PATH = 'primary_sectors~sector';
const SECONDARY_SECTOR_PATH = 'secondary_sectors~sector';
const TERTIARY_SECTOR_PATH = 'tertiary_sectors~sector';
const DONOR_ORGANIZATIONS_PATH = 'donor_organization~organization';
const RESPONSIBLE_ORGANIZATION_BUDGETS_PATH =
  `${ActivityConstants.RESPONSIBLE_ORGANIZATION}~${ActivityConstants.BUDGETS}`;

const RELATED_ORGS_PATHS = ValueConstants.ORG_ROLE_NAMES.map(orgRole => ActivityConstants.toFieldName(orgRole));
const RELATED_ORGS_ORGANIZATION_PATHS = ValueConstants.ORG_ROLE_NAMES.map(
  orgRole => `${ActivityConstants.toFieldName(orgRole)}~${ActivityConstants.ORGANIZATION}`);

const RICH_TEXT_FIELDS = new Set([ActivityConstants.STATUS_REASON, ActivityConstants.OBJECTIVE,
  ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.LESSONS_LEARNED,
  ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY, ActivityConstants.CONDITIONALITIES,
  ActivityConstants.PROJECT_MANAGEMENT, ActivityConstants.RESULTS, ActivityConstants.PROGRAM_DESCRIPTION
]);

const PATHS_WITH_TREE_STRUCTURE = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH,
  SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH]);

const PATHS_WITH_HIERARCHICAL_VALUES = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH,
  SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH, LOCATION_PATH]);

const ACTIVITY_CONTACT_PATHS = [ActivityConstants.DONOR_CONTACT, ActivityConstants.PROJECT_COORDINATOR_CONTACT,
  ActivityConstants.SECTOR_MINISTRY_CONTACT, ActivityConstants.MOFED_CONTACT,
  ActivityConstants.IMPLEMENTING_EXECUTING_AGENCY_CONTACT];

const TRANSACTION_TYPES = [ActivityConstants.COMMITMENTS, ActivityConstants.DISBURSEMENTS,
  ActivityConstants.EXPENDITURES];
const TRANSACTION_TYPES_ORDERED = TRANSACTION_TYPES;
const FUNDING_TRANSACTION_TYPES = [...TRANSACTION_TYPES, ActivityConstants.ESTIMATED_DISBURSEMENTS];
const ADJUSTMENT_TYPE_PATHS = FUNDING_TRANSACTION_TYPES.map(
  tt => `${ActivityConstants.FUNDINGS}~${tt}~${ActivityConstants.ADJUSTMENT_TYPE}`);
const FUNDING_CURRENCY_PATHS = TRANSACTION_TYPES.map(
  tt => `${ActivityConstants.FUNDINGS}~${tt}~${ActivityConstants.CURRENCY}`);

const PATHS_FOR_ACTIVITY_CURRENCY = [FUNDING_CURRENCY_PATH, MTEF_CURRENCY_PATH, COMPONENT_CURRENCY_PATH,
  PPC_CURRENCY_PATH, RPC_CURRENCY_PATH, ...FUNDING_CURRENCY_PATHS];

const PATHS_FOR_CURRENCY = new Set([ActivityConstants.CURRENCY, ...PATHS_FOR_ACTIVITY_CURRENCY]);

const DO_NOT_HYDRATE_FIELDS_LIST = [ActivityConstants.APPROVAL_STATUS];

/* Fields paths alternative values location */
const ALTERNATE_VALUE_PATH = {};
ALTERNATE_VALUE_PATH[ActivityConstants.CREATED_ON] = ActivityConstants.CLIENT_CREATED_ON;
ALTERNATE_VALUE_PATH[ActivityConstants.MODIFIED_ON] = ActivityConstants.CLIENT_UPDATED_ON;

/* FM paths for some activity fields that are always present in fields def, but may be hidden from display through FM */
const ACTIVITY_FIELDS_FM_PATH = {};
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_BY] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_BY;
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_ON] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_ON;

/* Possible Options fields path prefixes */
const PREFIX_ACTIVITY = null;
const PREFIX_CONTACT = 'contact';
const PREFIX_RESOURCE = 'resource';
const PREFIX_COMMON = 'common';
const PREFIX_LIST = [PREFIX_ACTIVITY, PREFIX_CONTACT, PREFIX_RESOURCE, PREFIX_COMMON];

const FIELD_PATH = 'field-path';
const FIELD_OPTIONS = 'possible-options';
const FIELD_OPTION_USABLE = 'option-usable';
const LIST_MAX_SIZE = 'size-limit';
const REGEX_PATTERN = 'regex-pattern';
const FIELD_NAME = 'field_name';
const FIELD_LABEL = 'field_label';
const FIELD_REQUIRED = 'required';
const FIELD_UNIQUE_CONSTRAINT = 'unique_constraint';
const FIELD_TYPE = 'field_type';
const FIELD_LENGTH = 'field_length';
const FIELD_PERCENTAGE = 'percentage';
const FIELD_PERCENTAGE_CONSTRAINT = 'percentage_constraint';
const FIELD_ITEM_TYPE = 'item-type';
const FIELD_IMPORTABLE = 'importable';
const FIELD_ID_ONLY = 'id_only';
const FIELD_MULTIPLE_VALUES_ALLOWED = 'multiple_values';
const FIELD_TREE_COLLECTION = 'tree_collection';
const FIELD_CHILDREN = 'children';
const FIELD_DEPENDENCIES = 'dependencies';

const FIELD_TYPE_LIST = 'list';
const FIELD_TYPE_OBJECT = 'object';
const FIELD_TYPE_STRING = 'string';
const FIELD_TYPE_LONG = 'long';
const FIELD_TYPE_FLOAT = 'float';
const FIELD_TYPE_BOOLEAN = 'boolean';
const FIELD_TYPE_DATE = 'date';
const FIELD_TYPE_TIMESTAMP = 'timestamp';

export default Object.freeze({
  FUNDING_ACTIVE_LIST,
  FUNDING_DETAILS_PATH,
  FUNDING_CURRENCY_PATH,
  MTEF_CURRENCY_PATH,
  PPC_CURRENCY_PATH,
  RPC_CURRENCY_PATH,
  COMPONENT_CURRENCY_PATH,
  DISBURSEMENTS_PATH,
  ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH,
  ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH,
  LOCATION_PATH,
  NATIONAL_PLAN_OBJECTIVE_PATH,
  PRIMARY_PROGRAM_PATH,
  SECONDARY_PROGRAM_PATH,
  PRIMARY_SECTOR_PATH,
  SECONDARY_SECTOR_PATH,
  TERTIARY_SECTOR_PATH,
  DONOR_ORGANIZATIONS_PATH,
  RESPONSIBLE_ORGANIZATION_BUDGETS_PATH,
  RELATED_ORGS_PATHS,
  RELATED_ORGS_ORGANIZATION_PATHS,
  RICH_TEXT_FIELDS,
  PATHS_WITH_TREE_STRUCTURE,
  PATHS_WITH_HIERARCHICAL_VALUES,
  ACTIVITY_CONTACT_PATHS,
  TRANSACTION_TYPES,
  TRANSACTION_TYPES_ORDERED,
  FUNDING_TRANSACTION_TYPES,
  ADJUSTMENT_TYPE_PATHS,
  FUNDING_CURRENCY_PATHS,
  PATHS_FOR_ACTIVITY_CURRENCY,
  PATHS_FOR_CURRENCY,
  DO_NOT_HYDRATE_FIELDS_LIST,
  ALTERNATE_VALUE_PATH,
  ACTIVITY_FIELDS_FM_PATH,
  PREFIX_ACTIVITY,
  PREFIX_CONTACT,
  PREFIX_RESOURCE,
  PREFIX_COMMON,
  PREFIX_LIST,
  FIELD_PATH,
  FIELD_OPTIONS,
  FIELD_OPTION_USABLE,
  LIST_MAX_SIZE,
  REGEX_PATTERN,
  FIELD_NAME,
  FIELD_LABEL,
  FIELD_REQUIRED,
  FIELD_UNIQUE_CONSTRAINT,
  FIELD_TYPE,
  FIELD_LENGTH,
  FIELD_PERCENTAGE,
  FIELD_PERCENTAGE_CONSTRAINT,
  FIELD_ITEM_TYPE,
  FIELD_IMPORTABLE,
  FIELD_ID_ONLY,
  FIELD_MULTIPLE_VALUES_ALLOWED,
  FIELD_TREE_COLLECTION,
  FIELD_CHILDREN,
  FIELD_DEPENDENCIES,
  FIELD_TYPE_LIST,
  FIELD_TYPE_OBJECT,
  FIELD_TYPE_STRING,
  FIELD_TYPE_LONG,
  FIELD_TYPE_FLOAT,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_DATE,
  FIELD_TYPE_TIMESTAMP,
  FUNDING_TYPE_OF_ASSISTANCE,
});
