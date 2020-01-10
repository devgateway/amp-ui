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
  },
  sortFundingItems(items, reorderFundingItemId) {
    let reorderFunction;
    switch (reorderFundingItemId) {
      case Constants.ORDER_FUNDING_ITEM_TRANSACTION_DATE_DESC:
        reorderFunction = (a, b) => Date.parse(b[ActivityConstants.TRANSACTION_DATE])
          - Date.parse(a[ActivityConstants.TRANSACTION_DATE]);
        break;
      case Constants.ORDER_FUNDING_ITEM_TRANSACTION_DATE_ASC:
        reorderFunction = (a, b) => Date.parse(a[ActivityConstants.TRANSACTION_DATE])
          - Date.parse(b[ActivityConstants.TRANSACTION_DATE]);
        break;
      case Constants.ORDER_FUNDING_ITEM_INSERTION_ORDER_DESC:
        reorderFunction = (a, b) => Date.parse(b[ActivityConstants.REPORTING_DATE])
          - Date.parse(b[ActivityConstants.REPORTING_DATE]);
        break;
      case Constants.ORDER_FUNDING_ITEM_INSERTION_ORDER_ASC:
        reorderFunction = (a, b) => Date.parse(a[ActivityConstants.REPORTING_DATE])
          - Date.parse(b[ActivityConstants.REPORTING_DATE]);
        break;
      default:
        reorderFunction = (a, b) => Date.parse(b[ActivityConstants.TRANSACTION_DATE])
          - Date.parse(a[ActivityConstants.TRANSACTION_DATE]);
        break;
    }
    items.sort(reorderFunction);
  }

};
export default CommonActivityHelper;
