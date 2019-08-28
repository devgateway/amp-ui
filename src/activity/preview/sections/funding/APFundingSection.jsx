/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import UIUtils from '../../../../utils/UIUtils';
import Section from '../Section.jsx';
import APFundingTotalsSection from './APFundingTotalsSection.jsx';
import APFundingOrganizationSection from './APFundingOrganizationSection.jsx';
import { APProposedProjectCost } from '../APProjectCost.jsx';
import fundingStyles from './APFundingSection.css';


let logger = null;

/**
 * Total Number of Fundings section
 * @author Gabriel Inchauspe
 */
class APFundingSection extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
    getAmountsInThousandsMessage: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP funding section');
    logger.debug('constructor');
  }

  render() {
    logger.debug('render');
    const { DateUtils, rawNumberToFormattedString, getAmountsInThousandsMessage } = this.props;
    const fundingList = [];
    if (this.props.activity.fundings) {
      this.props.activity.fundings.forEach((funding) => {
        const item = (<APFundingOrganizationSection
          funding={funding} key={funding[ActivityConstants.AMP_FUNDING_ID] || UIUtils.stringToUniqueId()}
          buildSimpleField={this.props.buildSimpleField}
          DateUtils={DateUtils}


          rawNumberToFormattedString={rawNumberToFormattedString}
        />);
        fundingList.push(item);
      });
    }
    return (<div className={fundingStyles.container}>
      <div className={fundingStyles.byline}>{getAmountsInThousandsMessage()}</div>
      <APProposedProjectCost
        sectionPath={ActivityConstants.PPC_AMOUNT}
        titleClass={fundingStyles.section_header}
        rawNumberToFormattedString={rawNumberToFormattedString}
      />
      <div>{fundingList}</div>
      <div><APFundingTotalsSection


        rawNumberToFormattedString={rawNumberToFormattedString} /></div>
      <div className={fundingStyles.clear} />
    </div>);
  }
}
export default Section(APFundingSection, { SectionTitle: 'Funding',
  useEncapsulateHeader: true,
  sID: 'APFunding'
});