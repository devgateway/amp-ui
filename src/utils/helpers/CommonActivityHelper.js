import Constants from '../Constants';
import ActivityConstants from '../../modules/util/ActivityConstants';
import { ApprovalStatus } from '../constants/ApprovalStatus';

const CommonActivityHelper = {
  getActivityStatus(item) {
    let status = '';
    const approvalStatusId = item[ActivityConstants.APPROVAL_STATUS];
    if (item[ActivityConstants.IS_DRAFT]) {
      status = Constants.ACTIVITY_STATUS_DRAFT;
    } else if (approvalStatusId === ApprovalStatus.APPROVED.id ||
      approvalStatusId === ApprovalStatus.STARTED_APPROVED.id) {
      status = Constants.ACTIVITY_STATUS_VALIDATED;
    } else {
      status = Constants.ACTIVITY_STATUS_UNVALIDATED;
    }
    return status;
  }
};
export default CommonActivityHelper;
