import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ResourceConstants from '../../constants/ResourceConstants';
import ResourceUtils from '../../ResourceUtils';

export default class DocumentsPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Related Documents'), ExportConstants.STYLE_HEADING2);
      const { resourcesByUuids } = this._context.resourceReducer;
      const resourcesUuids = ResourceUtils.getActivityResourceUuids(this._props.activity);
      const uuids = resourcesUuids.map(uuid => {
        const r = { ...resourcesByUuids[uuid] };
        r[ResourceConstants.ADDING_DATE] = r[ResourceConstants.ADDING_DATE] || r[ResourceConstants.CLIENT_ADDING_DATE];
        r[ResourceConstants.YEAR_OF_PUBLICATION] = r[ResourceConstants.YEAR_OF_PUBLICATION] ||
          r[ResourceConstants.CLIENT_YEAR_OF_PUBLICATION];
        return r;
      })
        .filter(r => r);
      // eslint-disable-next-line array-callback-return
      uuids.map(uuid => {
        const name = this._section.prototype.buildSimpleField(ResourceConstants.TITLE, true,
          null, false, uuid, this._context.resourceReducer.resourceFieldsManager, {
            stringOnly: true,
            context: this._context,
            props: this._props
          });
        // eslint-disable-next-line max-len
        this.createField(name.title, (`${name.value} - ${uuid[ResourceConstants.WEB_LINK] || uuid[ResourceConstants.FILE_NAME]}`));
        const desc = this._section.prototype.buildSimpleField(ResourceConstants.DESCRIPTION, true,
          null, false, uuid, this._context.resourceReducer.resourceFieldsManager, {
            stringOnly: true,
            context: this._context,
            props: this._props
          });
        this.createField(desc.title, desc.value);
        const date = this._section.prototype.buildSimpleField(ResourceConstants.ADDING_DATE, true,
          null, false, uuid, this._context.resourceReducer.resourceFieldsManager, {
            stringOnly: true,
            context: this._context,
            props: this._props
          });
        this.createField(date.title, date.value);
      });
      this.createSeparator();
    }
  }
}
