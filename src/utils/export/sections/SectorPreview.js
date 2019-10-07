import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';

export default class SectorPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Sectors'), ExportConstants.STYLE_HEADING2);
      this.createPercentageList(null, ActivityConstants.PRIMARY_SECTORS, ActivityConstants.SECTOR,
        ActivityConstants.SECTOR_PERCENTAGE, null, 'Primary Sector');
      this.createPercentageList(null, ActivityConstants.SECONDARY_SECTORS, ActivityConstants.SECTOR,
        ActivityConstants.SECTOR_PERCENTAGE, null, 'Secondary Sector');
    }
  }
}
