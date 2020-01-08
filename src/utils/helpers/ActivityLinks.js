const links = {};
export default class ActivityLinks {
  static registerLinks({ viewLink, editLink, versionHistoryLink, compareActivityLink }) {
    links.view = {};
    links.edit = {};
    links.versionHistory = {};
    links.compareActivity = {};
    if (viewLink) {
      links.view.isExternal = viewLink.isExternal;
      links.view.url = viewLink.url;
    }
    if (versionHistoryLink) {
      links.versionHistory.isExternal = versionHistoryLink.isExternal;
      links.versionHistory.url = versionHistoryLink.url;
    }
    if (compareActivityLink) {
      links.compareActivity.isExternal = compareActivityLink.isExternal;
      links.compareActivity.url = compareActivityLink.url;
    }
    links.edit.isExternal = editLink.isExternal;
    links.edit.url = editLink.url;
  }

  static getViewLink() {
    return links.view;
  }

  static getEditLink() {
    return links.edit;
  }

  static getVersionHistoryLink() {
    return links.versionHistory;
  }

  static getCompareActivityLink() {
    return links.compareActivity;
  }
}
