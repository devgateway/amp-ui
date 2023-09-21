/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldsManager from '../../../modules/field/FieldsManager';
import Section from './Section.jsx';
import APField from '../components/APField.jsx';
import styles from '../ActivityPreview.css';
import ResourceConstants from '../../../utils/constants/ResourceConstants';
import Loading from '../../common/Loading.jsx';
import ActionIcon from '../../common/ActionIcon.jsx';
import docSyles from './APDocument.css';
import ActionUrl from '../../common/ActionUrl.jsx';
import download from '../../../assets/images/download.svg';
import gotoUrl from '../../../assets/images/goto_url.svg';
import ResourceUtils from '../../../utils/ResourceUtils';
import ErrorHelper from '../../../modules/util/ErrorHelper';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';

/**
 * Activity Preview Documents section
 *
 * @author Nadejda Mandrescu
 */
class APDocument extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    resourceReducer: PropTypes.shape({
      isResourcesLoading: PropTypes.bool,
      isResourcesLoaded: PropTypes.bool,
      isResourceManagersLoading: PropTypes.bool,
      isResourceManagersLoaded: PropTypes.bool,
      resourceFieldsManager: PropTypes.instanceOf(FieldsManager),
      resourcesByUuids: PropTypes.object,
      errors: PropTypes.array
    }).isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    saveFileDialog: PropTypes.func,
    openExternal: PropTypes.func.isRequired,
    RepositoryManager: PropTypes.object.isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  };

  getResources() {
    const { isResourcesLoaded, isResourceManagersLoaded, resourcesByUuids } = this.props.resourceReducer;
    const { activity } = this.props;
    if (isResourcesLoaded && isResourceManagersLoaded) {
      const resourcesUuids = ResourceUtils.getActivityResourceUuids(activity);
      return resourcesUuids.map(uuid => {
        const r = { ...resourcesByUuids[uuid] };
        r[ResourceConstants.ADDING_DATE] = r[ResourceConstants.ADDING_DATE] || r[ResourceConstants.CLIENT_ADDING_DATE];
        r[ResourceConstants.YEAR_OF_PUBLICATION] = r[ResourceConstants.YEAR_OF_PUBLICATION] ||
          r[ResourceConstants.CLIENT_YEAR_OF_PUBLICATION];
        return r;
      })
        .filter(r => r);
    }
    return [];
  }

  /**
   *
   * @param resource
   * @return {{urlText, url, action}}
   */
  getResourceUrlData(resource) {
    const { saveFileDialog, RepositoryManager, translate } = this.props;
    const resData = {};
    const fileName = resource[ResourceConstants.FILE_NAME];
    if (fileName) {
      const srcFile = RepositoryManager.getFullContentFilePath(resource[ResourceConstants.CONTENT_ID]);
      resData.urlText = fileName;
      resData.action = srcFile ? () => saveFileDialog(srcFile, fileName) : null;
    }
    let url = resource[ResourceConstants.WEB_LINK];
    if (url) {
      resData.urlText = url;
      resData.url = url;
    } else {
      url = resource[ResourceConstants.URL];
      if (url) {
        resData.url = url;
      }
    }
    resData.urlText = resData.urlText || translate('No Data');
    return resData;
  }

  renderResource(resource) {
    const { resourceReducer, buildSimpleField, openExternal, translate } = this.props;
    const { resourceFieldsManager } = resourceReducer;

    const resData = this.getResourceUrlData(resource);
    const isAccessible = resData.url || resData.action;
    const iconImage = (resData.url && gotoUrl) || (resData.action && download);
    const iconElement = <img src={iconImage} alt="" className={styles.img_url} />;
    const tooltip = translate('ClickToDownload');
    return (
      <div key={resource.id} className={[styles.box_table, styles.table_raw].join(' ')}>
        <div key="doc-title" className={docSyles.header}>
          <span key="header" className={styles.section_subtitle_class}>
            <span>{resourceFieldsManager.getValue(resource, ResourceConstants.TITLE, PossibleValuesManager.getOptionTranslation)}</span>
            <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
            <ActionUrl
              urlContent={resData.urlText}
              href={resData.url}
              onClick={resData.action}
              tooltip={tooltip}
              openExternal={openExternal} />
          </span>
          {isAccessible &&
            <span key="download" className={docSyles.downloadIconContainer}>
            <ActionIcon
              iconElement={iconElement} href={resData.url} onClick={resData.action} tooltip={tooltip}
              openExternal={openExternal} />
          </span>
          }
        </div>
        <div key="content">
          {[
            buildSimpleField(ResourceConstants.DESCRIPTION, true, null, false, resource, resourceFieldsManager),
            buildSimpleField(ResourceConstants.ADDING_DATE, true, null, false, resource, resourceFieldsManager),
          ]}
        </div>
      </div>
    );
  }

  renderNoResources() {
    const { isResourcesLoading, isResourceManagersLoading, errors } = this.props.resourceReducer;
    const { translate, Logger } = this.props;
    if (isResourcesLoading || isResourceManagersLoading) {
      return <Loading Logger={Logger} translate={translate} />;
    } else if (errors && errors.length > 0) {
      return ErrorHelper.showErrors(errors, this.props.translate);
    } else {
      return (
        <APField
          fieldNameClass={styles.hidden} fieldValueClass={styles.nodata} fieldClass={styles.flex} separator={false}
          value={translate('No Data')} />
      );
    }
  }

  render() {
    const resources = this.getResources();
    if (!resources.length) {
      return this.renderNoResources();
    }
    return <div className={docSyles.docList}>{resources.map(this.renderResource.bind(this))}</div>;
  }
}

export default Section(APDocument, {
  SectionTitle: 'Related Documents',
  useEncapsulateHeader: true,
  sID: 'APDocument'
});
