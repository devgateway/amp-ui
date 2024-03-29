/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import UIUtils from '../../../../utils/UIUtils';
import Section from '../Section.jsx';
import APFundingTotalsSection from './APFundingTotalsSection.jsx';
import APFundingOrganizationSection from './APFundingOrganizationSection.jsx';
import { APProposedProjectCost } from '../APProjectCost.jsx';
import NumberUtils from '../../../../utils/NumberUtils';
import fundingStyles from './APFundingSection.css';
import APFundingHeader from './APFundingHeader.jsx';


let logger = null;

/**
 * Total Number of Fundings section
 * @author Gabriel Inchauspe
 */
class APFundingSection extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP funding section');
    logger.debug('constructor');
  }

  render() {
    logger.debug('render');
    const { DateUtils, activity, buildSimpleField, Logger } = this.props;
    const fundingList = [];
    if (activity[ActivityConstants.FUNDINGS]) {
      activity[ActivityConstants.FUNDINGS].forEach((funding) => {
        const item = (<APFundingOrganizationSection
          funding={funding} key={funding[ActivityConstants.AMP_FUNDING_ID] || UIUtils.stringToUniqueId()}
          buildSimpleField={buildSimpleField}
          DateUtils={DateUtils} />);
        fundingList.push(item);
      });
    }
    return (<div className={fundingStyles.container}>
      <div className={fundingStyles.byline}>{NumberUtils.getAmountsInThousandsMessage()}</div>
      <APProposedProjectCost
        sectionPath={ActivityConstants.PPC_AMOUNT}
        titleClass={fundingStyles.section_header} />
      <APFundingHeader activity={activity} buildSimpleField={buildSimpleField} Logger={Logger} />
      <div>{fundingList}</div>
      <div><APFundingTotalsSection /></div>
      <div className={fundingStyles.clear} />
    </div>);
  }
}
export default Section(APFundingSection, { SectionTitle: 'Funding',
  useEncapsulateHeader: true,
  sID: 'APFunding'
});
