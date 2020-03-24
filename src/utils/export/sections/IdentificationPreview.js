import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import ValueConstants from '../../ValueConstants';

export default class IdentificationPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Identification'), ExportConstants.STYLE_HEADING2);
      // TODO: This is a copy from APIdentification.jsx, try to find a way to have it in one place.
      const fieldPaths = [ActivityConstants.STATUS_REASON, ActivityConstants.TYPE_OF_COOPERATION,
        ActivityConstants.TYPE_OF_IMPLEMENTATION, ActivityConstants.MODALITIES, ActivityConstants.OBJECTIVE,
        ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.RESULTS,
        ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY,
        ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT,
        ActivityConstants.BUDGET_CODE_PROJECT_ID, ActivityConstants.A_C_CHAPTER, ActivityConstants.CRIS_NUMBER,
        ActivityConstants.ACTIVITY_BUDGET, ActivityConstants.GOVERNMENT_AGREEMENT_NUMBER,
        ActivityConstants.GOVERNMENT_APPROVAL_PROCEDURES, ActivityConstants.JOINT_CRITERIA,
        ActivityConstants.HUMANITARIAN_AID];
      // Show budget extras fields like ministry_code, etc only when activity_budget
      // is enabled and has value 'On Budget'.
      if (this._context.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_BUDGET)
        && this._props.activity[ActivityConstants.ACTIVITY_BUDGET]
        && this._props.activity[ActivityConstants.ACTIVITY_BUDGET].value === ValueConstants.ON_BUDGET) {
        fieldPaths.push(ActivityConstants.INDIRECT_ON_BUDGET);
        fieldPaths.push(ActivityConstants.FY);
        fieldPaths.push(ActivityConstants.MINISTRY_CODE);
        fieldPaths.push(ActivityConstants.PROJECT_CODE);
      }
      fieldPaths.push(...[ActivityConstants.FINANCIAL_INSTRUMENT, ActivityConstants.IATI_IDENTIFIER]);
      // eslint-disable-next-line array-callback-return
      fieldPaths.map(i => {
        const field = this._section.prototype.buildSimpleField(i, true, null, false, null, null,
          { stringOnly: true, context: this._context, props: this._props });
        if (field) {
          return this.createField(field.title, field.value, null, null);
        }
      });
      this.createSeparator();
    }
  }
}
