import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';
import Section from '../../activity/preview/sections/Section.jsx';
import APIdentification from '../../activity/preview/sections/APIdentification.jsx';
import ValueConstants from '../ValueConstants';

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
 * https://runkit.com/dolanmiu/docx-demo10
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
    this.addIdentificationSection();
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
    this.createSimpleLabel(_props.activity[ActivityConstants.PROJECT_TITLE], 'Heading1');
  }

  static addSummarySection() {
    let items = [ActivityConstants.AMP_ID, ActivityConstants.ACTIVITY_STATUS, ActivityConstants.ACTIVITY_BUDGET];
    if (_rtl) {
      items = items.reverse();
    }
    const p = document.createParagraph();
    items.map(i => {
      const field = section.prototype.buildSimpleField(i, true, null, false, null, null,
        { stringOnly: true, context: _context, props: _props });
      return this.createField(field.title, field.value, p);
    });
  }

  static addIdentificationSection() {
    this.createSimpleLabel(_context.translate('Identification'), 'Heading2');
    const pContent = document.createParagraph();
    // TODO: This is a copy from APIdentification.jsx, try to find a way to have it in one place.
    const fieldPaths = [ActivityConstants.STATUS_REASON, ActivityConstants.TYPE_OF_COOPERATION,
      ActivityConstants.TYPE_OF_IMPLEMENTATION, ActivityConstants.MODALITIES, ActivityConstants.OBJECTIVE,
      ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.RESULTS,
      ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY,
      ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT,
      ActivityConstants.BUDGET_CODE_PROJECT_ID, ActivityConstants.A_C_CHAPTER, ActivityConstants.CRIS_NUMBER,
      ActivityConstants.ACTIVITY_BUDGET, ActivityConstants.GOVERNMENT_AGREEMENT_NUMBER,
      ActivityConstants.GOVERNMENT_APPROVAL_PROCEDURES, ActivityConstants.JOINT_CRITERIA,
      ActivityConstants.HUMANITARIAN_AID];
    // Show budget extras fields like ministry_code, etc only when activity_budget is enabled and has value 'On Budget'.
    if (_context.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_BUDGET)
      && _props.activity[ActivityConstants.ACTIVITY_BUDGET]
      && _props.activity[ActivityConstants.ACTIVITY_BUDGET].value === ValueConstants.ON_BUDGET) {
      fieldPaths.push(ActivityConstants.INDIRECT_ON_BUDGET);
      fieldPaths.push(ActivityConstants.FY);
      fieldPaths.push(ActivityConstants.MINISTRY_CODE);
      fieldPaths.push(ActivityConstants.PROJECT_CODE);
    }
    fieldPaths.push(...[ActivityConstants.FINANCIAL_INSTRUMENT, ActivityConstants.IATI_IDENTIFIER]);
    fieldPaths.map(i => {
      const field = section.prototype.buildSimpleField(i, true, null, false, null, null,
        { stringOnly: true, context: _context, props: _props });
      if (field) {
        console.error(field);
        return this.createField(field.title, field.value, pContent, null, null);
      }
    });
  }

  static createField(title, value, paragraph, titleStyle, valueStyle) {
    if (!paragraph) {
      paragraph = document.createParagraph();
    }
    if (!_rtl) {
      const titleText = paragraph.createTextRun(`${title}: `);
      if (titleStyle) {
        titleText.style(titleText);
      }
      const valueText = paragraph.createTextRun(value).bold();
      if (valueStyle) {
        valueText.style(valueStyle);
      }
    } else {
      const valueText = paragraph.createTextRun(value).bold();
      if (valueStyle) {
        valueText.style(valueStyle);
      }
      const titleText = paragraph.createTextRun(` :${title}`);
      if (titleStyle) {
        titleText.style(titleText);
      }
      paragraph.right();
    }
    return paragraph;
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
    document.Styles.createParagraphStyle('Normal', 'Normal')
      .basedOn('Normal')
      .next('Normal')
      .quickFormat()
      .spacing({ before: 120, after: 120 })
      .font('Calibri');

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
