/** WS validation **/
const WS_VALIDATION_OFF = 'validationOff';
const WS_VALIDATION_ALL_EDIT = 'allEdits';
const WS_VALIDATION_NEW_ONLY = 'newOnly';
const WS_VALIDATION_FIELD = 'validation';
const CROSS_TEAM_VALIDATION = 'is-cross-team-validation';
const WS_ACCESS_TYPE_MANAGEMENT = 'Management';
const WS_ACCESS_TYPE_TEAM = 'Team';

/** Roles (from WorkspaceMemberRoleConstants.java) **/
const ROLE_TEAM_MEMBER_WS_MANAGER = 1;
const ROLE_TEAM_MEMBER_WS_MEMBER = 2;
const ROLE_TEAM_MEMBER_WS_APPROVER = 3;

/** Other fields **/
const WORKSPACE_ID = 'workspace-id';
const ROLE_ID = 'role-id';
const WORKSPACE_LEAD_ID = 'workspace-lead-id';
const ACCESS_TYPE = 'access-type';
const IS_COMPUTED = 'is-computed';
const IS_PRIVATE = 'is-private';

module.exports = Object.freeze({
  WS_VALIDATION_OFF,
  WS_VALIDATION_ALL_EDIT,
  WS_VALIDATION_NEW_ONLY,
  WS_VALIDATION_FIELD,
  CROSS_TEAM_VALIDATION,
  WS_ACCESS_TYPE_MANAGEMENT,
  WS_ACCESS_TYPE_TEAM,
  ROLE_TEAM_MEMBER_WS_MANAGER,
  ROLE_TEAM_MEMBER_WS_MEMBER,
  ROLE_TEAM_MEMBER_WS_APPROVER,
  WORKSPACE_ID,
  ROLE_ID,
  WORKSPACE_LEAD_ID,
  ACCESS_TYPE,
  IS_COMPUTED,
  IS_PRIVATE,
});
