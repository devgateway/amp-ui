/* eslint-disable react/no-unused-prop-types,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import APPercentageList from '../components/APPercentageList.jsx';
import FieldsManager from '../../../modules/field/FieldsManager';
import FeatureManagerConstants from '../../../modules/util/FeatureManagerConstants';
import ResourceUtils from '../../../utils/ResourceUtils';

const DO = APPercentageList(ActivityConstants.DONOR_ORGANIZATION, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Donor Organization');
const RO = APPercentageList(ActivityConstants.RESPONSIBLE_ORGANIZATION, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Responsible Organization');
const CA = APPercentageList(ActivityConstants.CONTRACTING_AGENCY, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Contracting Agency');
const BA = APPercentageList(ActivityConstants.BENEFICIARY_AGENCY, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Beneficiary Agency');
const IA = APPercentageList(ActivityConstants.IMPLEMENTING_AGENCY, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Implementing Agency');
const EA = APPercentageList(ActivityConstants.EXECUTING_AGENCY, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Executing Agency');
const RG = APPercentageList(ActivityConstants.REGIONAL_GROUP, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Regional Group');
const SG = APPercentageList(ActivityConstants.SECTOR_GROUP, ActivityConstants.ORGANIZATION,
  ActivityConstants.PERCENTAGE, 'Sector Group');

/**
 * @author Gabriel Inchauspe
 */
class APRelatedOrganizations extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired
  };

  render() {
    const props = { ...this.props, getItemTitle: ResourceUtils.getItemTitleForOrganizations };
    return (<div>
      <DO key="do-org-list" {...props} fmPath={FeatureManagerConstants.ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION} />
      <RO key="ro-org-list" {...props} />
      <EA key="ea-org-list" {...props} />
      <IA key="ie-org-list" {...props} />
      <BA key="be-org-list" {...props} />
      <CA key="ca-org-list" {...props} />
      <RG key="rg-org-list" {...props} />
      <SG key="sg-org-list" {...props} />
    </div>);
  }
}

export default Section(APRelatedOrganizations, {
  SectionTitle: 'Related Organizations',
  useEncapsulateHeader: true,
  sID: 'APRelatedOrganizations'
});
