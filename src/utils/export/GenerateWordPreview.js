import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';
import FieldPathConstants from '../FieldPathConstants';
import FeatureManager from '../../modules/util/FeatureManager';
import PossibleValuesManager from '../../modules/field/PossibleValuesManager';

const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Paragraph, Packer, TextRun, AlignmentType } = docx;
let document;
let _props;
let _context;
let _rtl;
let styles;

/**
 * Useful resources: https://github.com/dolanmiu/docx/wiki/Styling-with-JS,
 * https://runkit.com/dolanmiu/docx-demo2
 */
export default class GenerateWordPreview {
  static _gwp = new GenerateWordPreview();

  static generateDocument(props, context, rtl) {
    console.error(props);
    console.error(context);
    console.error(rtl);

    _props = props;
    _context = context;
    _rtl = rtl;

    this.createDocument();
    this.createStyles();
    this.addContentTitleSection();
    this.addSummarySection();
    this.download();
  }

  static createDocument() {
    document = new Document({
      creator: 'AMPOffline',
      description: 'Activity Preview Export',
      title: 'Activity Preview Export',
    });
  }

  static addContentTitleSection() {
    this.createSimpleParagraphElement(_props.activity[ActivityConstants.PROJECT_TITLE], 'ProjectTitle');
  }

  static addSummarySection() {
    const items = [ActivityConstants.AMP_ID, ActivityConstants.ACTIVITY_STATUS, ActivityConstants.ACTIVITY_BUDGET];
    items.map(i => {
      this.createSimpleParagraphElement(this.buildSimpleField(i, true));
    });
  }

  static createSimpleParagraphElement(text, styleName, options) {
    const p = document.createParagraph();
    p.createTextRun(text);
    if (styleName) {
      p.style(styleName);
    }
    if (_rtl) {
      // Dont enable or it will also change the writing function.
      // title.bidirectional();
      p.right();
    }
    return p;
  }

  static download() {
    const packer = new Packer();
    packer.toBlob(document)
      .then(blob => {
        console.log(blob);
        FileSaver.saveAs(blob, 'activity-preview.docx');
        console.log('Document created successfully');
      });
  }

  static createStyles() {
    document.Styles.createParagraphStyle('ProjectTitle', 'Project Title')
      .basedOn('Normal')
      .next('Normal')
      .quickFormat()
      .size(28)
      .bold()
      .italics()
      .color('black')
      .spacing({ after: 120 });

    document.Styles.createParagraphStyle('RTL', 'RTL').right();
  }

  static buildSimpleField(path, showIfNotAvailable, NAOptions: Set, inline = false, parent = null, fieldsManager = null
    , options) {
    const options_ = options || {};
    const fmPath = FieldPathConstants.ACTIVITY_FIELDS_FM_PATH[path];
    fieldsManager = fieldsManager || _context.activityFieldsManager;
    if (fieldsManager.isFieldPathEnabled(path)
      && (!fmPath || FeatureManager.isFMSettingEnabled(fmPath, false))) {
      const title = (options_.noTitle ? '' : fieldsManager.getFieldLabelTranslation(path));
      let valuePath = path;
      if (parent) {
        const fieldPathParts = path.split('~');
        valuePath = fieldPathParts[fieldPathParts.length - 1];
      }
      const alternatePath = FieldPathConstants.ALTERNATE_VALUE_PATH[valuePath];
      let value = fieldsManager.getValue(parent || _props.activity, valuePath,
        PossibleValuesManager.getOptionTranslation);
      if ((value === null || value === undefined) && alternatePath) {
        value = fieldsManager.getValue(_props.activity, alternatePath,
          PossibleValuesManager.getOptionTranslation);
      }
      const fieldDef = fieldsManager.getFieldDef(path);
      if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_DATE) {
        value = _context.DateUtils.createFormattedDate(value);
      } else if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_TIMESTAMP) {
        // matching AP online to format as date for now
        value = _context.DateUtils.createFormattedDate(value);
      } else if (Array.isArray(value) && !value.length) {
        value = null;
      }
      value = NAOptions && NAOptions.has(value) ? null : value;

      const re = /^\s?$/; // check for whitespace
      if (re.test(value)) value = value.trim(); // check for whitespace
      if (value === '' || value === null) {
        value = _context.translate('No Data');
      }
      if (showIfNotAvailable === true || (value !== undefined && value !== null)) {
        const useInnerHTML = FieldPathConstants.RICH_TEXT_FIELDS.has(path);
        /* return (<APField
          key={UIUtils.stringToUniqueId(path)} title={title} value={value} useInnerHTML={useInnerHTML}
          inline={inline}
          separator={false}
          fieldClass={options_.fieldClass || _props.fieldClass}
          fieldNameClass={_props.fieldNameClass}
          fieldValueClass={options_.fieldValueClass || _props.fieldValueClass}
          translate={_context.translate} />);*/
        return `${title}: ${_context.translate(value)}`;
      }
    }
  }
}
