import Constants from './utils/Constants';
import ActivityConstants from './modules/util/ActivityConstants';
import FeatureManagerConstants from './modules/util/FeatureManagerConstants';
import ErrorConstants from './utils/constants/ErrorConstants';
import FieldsManager from './modules/field/FieldsManager';
import FieldPathConstants from './utils/FieldPathConstants';
import ValueConstants from './utils/ValueConstants';
import ContactConstants from './modules/util/ContactConstants';
import CurrencyRatesManager from './modules/util/CurrencyRatesManager';
import PossibleValuesManager from './modules/field/PossibleValuesManager';
import FeatureManager from './modules/util/FeatureManager';
import APLabel from './activity/preview/components/APLabel.jsx';
import APField from './activity/preview/components/APField.jsx';
import Tablify from './activity/preview/components/Tablify.jsx';
import APPercentageField from './activity/preview/components/APPercentageField.jsx';
import APPercentageList from './activity/preview/components/APPercentageList.jsx';
import Section from './activity/preview/sections/Section.jsx';
import FundingSummary from './activity/preview/sections/FundingSummary.jsx';
import APIdentification from './activity/preview/sections/APIdentification.jsx';
import UIUtils from './utils/UIUtils';
import APPlanning from './activity/preview/sections/APPlanning.jsx';
import AdditionalInfo from './activity/preview/sections/AdditionalInfo.jsx';
import APInternalIds from './activity/preview/sections/APInternalIds.jsx';
import APComponents from './activity/preview/sections/APComponents.jsx';
import APProgram from './activity/preview/sections/APProgram.jsx';
import APDocument from './activity/preview/sections/APDocument.jsx';
import APContact from './activity/preview/sections/APContact.jsx';
import UserConstants from './utils/constants/UserConstants';
import WorkspaceGroupsConstants from './utils/constants/WorkspaceGroupsConstants';
import WorkspaceConstants from './utils/constants/WorkspaceConstants';
import ActionIcon from './activity/common/ActionIcon.jsx';
import ActionUrl from './activity/common/ActionUrl.jsx';
import Loading from './activity/common/Loading.jsx';
import ResourceConstants from './utils/constants/ResourceConstants';
import CalendarConstants from './modules/util/CalendarConstants';
import APFundingSources from './activity/preview/sections/APFundingSources.jsx';
import APLocation from './activity/preview/sections/APLocation.jsx';
import APSector from './activity/preview/sections/APSector.jsx';
import APRelatedOrganizations from './activity/preview/sections/APRelatedOrganizations.jsx';
import { APProposedProjectCost, APRevisedProjectCost } from './activity/preview/sections/APProjectCost.jsx';
import APFundingTotalItem from './activity/preview/sections/funding/APFundingTotalItem.jsx';
import APFundingTotalsSection from './activity/preview/sections/funding/APFundingTotalsSection.jsx';
import APFundingMTEFItem from './activity/preview/sections/funding/APFundingMTEFItem.jsx';
import APFundingMTEFSection from './activity/preview/sections/funding/APFundingMTEFSection.jsx';
import APFundingItem from './activity/preview/sections/funding/APFundingItem.jsx';
import APFundingTransactionTypeItem from './activity/preview/sections/funding/APFundingTransactionTypeItem.jsx';
import APFundingOrganizationSection from './activity/preview/sections/funding/APFundingOrganizationSection.jsx';
import APFundingSection from './activity/preview/sections/funding/APFundingSection.jsx';
// TODO to remove the components that are not going to be used directly in OFFLINE or in ONLINE and are
// TODO Internal components
import APStructures from './activity/preview/sections/APStructures.jsx';
import APActor from './activity/preview/sections/issues/APActor.jsx';
import APMeasure from './activity/preview/sections/issues/APMeasure.jsx';
import APIssues from './activity/preview/sections/issues/APIssues.jsx';
import downloadImage from './assets/images/download.svg';
import ajaxLoader from './assets/images/ajax-loader.gif';
import gotoImage from './assets/images/goto_url.svg';
import APStatusBar from './activity/preview/sections/APStatusBar.jsx';
import SummaryGroup from './activity/preview/SummaryGroup.jsx';
import MainGroup from './activity/preview/MainGroup.jsx';

export {
  Constants,
  APProgram,
  ActivityConstants,
  FeatureManagerConstants,
  ErrorConstants,
  APPlanning,
  CurrencyRatesManager,
  FieldsManager,
  FieldPathConstants,
  ValueConstants,
  PossibleValuesManager,
  FeatureManager,
  APLabel,
  APField,
  Tablify,
  APPercentageField,
  APPercentageList,
  UIUtils,
  Section,
  FundingSummary,
  AdditionalInfo,
  UserConstants,
  WorkspaceConstants,
  WorkspaceGroupsConstants,
  APIdentification,
  APInternalIds,
  APComponents,
  APDocument,
  ActionIcon,
  ActionUrl,
  Loading,
  ResourceConstants,
  CalendarConstants,
  ContactConstants,
  APContact,
  APFundingSources,
  APLocation,
  APSector,
  APRelatedOrganizations,
  APProposedProjectCost,
  APRevisedProjectCost,
  APFundingTotalItem,
  APFundingTotalsSection,
  APFundingMTEFItem,
  APFundingMTEFSection,
  APFundingItem,
  APFundingTransactionTypeItem,
  APFundingOrganizationSection,
  APFundingSection,
  APStructures,
  APActor,
  APMeasure,
  APIssues,
  downloadImage,
  ajaxLoader,
  gotoImage,
  APStatusBar,
  SummaryGroup,
  MainGroup
};

export default {
  Constants,
  APProgram,
  ActivityConstants,
  FeatureManagerConstants,
  ErrorConstants,
  APPlanning,
  CurrencyRatesManager,
  FieldsManager,
  FieldPathConstants,
  ValueConstants,
  PossibleValuesManager,
  FeatureManager,
  APLabel,
  APField,
  Tablify,
  APPercentageField,
  APPercentageList,
  UIUtils,
  Section,
  FundingSummary,
  AdditionalInfo,
  UserConstants,
  WorkspaceConstants,
  WorkspaceGroupsConstants,
  APIdentification,
  APInternalIds,
  APComponents,
  APDocument,
  ActionIcon,
  ActionUrl,
  Loading,
  ResourceConstants,
  CalendarConstants,
  ContactConstants,
  APContact,
  APFundingSources,
  APLocation,
  APSector,
  APRelatedOrganizations,
  APProposedProjectCost,
  APRevisedProjectCost,
  APFundingTotalItem,
  APFundingTotalsSection,
  APFundingMTEFItem,
  APFundingMTEFSection,
  APFundingItem,
  APFundingTransactionTypeItem,
  APFundingOrganizationSection,
  APFundingSection,
  APStructures,
  APActor,
  APMeasure,
  APIssues,
  downloadImage,
  ajaxLoader,
  gotoImage,
  APStatusBar,
  SummaryGroup,
  MainGroup,
};
