import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

const docx = require('docx');

const { WidthType } = docx;
export default class InternalId extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Agency Internal IDs'), ExportConstants.STYLE_HEADING2);
      if (this._props.activity[ActivityConstants.ACTIVITY_INTERNAL_IDS]
        && this._props.activity[ActivityConstants.ACTIVITY_INTERNAL_IDS].length > 0) {
        const cols = 2;
        const table = this._document
          .createTable(this._props.activity[ActivityConstants.ACTIVITY_INTERNAL_IDS].length + 1, cols);
        table.setWidth(WidthType.DXA, 9000);
        table.properties.root[1] = [];
        let i = 0;
        this._props.activity[ActivityConstants.ACTIVITY_INTERNAL_IDS].forEach((internalId) => {
          const orgPath = `${ActivityConstants.ACTIVITY_INTERNAL_IDS}~${ActivityConstants.ORGANIZATION}`;
          const idPath = `${ActivityConstants.ACTIVITY_INTERNAL_IDS}~${ActivityConstants.INTERNAL_ID}`;

          const orgField = this._section.prototype.buildSimpleField(orgPath, true,
            null, false, internalId, null,
            { stringOnly: true, context: this._context, props: this._props });
          const idField = this._section.prototype.buildSimpleField(idPath, true,
            null, false, internalId, null,
            { stringOnly: true, context: this._context, props: this._props });

          table.getCell(i % 2 === 0 ? i : i - 1, i % 2 === 0 ? 0 : 1)
            .addContent(this.createSimpleLabel(
              `[${orgField !== null ? orgField.value : ''}]`, null, { dontAddToDocument: true }));
          table.getCell(i % 2 === 0 ? i + 1 : i, i % 2 === 0 ? 0 : 1)
            .addContent(this.createSimpleLabel(
              `[${idField !== null ? idField.value : ''}]`, null, { dontAddToDocument: true }));
          i += 1;
        });

        for (let j = 0; j < i; j++) {
          for (let c = 0; c < cols; c++) {
            table.getRow(j)
              .getCell(c)
              .CellProperties
              .setWidth('50%');
          }
          this.createSeparator();
        }
      } else {
        this.createSimpleLabel('No Data');
      }
    }
  }
}
