import React from 'react';
import ActivityConstants from '../../modules/util/ActivityConstants';
import Section from '../../activity/preview/sections/Section.jsx';
import ValueConstants from '../ValueConstants';
import FeatureManager from '../../modules/util/FeatureManager';
import UIUtils from '../../utils/UIUtils';
import PossibleValuesManager from '../../modules/field/PossibleValuesManager';
import FMC from '../../modules/util/FeatureManagerConstants';

const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Paragraph, Packer, TextRun, Numbering, Indent } = docx;
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
    this.addContentTitleSection();
    this.addSummarySection();
    if (this.checkIfSectionIsEnabled(FMC.ACTIVITY_IDENTIFICATION)) {
      this.addIdentificationSection();
    }
    if (this.checkIfSectionIsEnabled(FMC.ACTIVITY_PLANNING)) {
      this.addPlanningSection();
    }
    if (this.checkIfSectionIsEnabled(null, ActivityConstants.LOCATIONS)) {
      this.addLocationSection();
    }
    if (this.checkIfSectionIsEnabled(FMC.ACTIVITY_PROGRAM)) {
      this.addProgramSection();
    }
    if (this.checkIfSectionIsEnabled(FMC.ACTIVITY_SECTORS)) {
      this.addSectorsSection();
    }
    if (this.checkIfSectionIsEnabled(null, ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES)) {
      this.addFundingSourcesSection();
    }
    if (this.checkIfSectionIsEnabled(null, ActivityConstants.FUNDINGS)) {
      this.addFundingSection();
    }
    if (this.checkIfSectionIsEnabled(FMC.ACTIVITY_ORGANIZATIONS)) {
      this.addRelatedOrganizationsSection();
    }
    if (this.checkIfSectionIsEnabled(null, ActivityConstants.ISSUES)) {
      this.addIssuesSection();
    }
  }

  static checkIfSectionIsEnabled(fmPath, sectionPath) {
    if (fmPath) {
      return FeatureManager.isFMSettingEnabled(fmPath);
    } else if (sectionPath) {
      return _context.activityFieldsManager.isFieldPathEnabled(sectionPath);
    } else {
      return true;
    }
  }

  static addContentTitleSection() {
    this.createSimpleLabel(_props.activity[ActivityConstants.PROJECT_TITLE], 'Heading1');
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

  static addIdentificationSection() {
    this.createSimpleLabel(_context.translate('Identification'), 'Heading2');
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
        return this.createField(field.title, field.value, null, null);
      }
    });
  }

  static addPlanningSection() {
    this.createSimpleLabel(_context.translate('Planning'), 'Heading2');
    let content = [];
    content.push(section.prototype.buildSimpleField(ActivityConstants.LINE_MINISTRY_RANK, true, new Set([-1]), false,
      null, null, { stringOnly: true, context: _context, props: _props }));
    const fieldPaths = [ActivityConstants.ORIGINAL_COMPLETION_DATE, ActivityConstants.ACTUAL_START_DATE,
      ActivityConstants.ACTUAL_COMPLETION_DATE, ActivityConstants.PROPOSED_START_DATE,
      ActivityConstants.ACTUAL_APPROVAL_DATE, ActivityConstants.PROPOSED_COMPLETION_DATE,
      ActivityConstants.PROPOSED_APPROVAL_DATE];
    const showIfNotAvailable = new Set([ActivityConstants.ORIGINAL_COMPLETION_DATE,
      ActivityConstants.ACTUAL_START_DATE, ActivityConstants.ACTUAL_COMPLETION_DATE,
      ActivityConstants.PROPOSED_START_DATE, ActivityConstants.ACTUAL_APPROVAL_DATE,
      ActivityConstants.PROPOSED_COMPLETION_DATE, ActivityConstants.PROPOSED_APPROVAL_DATE]);

    content = content.concat(fieldPaths.map(fieldPath => {
      const field = section.prototype.buildSimpleField(fieldPath, showIfNotAvailable.has(fieldPath), null,
        false, null, null, { stringOnly: true, context: _context, props: _props });
      if (field) {
        return this.createField(field.title, field.value, null, null, null);
      }
    }));
  }

  static addLocationSection() {
    this.createSimpleLabel(_context.translate('Location'), 'Heading2');
    const pContent = document.createParagraph();

    // Top content.
    [ActivityConstants.IMPLEMENTATION_LEVEL, ActivityConstants.IMPLEMENTATION_LOCATION]
      .map(fp => {
        const field = section.prototype.buildSimpleField(fp, true, new Set([0]), false,
          null, null, { stringOnly: true, context: _context, props: _props });
        if (field) {
          return this.createField(field.title, field.value, pContent, null, null);
        }
      });
    if ((_props.activity[ActivityConstants.IMPLEMENTATION_LEVEL]
      && _props.activity[ActivityConstants.IMPLEMENTATION_LEVEL].value !== ActivityConstants.NATIONAL)
      || (_props.activity[ActivityConstants.IMPLEMENTATION_LOCATION]
        && _props.activity[ActivityConstants.IMPLEMENTATION_LOCATION].value !== ActivityConstants.COUNTRY)) {
      // Locations list.
      this.createPercentageList(null, ActivityConstants.LOCATIONS, ActivityConstants.LOCATION,
        ActivityConstants.LOCATION_PERCENTAGE, null, null);
    }
  }

  static addProgramSection() {
    this.createSimpleLabel(_context.translate('Program'), 'Heading2');
    this.createPercentageList(null, ActivityConstants.NATIONAL_PLAN_OBJECTIVE,
      ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, null, 'National Plan Objective');
    this.createPercentageList(null, ActivityConstants.PRIMARY_PROGRAMS,
      ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, null, 'Primary Program');
    this.createPercentageList(null, ActivityConstants.SECONDARY_PROGRAMS, ActivityConstants.PROGRAM,
      ActivityConstants.PROGRAM_PERCENTAGE, null, 'Secondary Program');
  }

  static addSectorsSection() {
    this.createSimpleLabel(_context.translate('Sectors'), 'Heading2');
    this.createPercentageList(null, ActivityConstants.PRIMARY_SECTORS, ActivityConstants.SECTOR,
      ActivityConstants.SECTOR_PERCENTAGE, null, 'Primary Sector');
    this.createPercentageList(null, ActivityConstants.SECONDARY_SECTORS, ActivityConstants.SECTOR,
      ActivityConstants.SECTOR_PERCENTAGE, null, 'Secondary Sector');
  }

  static addFundingSourcesSection() {
    this.createSimpleLabel(_context.translate('Funding Sources'), 'Heading2');
    const field = section.prototype.buildSimpleField(ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES, true,
      new Set([0]), false, null, null, { stringOnly: true, context: _context, props: _props });
    if (field) {
      this.createField(field.title, field.value, null, null);
    }
  }

  static addFundingSection() {

  }

  static addRelatedOrganizationsSection() {
    this.createSimpleLabel(_context.translate('Related Organizations'), 'Heading2');
    this.createPercentageList(null, ActivityConstants.DONOR_ORGANIZATION, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Donor Organization', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.RESPONSIBLE_ORGANIZATION, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Responsible Organization', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.CONTRACTING_AGENCY, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Contracting Agency', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.BENEFICIARY_AGENCY, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Beneficiary Agency', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.IMPLEMENTING_AGENCY, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Implementing Agency', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.EXECUTING_AGENCY, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Executing Agency', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.REGIONAL_GROUP, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Regional Group', UIUtils.getItemTitleForOrganizations);
    this.createPercentageList(null, ActivityConstants.SECTOR_GROUP, ActivityConstants.ORGANIZATION,
      ActivityConstants.PERCENTAGE, null, 'Sector Group', UIUtils.getItemTitleForOrganizations);
  }

  static addIssuesSection() {
    this.createSimpleLabel(_context.translate('Issues'), 'Heading2');
    let hasData = false;
    if (_props.activity[ActivityConstants.ISSUES]) {
      _props.activity[ActivityConstants.ISSUES].forEach((issue) => {
        let date = '';
        // eslint-disable-next-line max-len
        if (_context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.ISSUE_DATE}`)) {
          date = ` ${_context.DateUtils.createFormattedDate(issue[ActivityConstants.ISSUE_DATE])}`;
        }
        //  TODO: use createListItem con el lvl.
        this.createListField(issue.name, date, 0);
        hasData = true;
        issue[ActivityConstants.MEASURES].forEach((measure) => {
          date = '';
          // eslint-disable-next-line max-len
          if (_context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.MEASURE_DATE}`)) {
            date = ` ${_context.DateUtils.createFormattedDate(measure[ActivityConstants.MEASURE_DATE])}`;
          }
          /* eslint-enable max-len */
          //  TODO: use createListItem con el lvl.
          this.createListField(measure.name || '', date, 1);
          measure[ActivityConstants.ACTORS].forEach((actor) => {
            // eslint-disable-next-line max-len
            if (_context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.ACTORS}`)) {
              this.createListField(actor.name || '', null, 2);
            }
          });
        });
        if (!hasData) {
          this.createSimpleLabel('No Data');
        }
      });
    }
  }

  static createListField(title, value, level = 0, paragraph) {
    const numbering = new Numbering();
    const abstractNum = numbering.createAbstractNumbering();
    abstractNum.createLevel(0, 'upperRoman', '%1', 'start')
      .addParagraphProperty(new Indent(10, 3));
    abstractNum.createLevel(1, 'decimal', '%2.', 'start')
      .addParagraphProperty(new Indent(20, 6));
    abstractNum.createLevel(2, 'lowerLetter', '%3)', 'start')
      .addParagraphProperty(new Indent(30, 9));
    const concrete = numbering.createConcreteNumbering(abstractNum);

    if (!paragraph) {
      paragraph = document.createParagraph();
    }
    paragraph.createTextRun(`${title}: `).bold();
    paragraph.createTextRun(value);
    paragraph.setNumbering(concrete, level);
  }

  static createPercentageList(paragraph, listField, valueField, percentageField, fmPath, listTitle, getItemTitle) {
    if (!paragraph) {
      paragraph = document.createParagraph();
    }
    let items = _props.activity[listField];
    let isListEnabled = _context.activityFieldsManager.isFieldPathEnabled(listField) === true;
    if (fmPath) {
      isListEnabled = FeatureManager.isFMSettingEnabled(fmPath) ? isListEnabled : false;
    }
    if (isListEnabled) {
      if (listTitle) {
        this.createSimpleLabel(listTitle, 'Heading3');
      }
      if (items && items.length) {
        items = items.map(item => ({
          itemTitle: !getItemTitle ?
            UIUtils.getItemTitle(item, valueField, PossibleValuesManager, _rtl) :
            getItemTitle(item),
          percentage: item[percentageField]
        })).sort((a, b) => a.itemTitle.localeCompare(b.itemTitle));
        items.map(({ itemTitle, percentage }) => {
          this.createField(itemTitle, (percentage ? `${percentage}%` : ''));
        });
        // TODO: implement tablify.
        /* if (tablify) {
          content = <Tablify content={content} columns={columns} />;
        } */
      }
    }
  }

  static createField(title, value, paragraph, titleStyle, valueStyle) {
    if (!paragraph) {
      paragraph = document.createParagraph();
    }
    if (!_rtl) {
      const titleText = paragraph.createTextRun(`${title}: `).bold();
      if (titleStyle) {
        titleText.style(titleText);
      }
      const valueText = paragraph.createTextRun(value);
      if (valueStyle) {
        valueText.style(valueStyle);
      }
    } else {
      const valueText = paragraph.createTextRun(value);
      if (valueStyle) {
        valueText.style(valueStyle);
      }
      const titleText = paragraph.createTextRun(` :${title}`).bold();
      if (titleStyle) {
        titleText.style(titleText);
      }
      paragraph.right();
    }
    return paragraph;
  }

  static createSimpleLabel(text, styleName, options) {
    const p = document.createParagraph();
    p.createTextRun(_context.translate(text));
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
