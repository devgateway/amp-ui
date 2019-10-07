import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class SitesPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Structures'), ExportConstants.STYLE_HEADING2);
      if (this._props.activity[ActivityConstants.STRUCTURES]) {
        this._props.activity[ActivityConstants.STRUCTURES].sort((a, b) =>
          (a[ActivityConstants.STRUCTURES_TITLE] > b[ActivityConstants.STRUCTURES_TITLE]))
          .map(s => {
            // eslint-disable-next-line max-len
            const title = this._section.prototype.buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_TITLE]}`,
              true, null, false, s, null, {
                stringOnly: true,
                context: this._context,
                props: this._props
              });
            // eslint-disable-next-line max-len
            const desc = this._section.prototype.buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_DESCRIPTION]}`,
              false, null, false, s, null, {
                stringOnly: true,
                context: this._context,
                props: this._props
              });
            this.createField(title.title, title.value);
            this.createField(desc.title, desc.value);
          });
      }
    }
  }
}
