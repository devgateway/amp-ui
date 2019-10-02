import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';

const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Paragraph, Packer, TextRun, AlignmentType } = docx;
let document;
let _props;
let _context;
let _rtl;
let styles;

// TODO: check if this class can be a Component too.
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
    const title = document.createParagraph();
    title.createTextRun(_props.activity[ActivityConstants.PROJECT_TITLE].toString());
    // title.style('ProjectTitle');
    title.heading1();
    if (_rtl) {
      // dont enable or it will also change the writing function.
      // title.bidirectional();
      title.right();
    }
  }

  static download() {
    const packer = new Packer(document, styles);
    packer.toBlob(document)
      .then(blob => {
        console.log(blob);
        FileSaver.saveAs(blob, 'activity-preview.docx');
        console.log('Document created successfully');
      });
  }

  static createStyles() {
    styles = new docx.Styles();
    styles.createParagraphStyle('ProjectTitle', 'Project Title')
      .basedOn('Normal')
      .next('Normal')
      .quickFormat()
      .size(28)
      .bold()
      .italics()
      .color('black')
      .spacing({ after: 120 });

    styles.createParagraphStyle('RTL', 'RTL').right();
  }
}
