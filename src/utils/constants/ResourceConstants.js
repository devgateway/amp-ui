/** Resources and Repository fields constants */

const UUID = 'uuid';
const CONTENT_ID = 'content-id';
const ORPHAN = 'orphan';
const HASH = 'hash';
const PATH = 'path';
const FILE_NAME = 'file_name';
const CONTENT_TYPE = 'content-type';
const TEAM = 'team';
const CREATOR_EMAIL = 'creator_email';
const TITLE = 'title';
const WEB_LINK = 'web_link';
const DESCRIPTION = 'description';
const NOTE = 'note';
const ADDING_DATE = 'adding_date';
const YEAR_OF_PUBLICATION = 'year_of_publication';
const FILE_SIZE = 'file_size';
const TYPE = 'type';
const PRIVATE = 'private';
const PUBLIC = 'public';
const CLIENT_ADDING_DATE = 'client_adding_date';
const CLIENT_YEAR_OF_PUBLICATION = 'client_year_of_publication';
/* merged field used to display either URL or file name */
const RESOURCE_NAME = 'resource_name';
const RESOURCE_TYPE = 'resource_type';
const ACTION = 'action';

const TYPE_WEB_RESOURCE = 0;
const TYPE_DOC_RESOURCE = 1;

const DEPENDENCY_RESOURCE_TYPE_LINK = 'resource_type_link_valid_key';
const DEPENDENCY_RESOURCE_TYPE_FILE = 'resource_type_file_valid_key';

/** Repository File System constants */

const REPOSITORY_DIR = 'repository';

export default Object.freeze({
  UUID,
  CONTENT_ID,
  ORPHAN,
  HASH,
  PATH,
  FILE_NAME,
  CONTENT_TYPE,
  TEAM,
  CREATOR_EMAIL,
  TITLE,
  WEB_LINK,
  DESCRIPTION,
  NOTE,
  ADDING_DATE,
  YEAR_OF_PUBLICATION,
  FILE_SIZE,
  TYPE,
  PRIVATE,
  PUBLIC,
  CLIENT_ADDING_DATE,
  CLIENT_YEAR_OF_PUBLICATION,
  RESOURCE_NAME,
  RESOURCE_TYPE,
  ACTION,
  TYPE_WEB_RESOURCE,
  TYPE_DOC_RESOURCE,
  DEPENDENCY_RESOURCE_TYPE_LINK,
  DEPENDENCY_RESOURCE_TYPE_FILE,
  REPOSITORY_DIR,
});
