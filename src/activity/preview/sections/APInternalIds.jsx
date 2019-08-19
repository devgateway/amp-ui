/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import React, { Component, PropTypes } from 'react';
import Tablify from '../components/Tablify.jsx';
import Section from './Section.jsx';
import FieldsManager from '../../../modules/field/FieldsManager';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
// import { ACTIVITY_INTERNAL_IDS, ACTIVITY_INTERNAL_IDS_COLS } from '../../../../utils/constants/ActivityConstants';
// import { ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH } from '../../../../utils/constants/FieldPathConstants';

import styles from '../ActivityPreview.css';
import FieldPathConstants from '../../../utils/FieldPathConstants';

let logger = null;

/**
 * Organizations and project ids section
 * @author Nadejda Mandrescu
 */
const APInternalIdsSection = (isSeparateSection) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    showIfEmpty: PropTypes.bool,/* only makes sense if isSeparateSection is true, will render
                                  if there are no org ids*/
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
};

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Internal ids');
    logger.log('constructor');
  }

  _getActInternalIdContent(actIntId, showInternalId) {
    let intId;
    if (showInternalId) {
      intId = <span className={styles.tableValue}>{actIntId.internal_id}</span>;
    }
    return (
      <div key={actIntId.organization.value}>
        <span>[{ actIntId.organization.value }]</span>
        { intId }
      </div>);
  }

  buildContent() {
    let orgIds;
    if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_INTERNAL_IDS)) {
      const showInternalId = this.props.activityFieldsManager.isFieldPathEnabled(
        FieldPathConstants.ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH);
      orgIds = [];
      const actIntIds = this.props.activityFieldsManager.getValue(this.props.activity,
        ActivityConstants.ACTIVITY_INTERNAL_IDS, PossibleValuesManager.getOptionTranslation);
      if (actIntIds && actIntIds.length > 0) {
        actIntIds.forEach(actIntId => orgIds.push(this._getActInternalIdContent(actIntId, showInternalId)));
      }
    }
    return orgIds && orgIds.length > 0 ? orgIds : null;
  }

  render() {
    const { translate } = this.props;
    let content = this.buildContent();
    if (isSeparateSection === true) {
      // make sure content exists before formatting
      const noData = <tr><td>{translate('No Data')}</td></tr>;
      const tableContent = content ?
        Tablify.addRows(content, ActivityConstants.ACTIVITY_INTERNAL_IDS_COLS) :
        noData;
      content = <div><table className={styles.box_table}><tbody>{tableContent}</tbody></table></div>;
    } else if (content || this.props.showIfEmpty) {
      return (
        <div key="InternalIdsFromIdentificationSection">
          <ul>
            {content && content.map(orgData => (<li key={orgData.key}>{orgData}</li>))}
          </ul>
        </div>
      );
    }
    return content;
  }
};
const APInternalIds = Section(APInternalIdsSection(true), { SectionTitle: 'Agency Internal IDs',
  useEncapsulateHeader: true,
  sID: 'APInternalIds'
});
export default APInternalIds;
