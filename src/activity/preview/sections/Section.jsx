import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldPathConstants from '../../../utils/FieldPathConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import FeatureManager from '../../../modules/util/FeatureManager';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import APField from '../components/APField.jsx';
import styles from '../ActivityPreview.css';

let logger = null;

/**
 * Generic activity preview section class
 * @author Nadejda Mandrescu
 */
// const Section = (ComposedSection, SectionTitle = null, useEncapsulateHeader = true, sID) => class extends Component {
const Section = (ComposedSection, params) => class extends Component {
  static propTypes = {
    titleDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sectionPath: PropTypes.string,
    titleClass: PropTypes.string,
    groupClass: PropTypes.string,
    composedClass: PropTypes.string,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    fmPath: PropTypes.string,
    fieldClass: PropTypes.string
  };

  static contextTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object.isRequired,
    activityFundingTotals: PropTypes.object.isRequired, // Will change this if ActivityFundingTotals is migrated
    // PropTypes.instanceOf(params.ActivityFundingTotals).isRequired,
    activityWorkspace: PropTypes.object.isRequired,
    activityWSManager: PropTypes.object.isRequired,
    resourceReducer: PropTypes.object.isRequired,
  };

  static defaultProps = {
    titleClass: styles.section_title_class,
    groupClass: styles.section_group_class,
    fieldNameClass: styles.section_field_name,
    fieldValueClass: styles.section_field_value
  };

  constructor(props) {
    super(props);
    params.useEncapsulateHeader = !params.useEncapsulateHeader ? true : params.useEncapsulateHeader;
    logger = new params.Logger('AP section');
    logger.debug('constructor');
  }

  /**
   * Renders field data if it is enabled in FM. If renabled, but value is not available, then it will not be rendered,
   * unless it is requested via showIfNotAvailable flag.
   * @param path field path
   * @param showIfNotAvailable flag to forcibly display the field when no value is provided
   * @param NAOptions optional set of values that should be treated as undefined
   * @param inline optional flag to render name and values on the same line
   * @param parent optional object where we look for the path (instead of the activity root).
   * @param fieldsManager (optional) custom fields manager. Activity Fields Manager used by default.
   * @return {null|APField}
   */
  buildSimpleField(path, showIfNotAvailable, NAOptions: Set, inline = false, parent = null, fieldsManager = null
    , options) {
    const options_ = options || {};
    const fmPath = FieldPathConstants.ACTIVITY_FIELDS_FM_PATH[path];
    fieldsManager = fieldsManager || this.context.activityFieldsManager;
    if (fieldsManager.isFieldPathEnabled(path)
      && (!fmPath || FeatureManager.isFMSettingEnabled(fmPath, false))) {
      const title = (options_.noTitle ? '' : fieldsManager.getFieldLabelTranslation(path));
      let valuePath = path;
      if (parent) {
        const fieldPathParts = path.split('~');
        valuePath = fieldPathParts[fieldPathParts.length - 1];
      }
      const alternatePath = FieldPathConstants.ALTERNATE_VALUE_PATH[valuePath];
      let value = fieldsManager.getValue(parent || this.context.activity, valuePath,
        PossibleValuesManager.getOptionTranslation);
      if ((value === null || value === undefined) && alternatePath) {
        value = fieldsManager.getValue(this.context.activity, alternatePath,
          PossibleValuesManager.getOptionTranslation);
      }
      const fieldDef = fieldsManager.getFieldDef(path);
      if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_DATE) {
        value = params.DateUtils.createFormattedDate(value);
      } else if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_TIMESTAMP) {
        // matching AP online to format as date for now
        value = params.DateUtils.createFormattedDate(value);
      } else if (Array.isArray(value) && !value.length) {
        value = null;
      }
      value = NAOptions && NAOptions.has(value) ? null : value;

      const re = /^\s?$/; // check for whitespace
      if (re.test(value)) value = value.trim(); // check for whitespace
      if (value === '' || value === null) {
        value = params.translate('No Data');
      }
      if (showIfNotAvailable === true || (value !== undefined && value !== null)) {
        const useInnerHTML = FieldPathConstants.RICH_TEXT_FIELDS.has(path);
        return (<APField
          key={params.Utils.stringToUniqueId(path)} title={title} value={value} useInnerHTML={useInnerHTML}
          inline={inline}
          separator={false}
          fieldClass={options_.fieldClass || this.props.fieldClass}
          fieldNameClass={this.props.fieldNameClass}
          fieldValueClass={options_.fieldValueClass || this.props.fieldValueClass}
          translate={params.translate} Logger={params.Logger} />);
      }
    }
  }

  render() {
    if (this.props.sectionPath && !this.context.activityFieldsManager.isFieldPathEnabled(this.props.sectionPath)) {
      return null;
    }
    if (this.props.fmPath && !FeatureManager.isFMSettingEnabled(this.props.fmPath)) {
      return null;
    }
    const composedSection = (<ComposedSection
      {...this.props} {...this.state} {...this.context} buildSimpleField={this.buildSimpleField.bind(this)} />);
    if (params.useEncapsulateHeader === false) {
      return composedSection;
    }
    // TODO iteration 2+ section toggle (TDC based on desgin + VG)
    return (<div key={params.SectionTitle} className={this.props.groupClass} id={params.sID}>
      <div className={this.props.titleClass}>
        <span>{params.translate(params.SectionTitle)} </span><span>{this.props.titleDetails}</span>
      </div>
      <div className={this.props.composedClass}>
        {composedSection}
      </div>
    </div>);
  }
};

export default Section;
