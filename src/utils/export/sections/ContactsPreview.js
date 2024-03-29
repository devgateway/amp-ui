import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ContactConstants from '../../../modules/util/ContactConstants';
import FieldPathConstants from '../../../utils/FieldPathConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class ContactsPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Contact Information'), ExportConstants.STYLE_HEADING2);

      const hydratedContactsByIds = this.getHydratedContacts();
      FieldPathConstants.ACTIVITY_CONTACT_PATHS
        .filter(acp => this._context.activityFieldsManager.isFieldPathEnabled(acp))
        // eslint-disable-next-line array-callback-return
        .map(acp => {
          const prefix = (this._context.activityContext.teamMember &&
            this._context.activityContext.teamMember.workspace &&
            this._context.activityContext.teamMember.workspace.prefix) ?
            this._context.activityContext.teamMember.workspace.prefix : null;
          const title = this._context.activityFieldsManager.getFieldLabelTranslation(acp, prefix);
          this.createSimpleLabel(title, 'Heading3');
          let hasData = false;
          // eslint-disable-next-line array-callback-return
          (this._props.activity[acp] || []).map(c => {
            const hydratedC = hydratedContactsByIds[c[ActivityConstants.CONTACT].id];
            if (hydratedC) {
              hasData = true;
              const emails = hydratedC[ContactConstants.EMAIL].map(email => this._section.prototype.buildSimpleField(
                // eslint-disable-next-line max-len
                `${ContactConstants.EMAIL}~${ContactConstants.VALUE}`, true, null,
                false, email, this._context.contactFieldsManager, {
                  stringOnly: true,
                  context: this._context,
                  props: this._props
                }));
              const phones = hydratedC[ContactConstants.PHONE].map(phone => this._section.prototype.buildSimpleField(
                // eslint-disable-next-line max-len
                `${ContactConstants.PHONE}~${ContactConstants.VALUE}`, true, null,
                false, phone, this._context.contactFieldsManager, {
                  stringOnly: true,
                  context: this._context,
                  props: this._props
                }));
              const name = `${hydratedC[ContactConstants.NAME]} ${hydratedC[ContactConstants.LAST_NAME]}`;
              this.createSimpleLabel(name +
                (emails ? ` - ${emails.map(e => e.value).toString()}` : '') +
                (phones ? ` - ${phones.map(e => e.value).toString()}` : '')).bullet();
            }
          });
          if (!hasData) {
            this.createSimpleLabel('No Data', null, { tab: true });
          }
        });
      this.createSeparator();
    }
  }

  getHydratedContacts() {
    const contactIds = this._context.getActivityContactIds(this._props.activity);
    const hydratedContactsByIds = {};
    contactIds.forEach(cId => {
      const c = this._context.contactsByIds[cId] || {};
      if (c[ContactConstants.TMP_HYDRATED]) {
        hydratedContactsByIds[cId] = c;
      }
    });
    return hydratedContactsByIds;
  }
}
