import FeatureManager from '../../../modules/util/FeatureManager';
import UIUtils from '../../UIUtils';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import Section from '../../../activity/preview/sections/Section.jsx';

const docx = require('docx');

const { Paragraph, Packer, TextRun, Numbering, Indent } = docx;

export default class PreviewSection {
  _document;
  _props;
  _context;
  _rtl;
  _fmPath;
  _sectionPath;
  _section = new Section();

  constructor(document, props, context, rtl, fmPath, sectionPath) {
    this._document = document;
    this._props = props;
    this._context = context;
    this._rtl = rtl;
    this._fmPath = fmPath;
    this._sectionPath = sectionPath;
  }

  checkIfEnabled() {
    if (this._fmPath) {
      return FeatureManager.isFMSettingEnabled(this._fmPath);
    } else if (this._sectionPath) {
      return this._context.activityFieldsManager.isFieldPathEnabled(this._sectionPath);
    } else {
      return true;
    }
  }

  createListField(title, value, level = 0, paragraph) {
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
      paragraph = this._document.createParagraph();
    }
    paragraph.createTextRun(`${title}: `).bold();
    paragraph.createTextRun(value);
    paragraph.setNumbering(concrete, level);
  }

  createPercentageList(paragraph, listField, valueField, percentageField, fmPath, listTitle, getItemTitle) {
    if (!paragraph) {
      paragraph = this._document.createParagraph();
    }
    let items = this._props.activity[listField];
    let isListEnabled = this._context.activityFieldsManager.isFieldPathEnabled(listField) === true;
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
            UIUtils.getItemTitle(item, valueField, PossibleValuesManager, this._rtl) :
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

  createField(title, value, paragraph, titleStyle, valueStyle) {
    if (!paragraph) {
      paragraph = this._document.createParagraph();
    }
    if (!this._rtl) {
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

  createSimpleLabel(text, styleName, options) {
    const p = this._document.createParagraph();
    p.createTextRun(this._context.translate(text));
    if (styleName) {
      p.style(styleName);
    }
    if (this._rtl) {
      // Dont enable or it will also change the writing function.
      // title.bidirectional();
      p.right();
    }
    return p;
  }

  generateSection() {
  }
}
