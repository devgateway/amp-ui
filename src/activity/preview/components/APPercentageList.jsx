import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APField from './APField.jsx';
import APPercentageField from './APPercentageField.jsx';
import Tablify from './Tablify.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import styles from '../ActivityPreview.css';
import FeatureManager from '../../../modules/util/FeatureManager';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import UIUtils from '../../../utils/UIUtils';

let logger = null;

/**
 * Activity Preview Percentage List type section
 * @author Nadejda Mandrescu
 */
const APPercentageList = (listField, valueField, percentageField, listTitle = null) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    percentTitleClass: PropTypes.string,
    percentValueClass: PropTypes.string,
    tablify: PropTypes.bool,
    columns: PropTypes.number,
    fmPath: PropTypes.string,
    getItemTitle: PropTypes.func,
    translate: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP percentage list');
    logger.debug('constructor');
  }

  getItemTitle(item) {
    if (this.props.getItemTitle) {
      return this.props.getItemTitle(item);
    }
    const obj = item[valueField];
    return obj[ActivityConstants.HIERARCHICAL_VALUE] ?
      obj[ActivityConstants.HIERARCHICAL_VALUE] :
      PossibleValuesManager.getOptionTranslation(obj);
  }

  render() {
    const {
      translate, activityFieldsManager, percentTitleClass, fmPath, activity, columns, tablify
      , percentValueClass, fieldNameClass, fieldValueClass, rawNumberToFormattedString
    } = this.props;
    const title = listTitle ? translate(listTitle) : null;
    let items = activity[listField];
    let content = null;
    let isListEnabled = activityFieldsManager.isFieldPathEnabled(listField) === true;
    if (fmPath) {
      isListEnabled = FeatureManager.isFMSettingEnabled(fmPath) ? isListEnabled : false;
    }
    if (isListEnabled) {
      if (items && items.length) {
        items = items.map(item => ({
          itemTitle: this.getItemTitle(item),
          percentage: item[percentageField]
        }))
          .sort((a, b) => a.itemTitle.localeCompare(b.itemTitle));
        content = items.map(({ itemTitle, percentage }) =>
          (<APPercentageField
            key={UIUtils.stringToUniqueId(itemTitle)} title={itemTitle} value={percentage}
            titleClass={percentTitleClass} valueClass={percentValueClass} translate={translate}
            rawNumberToFormattedString={rawNumberToFormattedString} />)
        );
        if (tablify) {
          content = <Tablify content={content} columns={columns} />;
        }
        content = (<APField
          key={listField} title={title} value={content} separator={false} inline={tablify === true}
          fieldNameClass={fieldNameClass} fieldValueClass={fieldValueClass}
          translate={translate} />);
      } else {
        content = (<APField
          key={listField} title={title} value={translate('No Data')} separator={false}
          inline={tablify === true}
          fieldNameClass={fieldNameClass} fieldValueClass={styles.nodata}
          translate={translate} />);
      }
    }
    return content;
  }
};

export default APPercentageList;
