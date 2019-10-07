import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class PlanningPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Planning'), ExportConstants.STYLE_HEADING2);
      let content = [];
      content.push(this._section.prototype.buildSimpleField(ActivityConstants.LINE_MINISTRY_RANK,
        true, new Set([-1]), false,
        null, null, { stringOnly: true, context: this._context, props: this._props }));
      const fieldPaths = [ActivityConstants.ORIGINAL_COMPLETION_DATE, ActivityConstants.ACTUAL_START_DATE,
        ActivityConstants.ACTUAL_COMPLETION_DATE, ActivityConstants.PROPOSED_START_DATE,
        ActivityConstants.ACTUAL_APPROVAL_DATE, ActivityConstants.PROPOSED_COMPLETION_DATE,
        ActivityConstants.PROPOSED_APPROVAL_DATE];
      const showIfNotAvailable = new Set([ActivityConstants.ORIGINAL_COMPLETION_DATE,
        ActivityConstants.ACTUAL_START_DATE, ActivityConstants.ACTUAL_COMPLETION_DATE,
        ActivityConstants.PROPOSED_START_DATE, ActivityConstants.ACTUAL_APPROVAL_DATE,
        ActivityConstants.PROPOSED_COMPLETION_DATE, ActivityConstants.PROPOSED_APPROVAL_DATE]);

      content = content.concat(fieldPaths.map(fieldPath => {
        const field = this._section.prototype.buildSimpleField(fieldPath, showIfNotAvailable.has(fieldPath), null,
          false, null, null, { stringOnly: true, context: this._context, props: this._props });
        if (field) {
          return this.createField(field.title, field.value, null, null, null);
        }
      }));
    }
  }
}
