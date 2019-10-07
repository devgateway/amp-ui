import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class ProgramPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Program'), ExportConstants.STYLE_HEADING2);
      this.createPercentageList(null, ActivityConstants.NATIONAL_PLAN_OBJECTIVE,
        ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, null, 'National Plan Objective');
      this.createPercentageList(null, ActivityConstants.PRIMARY_PROGRAMS,
        ActivityConstants.PROGRAM, ActivityConstants.PROGRAM_PERCENTAGE, null, 'Primary Program');
      this.createPercentageList(null, ActivityConstants.SECONDARY_PROGRAMS, ActivityConstants.PROGRAM,
        ActivityConstants.PROGRAM_PERCENTAGE, null, 'Secondary Program');
    }
  }
}
