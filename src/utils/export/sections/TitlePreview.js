import PreviewSection from './PreviewSection';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import * as ExportConstants from '../ExportConstants';

export default class ContactsPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    this.createSimpleLabel(this._props.activity[ActivityConstants.PROJECT_TITLE], ExportConstants.STYLE_HEADING1);
  }
}
