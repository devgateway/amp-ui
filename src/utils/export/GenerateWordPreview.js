import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';
import FMC from '../../modules/util/FeatureManagerConstants';
import SummaryPreview from './sections/SummaryPreview';
import ContactsPreview from './sections/ContactsPreview';
import TitlePreview from './sections/TitlePreview';
import IdentificationPreview from './sections/IdentificationPreview';
import PlanningPreview from './sections/PlanningPreview';
import LocationPreview from './sections/LocationPreview';
import ProgramPreview from './sections/ProgramPreview';
import SectorPreview from './sections/SectorPreview';
import FundingSourcesPreview from './sections/FundingSourcesPreview';
import RelatedOrganizationsPreview from './sections/RelatedOrganizationsPreview';
import IssuesPreview from './sections/IssuesPreview';
import SitesPreview from './sections/SitesPreview';
import DocumentsPreview from './sections/DocumentsPreview';
import FundingPreview from './sections/FundingPreview';

const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Packer } = docx;
let document;
let _props;
let _context;
let _rtl;

/**
 * Useful resources: https://github.com/dolanmiu/docx/wiki/Styling-with-JS,
 * https://runkit.com/dolanmiu/docx-demo2
 * https://runkit.com/dolanmiu/docx-demo10
 * https://docx.js.org/api/
 * https://github.com/dolanmiu/docx/tree/4.7.1/demo
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo20.ts (table borders)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo22.ts (bidi)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo26.ts (borders)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo29.ts (lists)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo3.ts (lists)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo31.ts (align)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo32.ts (tables, merge)
 * https://github.com/dolanmiu/docx/blob/4.7.1/demo/demo34.ts (tables, width)
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
    this.createAllSections();
    this.download();
  }

  static createDocument() {
    document = new Document({
      creator: 'AMPOffline',
      description: 'Activity Preview Export',
      title: 'Activity Preview Export',
    });
  }

  static createAllSections() {
    new TitlePreview(document, _props, _context, _rtl).generateSection();
    new SummaryPreview(document, _props, _context, _rtl).generateSection();
    new IdentificationPreview(document, _props, _context, _rtl, FMC.ACTIVITY_IDENTIFICATION, null).generateSection();
    new PlanningPreview(document, _props, _context, _rtl, FMC.ACTIVITY_PLANNING, null).generateSection();
    new LocationPreview(document, _props, _context, _rtl, null, ActivityConstants.LOCATIONS).generateSection();
    new ProgramPreview(document, _props, _context, _rtl, FMC.ACTIVITY_PROGRAM, null).generateSection();
    new SectorPreview(document, _props, _context, _rtl, FMC.ACTIVITY_SECTORS, null).generateSection();
    new FundingSourcesPreview(document, _props, _context, _rtl, null,
      ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES).generateSection();
    new FundingPreview(document, _props, _context, _rtl, null, ActivityConstants.FUNDINGS).generateSection();
    new RelatedOrganizationsPreview(document, _props, _context, _rtl,
      FMC.ACTIVITY_ORGANIZATIONS, null).generateSection();
    new IssuesPreview(document, _props, _context, _rtl, null, ActivityConstants.ISSUES).generateSection();
    new ContactsPreview(document, _props, _context, _rtl, FMC.ACTIVITY_CONTACT, null).generateSection();
    new SitesPreview(document, _props, _context, _rtl, null, ActivityConstants.STRUCTURES).generateSection();
    new DocumentsPreview(document, _props, _context, _rtl, null,
      ActivityConstants.ACTIVITY_DOCUMENTS).generateSection();
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
