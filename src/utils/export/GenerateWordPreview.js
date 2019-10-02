import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';
import FieldPathConstants from '../FieldPathConstants';
import FeatureManager from '../../modules/util/FeatureManager';
import PossibleValuesManager from '../../modules/field/PossibleValuesManager';
import Section from '../../activity/preview/sections/Section.jsx';

const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Paragraph, Packer, TextRun, AlignmentType } = docx;
let document;
let _props;
let _context;
let _rtl;
const section = new Section();

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
    this.createSimpleLabel(_props.activity[ActivityConstants.PROJECT_TITLE], 'ProjectTitle');
  }

  static addSummarySection() {
    let items = [ActivityConstants.AMP_ID, ActivityConstants.ACTIVITY_STATUS, ActivityConstants.ACTIVITY_BUDGET];
    if (_rtl) {
      items = items.reverse();
    }
    items.map(i => {
      const field = section.prototype.buildSimpleField(i, true, null, false, null, null,
        { stringOnly: true, context: _context, props: _props });
      return this.createField(field.title, field.value);
    });
  }

  static createField(title, value) {
    const p = document.createParagraph();
    if (!_rtl) {
      p.createTextRun(`${title}: `);
      p.createTextRun(value).bold();
    } else {
      p.createTextRun(value).bold();
      p.createTextRun(` :${title}`);
      p.right();
    }
    return p;
  }

  static createSimpleLabel(text, styleName, options) {
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
}
