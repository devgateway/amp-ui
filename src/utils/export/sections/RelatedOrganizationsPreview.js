import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import UIUtils from '../../../utils/UIUtils';

export default class RelatedOrganizationsPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Related Organizations'), ExportConstants.STYLE_HEADING2);
      this.createPercentageList(null, ActivityConstants.DONOR_ORGANIZATION, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Donor Organization', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.RESPONSIBLE_ORGANIZATION, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Responsible Organization', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.CONTRACTING_AGENCY, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Contracting Agency', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.BENEFICIARY_AGENCY, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Beneficiary Agency', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.IMPLEMENTING_AGENCY, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Implementing Agency', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.EXECUTING_AGENCY, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Executing Agency', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.REGIONAL_GROUP, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Regional Group', UIUtils.getItemTitleForOrganizations);
      this.createPercentageList(null, ActivityConstants.SECTOR_GROUP, ActivityConstants.ORGANIZATION,
        ActivityConstants.PERCENTAGE, null, 'Sector Group', UIUtils.getItemTitleForOrganizations);
      this.createSeparator();
    }
  }
}
