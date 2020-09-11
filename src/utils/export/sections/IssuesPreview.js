import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class IssuesPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Issues'), ExportConstants.STYLE_HEADING2);
      let hasData = false;
      if (this._props.activity[ActivityConstants.ISSUES]) {
        this._props.activity[ActivityConstants.ISSUES].forEach((issue) => {
          let date = '';
          // eslint-disable-next-line max-len
          if (this._context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.ISSUE_DATE}`)) {
            date = ` ${this._context.DateUtils.createFormattedDate(issue[ActivityConstants.ISSUE_DATE])}`;
          }
          this.createListField(issue.name, date, 0, null, true);
          hasData = true;
          issue[ActivityConstants.MEASURES].forEach((measure) => {
            date = '';
            // eslint-disable-next-line max-len
            if (this._context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.MEASURE_DATE}`)) {
              date = ` ${this._context.DateUtils.createFormattedDate(measure[ActivityConstants.MEASURE_DATE])}`;
            }
            /* eslint-enable max-len */
            //  TODO: use createListItem con el lvl.
            this.createListField(measure.name || '', date, 1, null, true);
            measure[ActivityConstants.ACTORS].forEach((actor) => {
              // eslint-disable-next-line max-len
              if (this._context.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.ACTORS}`)) {
                this.createListField(actor.name || '', null, 2, null, true);
              }
            });
          });
          if (!hasData) {
            this.createSimpleLabel('No Data');
          }
        });
      }
      this.createSeparator();
    }
  }
}
