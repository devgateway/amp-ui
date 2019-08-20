/* eslint-disable class-methods-use-this */
import React, { Component, PropTypes } from 'react';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import APField from '../components/APField.jsx';
import FieldPathConstants from '../../../utils/FieldPathConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import Tablify from '../components/Tablify.jsx';
import Section from './Section.jsx';
import ContactConstants from '../../../modules/util/ContactConstants';
import styles from '../ActivityPreview.css';

/**
 * Activity Preview Contact section
 *
 * @author Nadejda Mandrescu
 */
class APContact extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object,
    buildSimpleField: PropTypes.func.isRequired,
    getActivityContactIds: PropTypes.func.isRequired,
    Logger: PropTypes.func,
    translate: PropTypes.func
  };

  getHydratedContacts() {
    // Contacts will be hydrated and received by props
    // Both in amp_offline and amp_online so we just need to get
    // Activity Con
    const { activity, contactsByIds, getActivityContactIds } = this.props;
    const contactIds = getActivityContactIds(activity);
    const hydratedContactsByIds = {};
    contactIds.forEach(cId => {
      const c = contactsByIds[cId] || {};
      if (c[ContactConstants.TMP_HYDRATED]) {
        hydratedContactsByIds[cId] = c;
      }
    });
    return hydratedContactsByIds;
  }

  renderContact(contact) {
    const { contactFieldsManager, buildSimpleField } = this.props;
    return (
      <div key={contact.id} className={styles.paddingBottomLarge}>
        <div>{`${contact[ContactConstants.NAME]} ${contact[ContactConstants.LAST_NAME]}`}</div>
        {contact[ContactConstants.EMAIL].map(email =>
          buildSimpleField(`${ContactConstants.EMAIL}~
          ${ContactConstants.VALUE}`, true, null, false, email, contactFieldsManager))}
        {contact[ContactConstants.PHONE].map(phone =>
          buildSimpleField(`${ContactConstants.PHONE}~
          ${ContactConstants.VALUE}`, true, null, false, phone, contactFieldsManager))}
      </div>
    );
  }

  renderNoContacts() {
    const { Logger, translate } = this.props;
    return (
      <APField
        fieldNameClass={styles.hidden} fieldValueClass={styles.nodata} fieldClass={styles.flex} separator={false}
        value={translate('No Data')} translate={translate} Logger={Logger} />
    );
  }

  render() {
    const { Logger } = this.props;
    const { activity, activityFieldsManager } = this.props;
    const hydratedContactsByIds = this.getHydratedContacts();
    const contactGroups = FieldPathConstants.ACTIVITY_CONTACT_PATHS
      .filter(acp => activityFieldsManager.isFieldPathEnabled(acp))
      .map(acp => {
        const title = activityFieldsManager.getFieldLabelTranslation(acp);
        const contacts = (activity[acp] || []).map(c => {
          const hydratedC = hydratedContactsByIds[c[ActivityConstants.CONTACT].id];
          return hydratedC ? this.renderContact(hydratedC) : null;
        });
        const content = contacts.length ? contacts : this.renderNoContacts();
        const contentClass = contacts.length ? styles.tableCell : null;

        return (
          <div key="contact-group">
            <div key="title" className={styles.sector_title}>{title}</div>
            <div key="contacts" className={contentClass}>{content}</div>
          </div>);
      })
      // TODO tablify must not reverses the order
      .reverse();
    return (<Tablify
      key="contact-info" content={contactGroups} columns={ActivityConstants.ACTIVITY_CONTACT_COLS}
      Logger={Logger} />);
  }
}

export default Section(APContact, { SectionTitle: 'Contact Information',
  useEncapsulateHeader: true,
  sID: 'APContact'
});
