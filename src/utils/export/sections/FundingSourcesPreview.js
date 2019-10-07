import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class FundingSourcesPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Funding Sources'), ExportConstants.STYLE_HEADING2);
      const field = this._section.prototype.buildSimpleField(ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES, true,
        new Set([0]), false, null, null, { stringOnly: true, context: this._context, props: this._props });
      if (field) {
        this.createField(field.title, field.value, null, null);
      }
    }
  }
}
