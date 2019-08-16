import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import APField from '../components/APField.jsx';
import Section from './Section.jsx';
import * as WSC from '../../../utils/constants/WorkspaceConstants';
import * as UC from '../../../utils/constants/UserConstants';

let logger = null;

/**
 * Additional Info summary section
 * @author Nadejda Mandrecsu
 */
class AdditionalInfo extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityWorkspace: PropTypes.object.isRequired,
    activityWSManager: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    Logger: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Additional info');
    logger.debug('constructor');
  }

  _getWorkspaceLeadData() {
    const { activityWSManager } = this.props;
    if (!activityWSManager) {
      return null;
    }
    return `${activityWSManager[UC.FIRST_NAME]} ${activityWSManager[UC.LAST_NAME]} ${activityWSManager[UC.EMAIL]}`;
  }

  _buildAdditionalInfo() {
    const additionalInfo = [];
    const teamName = this.props.activityFieldsManager.getValue(this.props.activity, ActivityConstants.TEAM,
      PossibleValuesManager.getOptionTranslation);
    // no need to export repeating translation for the access type through workspaces EP
    const accessType = translate(this.props.activityWorkspace[WSC.ACCESS_TYPE]);
    const isComputedTeam = this.props.activityWorkspace[WSC.IS_COMPUTED] === true ? translate('Yes') : translate('No');

    // TODO: the right value as defined in AMP-25403 will be shown after AMP-26295.
    additionalInfo.push(this.props.buildSimpleField(ActivityConstants.CREATED_BY, true));
    additionalInfo.push(this.props.buildSimpleField(ActivityConstants.CREATED_ON, true));
    additionalInfo.push(this.props.buildSimpleField(ActivityConstants.MODIFIED_BY, true));
    additionalInfo.push(this.props.buildSimpleField(ActivityConstants.MODIFIED_ON, true));
    additionalInfo.push(APField.instance('createdInWorkspace', `${teamName} - ${accessType}`,
      false, false, this.props.fieldNameClass, this.props.fieldValueClass, translate, Logger));

    additionalInfo.push(APField.instance('workspaceManager', this._getWorkspaceLeadData(),
      false, false, this.props.fieldNameClass, this.props.fieldValueClass, translate, Logger));

    additionalInfo.push(APField.instance('computation', isComputedTeam,
      false, false, this.props.fieldNameClass, this.props.fieldValueClass, translate, Logger));

    return additionalInfo;
  }

  render() {
    return <div>{this._buildAdditionalInfo()}</div>;
  }

}

export default Section(AdditionalInfo, {
  SectionTitle: 'additionalInfo',
  Logger,
  translate,
  DateUtils
});
