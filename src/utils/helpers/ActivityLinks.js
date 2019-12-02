const links = {};
export default class ActivityLinks {
  static registerLinks({ viewLink, editLink }) {
    links.view = {};
    links.edit = {};
    if (viewLink) {
      links.view.isExternal = viewLink.isExternal;
      links.view.url = viewLink.url;
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
}
