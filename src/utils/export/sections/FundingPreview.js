import React from 'react';
import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldPathConstants from '../../FieldPathConstants';
import ValueConstants from '../../ValueConstants';

const docx = require('docx');

const { Paragraph, TextRun, WidthType, Table, TableAnchorType, RelativeHorizontalPosition,
  RelativeVerticalPosition, BorderStyle, TableBorders, TableProperties,
  Attributes, XmlComponent, TableRow } = docx;

const COLOR_SUBTOTAL = '#efefef';
const COLOR_EVEN = '#97c4f3';

export default class FundingPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Funding'), ExportConstants.STYLE_HEADING2);
      if (this._props.activity[ActivityConstants.FUNDINGS]) {
        this._props.activity[ActivityConstants.FUNDINGS].forEach((funding) => {
          // Header data.
          const fieldPaths = [`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_DONOR_ORG_ID]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.SOURCE_ROLE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.TYPE_OF_ASSISTANCE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_INSTRUMENT]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_STATUS]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.MODE_OF_PAYMENT]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_CLASSIFICATION_DATE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_ID]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_TITLE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_CODE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.DONOR_OBJECTIVE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.CONDITIONS]}`];
          fieldPaths.map(i => {
            const field = this._section.prototype.buildSimpleField(i, true, null, false, funding, null,
              { stringOnly: true, context: this._context, props: this._props });
            if (field) {
              return this.createField(field.title, field.value, null, null);
            }
          });

          // Funding items table.
          const groups = [];
          FieldPathConstants.FUNDING_TRANSACTION_TYPES.forEach(trnType => {
            const fds = funding[trnType];
            if (fds && fds.length) {
              const fdByAT = new Map();
              ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => fdByAT.set(adjType, []));
              fds.forEach(it => {
                const items = fdByAT.get(it[ActivityConstants.ADJUSTMENT_TYPE] &&
                  it[ActivityConstants.ADJUSTMENT_TYPE].value);
                if (items) {
                  items.push(it);
                }
              });
              ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => {
                const items = fdByAT.get(adjType);
                if (items.length) {
                  groups.push([trnType, items]);
                }
              });
            }
          });
          groups.map(([trnType, group], idx) => {
            const currency = this._props.activityContext.workspaceCurrency;
            const adjType = group[0][ActivityConstants.ADJUSTMENT_TYPE];
            const measure = `${adjType.value} ${trnType}`;
            const trnPath = `${ActivityConstants.FUNDINGS}~${trnType}`;
            const showFixedExRate = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.FIXED_EXCHANGE_RATE}`);
            const showDisasterResponse = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.DISASTER_RESPONSE}`);
            // eslint-disable-next-line no-unused-vars
            const showPledge = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.PLEDGE}`);
            // Adj type header.
            this.createSimpleLabel(measure, ExportConstants.STYLE_HEADING3);
            if (showFixedExRate) {
              this.createSimpleLabel('Fixed Exchange Rate');
            }
            const cols = 5;
            const table = this._document.createTable(group.length + 2, cols);
            table.setWidth(WidthType.DXA, 9000);
            // This line removes all borders from the table, sadly the official documentation doesnt work :(
            table.properties.root[1] = [];
            group.forEach((g, i) => {
              this.buildFundingDetailItemRow(table, g, currency, i, adjType, showDisasterResponse,
                trnType, showFixedExRate, cols);
            });
            this.buildSubTotalRow(table, group, currency, measure);
            this.buildUndisbursedBalanceSection(table, group, currency);
          });
          this.createSeparator();
        });
      }
    }
  }

  buildUndisbursedBalanceSection(table, group, currency) {
    let totalActualDisbursements = 0;
    let totalActualCommitments = 0;
    const fd = group;
    if (!fd || fd.length === 0) {
      // Dont show this section if there are no funding details.
      return null;
    }
    const fdActualCommitments = (fd[ActivityConstants.COMMITMENTS] || []).filter(item =>
      item[ActivityConstants.ADJUSTMENT_TYPE].value === ValueConstants.ACTUAL
    );
    totalActualCommitments = this._context.currencyRatesManager.convertFundingDetailsToCurrency(fdActualCommitments,
      this._currency);
    const fdActualDisbursements = (fd[ActivityConstants.DISBURSEMENTS] || []).filter(item =>
      item[ActivityConstants.ADJUSTMENT_TYPE].value === ValueConstants.ACTUAL
    );
    totalActualDisbursements = this._context.currencyRatesManager.convertFundingDetailsToCurrency(fdActualDisbursements,
      this._currency);
    const value = totalActualCommitments - totalActualDisbursements;
    this.buildTotalItem(table, 'Undisbursed Balance', value, currency, group.length + 1);
  }

  buildFundingDetailItemRow(table, g, currency, i, adjType, showDisasterResponse, trnType, showFixedExRate, cols) {
    table.getCell(i, !this._rtl ? 0 : 4).addContent(this.createSimpleLabel(adjType.value, null,
      { dontAddToDocument: true }));

    table.getCell(i, !this._rtl ? 1 : 3).addContent(this.createSimpleLabel(this.getDisasterResponse(g,
      showDisasterResponse, trnType), null, { dontAddToDocument: true }));

    table.getCell(i, !this._rtl ? 2 : 2).addContent(this.createSimpleLabel(
      this._context.DateUtils.createFormattedDate(g[ActivityConstants.TRANSACTION_DATE]),
      null, { dontAddToDocument: true }));

    const convertedAmount = this._context.currencyRatesManager
      .convertTransactionAmountToCurrency(g, currency);
    table.getCell(i, !this._rtl ? 3 : 1).addContent(this.createSimpleLabel(
      !this._rtl ? `${this._context.rawNumberToFormattedString(convertedAmount)} ${currency}` :
        `${currency} ${this._context.rawNumberToFormattedString(convertedAmount)}`,
      null, { dontAddToDocument: true }));

    table.getCell(i, !this._rtl ? 4 : 0).addContent(this.createSimpleLabel(
      showFixedExRate ? g[ActivityConstants.FIXED_EXCHANGE_RATE] : '',
      null, { dontAddToDocument: true }));

    if (i % 2 === 0) {
      for (let c = 0; c < cols; c++) {
        table.getRow(i).getCell(c).CellProperties.setShading({ fill: COLOR_SUBTOTAL });
      }
    }
  }

  buildSubTotalRow(table, group, currency, measure) {
    const subtotal = this._context.rawNumberToFormattedString(this._context.currencyRatesManager
      .convertFundingDetailsToCurrency(group, currency));
    this.buildTotalItem(table, `Subtotal ${measure}`, subtotal, currency, group.length);
  }

  buildTotalItem(table, label, value, currency, row) {
    table.getCell(row, !this._rtl ? 0 : 3)
      .addContent(this.createSimpleLabel(label, null, { dontAddToDocument: true }));
    table.getCell(row, !this._rtl ? 3 : 0).addContent(this.createSimpleLabel(!this._rtl ? `${value} ${currency}` :
      `${currency} ${value}`, null, { dontAddToDocument: true }));
    if (!this._rtl) {
      table.getRow(row).mergeCells(0, 2);
    } else {
      table.getRow(row).mergeCells(0, 2);
    }
    table.getRow(row).getCell(0).CellProperties.setShading({ fill: COLOR_EVEN });
    table.getRow(row).getCell(1).CellProperties.setShading({ fill: COLOR_EVEN });
    table.getRow(row).getCell(2).CellProperties.setShading({ fill: COLOR_EVEN });
  }

  getDisasterResponse(g, showDisasterResponse, trnType) {
    if (showDisasterResponse && g[ActivityConstants.DISASTER_RESPONSE] === true) {
      const { activityFieldsManager } = this._context;
      return activityFieldsManager.getFieldLabelTranslation(ActivityConstants.FUNDINGS, trnType,
        ActivityConstants.DISASTER_RESPONSE);
    }
    return '';
  }
}
