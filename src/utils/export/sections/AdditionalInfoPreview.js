import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import WorkspaceConstants from '../../constants/WorkspaceConstants';

export default class AdditionalInfoPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    const { translate, activityFieldsManager } = this._context;
    const { activityContext } = this._props;
    this.createSimpleLabel(translate('Additional Info'), ExportConstants.STYLE_HEADING2);
    const fieldPaths = [ActivityConstants.CREATED_BY, ActivityConstants.CREATED_ON, ActivityConstants.MODIFIED_BY,
      ActivityConstants.MODIFIED_ON];
    // eslint-disable-next-line array-callback-return
    fieldPaths.map(fieldPath => {
      const field = this._section.prototype.buildSimpleField(fieldPath, true, null,
        false, null, null, { stringOnly: true, context: this._context, props: this._props });
      if (field) {
        return this.createField(field.title, field.value, null, null, null);
      }
    });

    const teamName = activityFieldsManager.getValue(this._props.activity, ActivityConstants.TEAM,
      PossibleValuesManager.getOptionTranslation);
    // no need to export repeating translation for the access type through workspaces EP
    const accessType = translate(activityContext[WorkspaceConstants.ACCESS_TYPE]);
    const isComputedTeam = activityContext[WorkspaceConstants.IS_COMPUTED] === true ?
      translate('Yes') : translate('No');
    this.createField(this._context.translate('createdInWorkspace'), `${teamName} - ${accessType}`);
    this.createField(this._context.translate('workspaceManager'), activityContext.workspaceLeadData);
    this.createField(this._context.translate('computation'), isComputedTeam);
    this.createSeparator();
  }
}
