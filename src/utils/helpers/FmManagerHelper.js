export default class FmManagerHelper {
  static getRequestFmSyncUpBody(fmPaths) {
    const fmModules = FmManagerHelper._getModules(fmPaths);
    return {
      'reporting-fields': false,
      'enabled-modules': false,
      'full-enabled-paths': false,
      'detail-modules': fmModules,
      'fm-paths': fmPaths
    };
  }

  static _getModules(fmPaths) {
    return Array.from(new Set(fmPaths.map((path: String) => path.substring(1, path.indexOf('/', 1)).toUpperCase())));
  }
}
