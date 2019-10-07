import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';

export default class ContactsPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Contact Information'), ExportConstants.STYLE_HEADING2);
    }
  }
}
