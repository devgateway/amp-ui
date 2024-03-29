/* eslint-disable class-methods-use-this */
const FEATURE_MANAGER = 'Feature manager';

/**
 * Feature Manager
 * @author Nadejda Mandrescu
 */
export default class FeatureManager {
  // eslint-disable-next-line no-undef
  static _currentFM = new FeatureManager();

  constructor(fmTree, LoggerManager) {
    this._fmTree = fmTree;
    if (LoggerManager) {
      this.loggerManager = LoggerManager;
    }
  }
  set fmTree(fmTree) {
    this._fmTree = fmTree;
  }
  set loggerManager(LoggerManager) {
    this._loggerManager = new LoggerManager(FEATURE_MANAGER);
  }

  static setLoggerManager(LoggerManager) {
    FeatureManager._currentFM.loggerManager = LoggerManager;
  }
  static setFMTree(fmTree) {
    FeatureManager._currentFM.fmTree = fmTree;
  }

  /**
   * Checks if the given FM path is fully enabled or only last segment is enabled
   * @param fmPath the FM path, e.g. '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate'
   * @param onlyLastSegment specifies if to check if only the last segment is enabled (the AMP behavior for some cases)
   * @return {boolean}
   */
  static isFMSettingEnabled(fmPath, onlyLastSegment) {
    return FeatureManager._currentFM.isFMSettingEnabled(fmPath, onlyLastSegment);
  }

  static hasFMSetting(fmPath) {
    return FeatureManager._currentFM.hasFMSetting(fmPath);
  }

  isFMSettingEnabled(fmPath, onlyLastSegment) {
    this._loggerManager.debug('isFMSettingEnabled');
    if (this._fmTree) {
      let lastFMSubTree = this._fmTree;
      const segments = this._getPathSegments(fmPath);
      const foundLastFMSubTree = segments.every(segment => {
        lastFMSubTree = lastFMSubTree[segment];
        return lastFMSubTree !== undefined && (lastFMSubTree.__enabled || onlyLastSegment);
      });
      return foundLastFMSubTree && lastFMSubTree.__enabled;
    }
    return false;
  }

  hasFMSetting(fmPath) {
    const fmSetting = this.findFMSetting(fmPath);
    return fmSetting && fmSetting.__enabled !== undefined;
  }

  findFMSetting(fmPath) {
    const segments = this._getPathSegments(fmPath);
    return segments.reduce((currentFMSetting, segment) => currentFMSetting && currentFMSetting[segment]
      , this._fmTree || {});
  }

  setFMSetting(fmPath, enabled) {
    if (this._fmTree) {
      const segments = this._getPathSegments(fmPath);
      const lastFMSubTree = segments.reduce((currentFMTree, segment) => {
        let segmentFM = currentFMTree[segment];
        if (segmentFM === undefined) {
          segmentFM = {};
          currentFMTree[segment] = segmentFM;
        }
        return segmentFM;
      }, this._fmTree);
      lastFMSubTree.__enabled = enabled;
    }
  }

  _getPathSegments(fmPath) {
    // ignore first "/" to exclude empty string from the split
    return fmPath.substring(1).split('/');
  }
}
