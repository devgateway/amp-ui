import he from 'he';
import FeatureManager from '../../../modules/util/FeatureManager';
import ResourceUtils from '../../ResourceUtils';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import Section from '../../../activity/preview/sections/Section.jsx';

const docx = require('docx');

const { Paragraph, Numbering } = docx;

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

  createListField(title, value, level = 0, paragraph, bullet) {
    const numbering = new Numbering();
    const abstractNum = numbering.createAbstractNumbering();
    abstractNum.createLevel(0, 'upperRoman', '%1', 'start');
    abstractNum.createLevel(1, 'decimal', '%2.', 'start');
    abstractNum.createLevel(2, 'lowerLetter', '%3)', 'start');
    const concrete = numbering.createConcreteNumbering(abstractNum);

    if (!paragraph) {
      paragraph = this._document.createParagraph();
    }
    if (!this._rtl) {
      paragraph.createTextRun(title)
        .bold();
      paragraph.createTextRun(value);
    } else {
      paragraph.createTextRun(value ? `${value} ` : '');
      paragraph.createTextRun(title)
        .bold();
    }
    if (bullet) {
      paragraph.bullet(level);
    } else {
      paragraph.setNumbering(concrete, level);
    }
    if (this._rtl) {
      paragraph.bidirectional();
    }
  }

  createPercentageList(paragraph, listField, valueField, percentageField, fmPath, listTitle, getItemTitle) {
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
            ResourceUtils.getItemTitle(item, valueField, PossibleValuesManager, this._rtl) :
            getItemTitle(item),
          percentage: item[percentageField]
        }))
          .sort((a, b) => a.itemTitle.localeCompare(b.itemTitle));
        items.map(({ itemTitle, percentage }) => (
          this.createField(itemTitle, (percentage ? `${percentage}%` : ''))
            .bullet()
        ));
      } else {
        this.createSimpleLabel('No Data', null, { tab: true });
      }
    }
  }

  createField(title, value, paragraph, titleStyle, valueStyle) {
    if (value && value.replace) {
      value = he.decode(value.replace(/(<([^>]+)>)/ig, ''));// .replace('&nbsp;',' ');
    }
    if (!paragraph) {
      paragraph = this._document.createParagraph();
    }
    if (!this._rtl) {
      const titleText = paragraph.createTextRun(`${title}${value ? ': ' : ''} `)
        .bold();
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
      const titleText = paragraph.createTextRun(`${value ? ' :' : ''}${title}`)
        .bold();
      if (titleStyle) {
        titleText.style(titleText);
      }
      paragraph.bidirectional();
    }
    return paragraph;
  }

  createSimpleLabel(text, styleName, options) {
    const _options = options || {};
    const p = new Paragraph();
    const textRun = p.createTextRun(this._context.translate(text));
    if (_options.tab) {
      textRun.tab();
    }
    if (styleName) {
      p.style(styleName);
    }
    if (this._rtl) {
      p.bidirectional();
    } else if (_options.alignRight) {
      p.right();
    }

    if (_options.dontAddToDocument) {
      return p;
    }
    this._document.addParagraph(p);
    return p;
  }

  createSeparator() {
    this._document.createParagraph();
  }

  // eslint-disable-next-line class-methods-use-this
  generateSection() {
  }
}
