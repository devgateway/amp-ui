import PreviewSection from './PreviewSection';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class SummaryPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    let items = [ActivityConstants.AMP_ID, ActivityConstants.ACTIVITY_STATUS, ActivityConstants.ACTIVITY_BUDGET];
    if (this._rtl) {
      items = items.reverse();
    }
    items.map(i => {
      const field = this._section.prototype.buildSimpleField(i, true, null, false, null, null,
        { stringOnly: true, context: this._context, props: this._props });
      return this.createField(field.title, field.value);
    });
    this.createSeparator();
  }
}
