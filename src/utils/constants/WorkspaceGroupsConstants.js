// Disable rule because it fails with destructing syntax.
/* eslint "import/prefer-default-export": 0*/

const WORKSPACES_GROUPS = [
  { type: 'Donor' },
  { type: 'Government' },
  { type: 'Line Ministries' },
  { type: 'Other' }
];

export default Object.freeze({
  WORKSPACES_GROUPS
});
