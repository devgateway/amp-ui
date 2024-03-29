import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class SitesPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      const { translate, activityFieldsManager } = this._context;
      this.createSimpleLabel(this._context.translate('Structures'), ExportConstants.STYLE_HEADING2);
      if (this._props.activity[ActivityConstants.STRUCTURES]) {
        this._props.activity[ActivityConstants.STRUCTURES].sort((a, b) =>
          (a[ActivityConstants.STRUCTURES_TITLE] > b[ActivityConstants.STRUCTURES_TITLE]))
        // eslint-disable-next-line array-callback-return
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
            const COORDINATES_PATH = `${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_TITLE]}`;
            const LATITUDE_PATH = `${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_LATITUDE]}`;
            const LONGITUDE_PATH = `${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_LONGITUDE]}`;
            if (activityFieldsManager.isFieldPathEnabled(COORDINATES_PATH)
              && s[ActivityConstants.STRUCTURES_COORDINATES]
              && s[ActivityConstants.STRUCTURES_COORDINATES].length > 0) {
              this.createField(translate('Coordinates'),
                s[ActivityConstants.STRUCTURES_COORDINATES].map(ss =>
                  `${ss[ActivityConstants.STRUCTURES_LATITUDE]} ${ss[ActivityConstants.STRUCTURES_LONGITUDE]}`)
                  .join('|'));
            } else if (activityFieldsManager.isFieldPathEnabled(LATITUDE_PATH)
              && activityFieldsManager.isFieldPathEnabled(LONGITUDE_PATH)
              && s[ActivityConstants.STRUCTURES_LATITUDE] && s[ActivityConstants.STRUCTURES_LONGITUDE]) {
              this.createField('Latitude', s[ActivityConstants.STRUCTURES_LATITUDE]);
              this.createField('Longitude', s[ActivityConstants.STRUCTURES_LONGITUDE]);
            }
            this.createSeparator();
          });
      }
      this.createSeparator();
    }
  }
}
