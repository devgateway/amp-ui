import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldPathConstants from '../../FieldPathConstants';
import ValueConstants from '../../ValueConstants';
import NumberUtils from '../../NumberUtils';
import CommonActivityHelper from '../../helpers/CommonActivityHelper';
import APFundingTotalsSection from '../../../activity/preview/sections/funding/APFundingTotalsSection.jsx';

const docx = require('docx');

const { WidthType } = docx;

const COLOR_SUBTOTAL = '#efefef';
const COLOR_EVEN = '#97c4f3';

export default class FundingPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      const { activity } = this._props;
      this.createSimpleLabel(this._context.translate('Funding'), ExportConstants.STYLE_HEADING2);
      if (activity[ActivityConstants.FUNDINGS]) {
        this.buildProposedProjectCostTable();
        this.buildHeaderSection();
        const currency = this._props.activityContext.effectiveCurrency;
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
          // eslint-disable-next-line array-callback-return
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
          // eslint-disable-next-line array-callback-return
          groups.map(([trnType, group]) => {
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
              this.createSimpleLabel('Fixed Exchange Rate', null, { alignRight: true });
            }
            const cols = 5;
            const pCount = group.filter(g => g.pledge).length;
            const pDisbursementsIdCount = group.filter(g => g[ActivityConstants.DISBURSEMENT_ID]).length;
            const table = this._document.createTable(group.length + pCount + pDisbursementsIdCount + 2, cols);
            table.setWidth(WidthType.DXA, 9000);
            // This line removes all borders from the table, sadly the official documentation doesnt work :(
            table.properties.root[1] = [];
            const pledgeCount = { count: 0 };
            CommonActivityHelper.sortFundingItems(group, this._props.activityContext.reorderFundingItemId);
            const disbursementId = { count: 0 };
            group.forEach((g, i) => {
              const showDisbursementId = trnType === ActivityConstants.DISBURSEMENTS;
              this.buildFundingDetailItemRow(table, g, currency, i, adjType, showDisasterResponse,
                trnType, showFixedExRate, cols, this._context.translate, showPledge, pledgeCount,
                showDisbursementId, disbursementId);
            });
            this.buildSubTotalRow(table, group, currency, measure, pCount, pDisbursementsIdCount);
          });
          this.createSeparator();
        });
        this.buildTotalsTable(currency);
        this.createSeparator();
      }
    }
  }

  buildHeaderSection = () => {
    const { activityFieldsManager } = this._context;
    if (activityFieldsManager.isFieldPathEnabled(ActivityConstants.MODALITIES)) {
      const field = this._section.prototype.buildSimpleField(ActivityConstants.MODALITIES, true, null,
        false, null, null,
        { stringOnly: true, context: this._context, props: this._props });
      if (field) {
        this.createField(field.title, field.value, null, null);
        this.createSeparator(true);
      }
    }
  }

  buildProposedProjectCostTable() {
    const { activityFieldsManager, translate, activity } = this._context;
    if (activityFieldsManager.isFieldPathEnabled(ActivityConstants.PPC_AMOUNT)) {
      this.createSimpleLabel(translate('Proposed Project Cost'), ExportConstants.STYLE_HEADING3);
      if (activityFieldsManager
        .isFieldPathEnabled(`${ActivityConstants.PPC_AMOUNT}~${ActivityConstants.AMOUNT}`)) {
        const ppc = activity[ActivityConstants.PPC_AMOUNT];
        const convertedAmount = ppc.amount;
        const currency = ppc.currency.value;
        let date;
        if (ppc.funding_date !== undefined && ppc.funding_date !== null) {
          date = this._context.DateUtils.createFormattedDate(ppc.funding_date);
        } else {
          date = translate('No Data');
        }
        this.createField(translate('Cost'),
          !this._rtl ? `${NumberUtils.rawNumberToFormattedString(convertedAmount)} ${currency}` :
            `${currency} ${NumberUtils.rawNumberToFormattedString(convertedAmount)}`, null, null);
        this.createField(translate('Date'), `${date}`, null, null);
      }
      this.createSeparator(true);
    }
  }

  buildTotalsTable(currency) {
    const { activityFieldsManager, activityFundingTotals, translate } = this._context;

    const { actualCommitments, actualDisbursements, options } =
      APFundingTotalsSection.calculateTotalActualCommitmentsDisbursements(
        activityFieldsManager, activityFundingTotals, translate);
    if (actualDisbursements && actualCommitments) {
      options.push({ label: 'Undisbursed Balance', value: actualCommitments - actualDisbursements });
    }
    if (actualDisbursements && actualCommitments) {
      options.push({
        label: 'Delivery rate',
        value: Math.round((actualDisbursements / actualCommitments) * 100),
        currency: '%'
      });
    }
    const cols = 5;
    const table = this._document.createTable(options.length, cols);
    table.setWidth(WidthType.DXA, 9000);
    // This line removes all borders from the table, sadly the official documentation doesnt work :(
    table.properties.root[1] = [];
    options.forEach((g, i) => {
      if (g.value > 0) {
        this.buildTotalItem(table, g.label, g.value, g.currency || currency, i);
      }
    });
  }

  buildFundingDetailItemRow(table, g, currency, i, adjType, showDisasterResponse, trnType, showFixedExRate, cols,
    translate, showPledge, pledge, showDisbursementId, disbursementId) {
    const noPledgeIndex = i + pledge.count + disbursementId.count;
    table.getCell(noPledgeIndex, !this._rtl ? 0 : 4)
      .addContent(this.createSimpleLabel(adjType.value, null,
        { dontAddToDocument: true }));
    table.getCell(noPledgeIndex, !this._rtl ? 1 : 3)
      .addContent(this.createSimpleLabel(this.getDisasterResponse(g,
        showDisasterResponse, trnType), 'FundingSmall', { dontAddToDocument: true }));

    table.getCell(noPledgeIndex, !this._rtl ? 2 : 2)
      .addContent(this.createSimpleLabel(
        this._context.DateUtils.createFormattedDate(g[ActivityConstants.TRANSACTION_DATE]),
        null, { dontAddToDocument: true }));

    const convertedAmount = this._context.currencyRatesManager
      .convertTransactionAmountToCurrency(g, currency);
    table.getCell(noPledgeIndex, !this._rtl ? 3 : 1)
      .addContent(this.createSimpleLabel(
        !this._rtl ? `${NumberUtils.rawNumberToFormattedString(convertedAmount)} ${currency}` :
          `${currency} ${NumberUtils.rawNumberToFormattedString(convertedAmount)}`,
        null, { dontAddToDocument: true }));

    table.getCell(noPledgeIndex, !this._rtl ? 4 : 0)
      .addContent(this.createSimpleLabel(
        showFixedExRate ? g[ActivityConstants.FIXED_EXCHANGE_RATE] : '',
        null, { dontAddToDocument: true }));

    if (showDisbursementId && g[ActivityConstants.DISBURSEMENT_ID]) {
      disbursementId.count += 1;
      const noDisbursementIdIndex = i + disbursementId.count + pledge.count;
      this.buildAdditionalIfoRow(table, noDisbursementIdIndex,
        `${translate('disbursementId')}: ${g[ActivityConstants.DISBURSEMENT_ID]}`, '');
    }
    if (showPledge && g[ActivityConstants.PLEDGE]) {
      pledge.count += 1;
      const pledgeIndex = i + pledge.count + disbursementId.count;
      this.buildAdditionalIfoRow(table, pledgeIndex, translate('Source Pledge'), g[ActivityConstants.PLEDGE].value);
    }
    if ((i) % 2 === 0) {
      for (let c = 0; c < cols; c++) {
        if (pledge.count > 0) {
          table.getRow((i + pledge.count) - 1)
            .getCell(c)
            .CellProperties
            .setShading({ fill: COLOR_SUBTOTAL });
        }
        if (disbursementId.count > 0) {
          table.getRow((i + disbursementId.count) - 1)
            .getCell(c)
            .CellProperties
            .setShading({ fill: COLOR_SUBTOTAL });
        }
        table.getRow(i + pledge.count + disbursementId.count)
          .getCell(c)
          .CellProperties
          .setShading({ fill: COLOR_SUBTOTAL });
      }
    }
  }

  buildAdditionalIfoRow(table, index, label, value) {
    table.getCell(index, !this._rtl ? 0 : 4)
      .addContent(this.createSimpleLabel(label, 'FundingSmall', { dontAddToDocument: true }));
    table.getCell(index, !this._rtl ? 1 : 3)
      .addContent(this.createSimpleLabel(value, 'FundingSmall', { dontAddToDocument: true }));
    table.getCell(index, !this._rtl ? 2 : 2)
      .addContent(this.createSimpleLabel('',
        'FundingSmall', { dontAddToDocument: true }));
    table.getCell(index, !this._rtl ? 3 : 1)
      .addContent(this.createSimpleLabel('',
        'FundingSmall', { dontAddToDocument: true }));
    table.getCell(index, !this._rtl ? 4 : 0)
      .addContent(this.createSimpleLabel('',
        'FundingSmall', { dontAddToDocument: true }));
  }

  buildSubTotalRow(table, group, currency, measure, pCount, pDisbursementsIdCount) {
    const subtotal = NumberUtils.rawNumberToFormattedString(this._context.currencyRatesManager
      .convertFundingDetailsToCurrency(group, currency));
    this.buildTotalItem(table, `Subtotal ${measure}`, subtotal, currency, group.length + pCount + pDisbursementsIdCount)
    ;
  }

  buildTotalItem(table, label, value, currency, row) {
    value = NumberUtils.rawNumberToFormattedString(value);
    table.getCell(row, !this._rtl ? 0 : 3)
      .addContent(this.createSimpleLabel(label, null, { dontAddToDocument: true }));
    table.getCell(row, !this._rtl ? 3 : 0)
      .addContent(this.createSimpleLabel(!this._rtl ? `${value} ${currency}` :
        `${currency} ${value}`, null, { dontAddToDocument: true }));
    if (!this._rtl) {
      table.getRow(row)
        .mergeCells(0, 2);
    } else {
      table.getRow(row)
        .mergeCells(0, 2);
    }
    table.getRow(row)
      .getCell(0)
      .CellProperties
      .setShading({ fill: COLOR_EVEN });
    table.getRow(row)
      .getCell(1)
      .CellProperties
      .setShading({ fill: COLOR_EVEN });
    table.getRow(row)
      .getCell(2)
      .CellProperties
      .setShading({ fill: COLOR_EVEN });
  }

  getDisasterResponse(g, showDisasterResponse, trnType) {
    if (showDisasterResponse && g[ActivityConstants.DISASTER_RESPONSE] === true) {
      const { activityFieldsManager } = this._context;
      const { activityContext } = this._props;
      const prefix = (activityContext.teamMember && activityContext.teamMember.workspace &&
        activityContext.teamMember.workspace.prefix) ?
        activityContext.teamMember.workspace.prefix : null;
      return activityFieldsManager.getFieldLabelTranslation(
        `${ActivityConstants.FUNDINGS}~${trnType}~${ActivityConstants.DISASTER_RESPONSE}`, prefix);
    }
    return '';
  }
}
