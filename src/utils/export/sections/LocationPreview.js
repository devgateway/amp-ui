import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class LocationPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Location'), ExportConstants.STYLE_HEADING2);
      const pContent = this._document.createParagraph();

      // Top content.
      [ActivityConstants.IMPLEMENTATION_LEVEL, ActivityConstants.IMPLEMENTATION_LOCATION]
        .map(fp => {
          const field = this._section.prototype.buildSimpleField(fp, true, new Set([0]), false,
            null, null, { stringOnly: true, context: this._context, props: this._props });
          if (field) {
            return this.createField(field.title, field.value, pContent, null, null);
          }
        });
      if ((this._props.activity[ActivityConstants.IMPLEMENTATION_LEVEL]
        && this._props.activity[ActivityConstants.IMPLEMENTATION_LEVEL].value !== ActivityConstants.NATIONAL)
        || (this._props.activity[ActivityConstants.IMPLEMENTATION_LOCATION]
          && this._props.activity[ActivityConstants.IMPLEMENTATION_LOCATION].value !== ActivityConstants.COUNTRY)) {
        // Locations list.
        this.createPercentageList(null, ActivityConstants.LOCATIONS, ActivityConstants.LOCATION,
          ActivityConstants.LOCATION_PERCENTAGE, null, null);
      }
    }
  }
}
