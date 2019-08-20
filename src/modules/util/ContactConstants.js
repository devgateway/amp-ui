import ValueConstants from '../../utils/ValueConstants';

const CLIENT_CHANGE_ID = 'amp-offline-contact-change-id';
const CLIENT_CHANGE_ID_PREFIX = 'amp-offline-contact-id';
const NAME = 'name';
const LAST_NAME = 'last_name';
const TITLE = 'title';
const ORGANIZATION_NAME = 'organization_name';
const FUNCTION = 'function';
const OFFICE_ADDRESS = 'office_address';
const CREATOR = 'creator';
const ORGANISATION_CONTACTS = 'organisation_contacts';
const ORGANISATION = 'organisation';
const EMAIL = 'email';
const VALUE = 'value';
const PHONE = 'phone';
const EXTENSION_VALUE = 'extension_value';
const TYPE = 'type';
const FAX = 'fax';

const TMP_FORM_ID = 'form-id';
const TMP_UNIQUE_ID = 'uniqueId';
const TMP_HYDRATED = 'hydrated';
const TMP_ERRORS = 'errors';
const TMP_CONTACT_LOADED = 'isContactLoaded';
const TMP_CONTACT_LOADING = 'isContactLoading';
const TMP_ENTITY_VALIDATOR = ValueConstants.TMP_ENTITY_VALIDATOR;
const TMP_FIELDS = [TMP_FORM_ID, TMP_UNIQUE_ID, TMP_HYDRATED, TMP_ERRORS, TMP_ENTITY_VALIDATOR,
  TMP_CONTACT_LOADED, TMP_CONTACT_LOADING];


export default Object.freeze({
  CLIENT_CHANGE_ID,
  CLIENT_CHANGE_ID_PREFIX,
  NAME,
  LAST_NAME,
  TITLE,
  ORGANIZATION_NAME,
  FUNCTION,
  OFFICE_ADDRESS,
  CREATOR,
  ORGANISATION_CONTACTS,
  ORGANISATION,
  EMAIL,
  VALUE,
  PHONE,
  EXTENSION_VALUE,
  TYPE,
  FAX,
  TMP_FORM_ID,
  TMP_UNIQUE_ID,
  TMP_HYDRATED,
  TMP_ERRORS,
  TMP_CONTACT_LOADED,
  TMP_CONTACT_LOADING,
  TMP_ENTITY_VALIDATOR,
  TMP_FIELDS
});
