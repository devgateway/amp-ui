/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import UIUtils from '../../../../utils/UIUtils';
import Section from '../Section.jsx';
import APFundingTotalsSection from './APFundingTotalsSection.jsx';
import APRegionalFundingOrganizationSection from './APRegionalFundingOrganizationSection.jsx';
import NumberUtils from '../../../../utils/NumberUtils';
import fundingStyles from './APFundingSection.css';


let logger = null;

/**
 * Total Number of Fundings section
 * @author Gabriel Inchauspe
 */
class APRegionalFundingSection extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP regional funding section');
    logger.debug('constructor');
  }

  render() {
    logger.debug('render');
    const { DateUtils, activity } = this.props;
    const fundingList = [];
    if (activity[ActivityConstants.FUNDINGS]) {
      activity[ActivityConstants.FUNDINGS].forEach((funding) => {
        const item = (<APRegionalFundingOrganizationSection
          funding={funding} key={funding[ActivityConstants.AMP_FUNDING_ID] || UIUtils.stringToUniqueId()}
          buildSimpleField={this.props.buildSimpleField}
          DateUtils={DateUtils} />);
        fundingList.push(item);
      });
    }
    return (<div className={fundingStyles.container}>
      <div className={fundingStyles.byline}>{NumberUtils.getAmountsInThousandsMessage()}</div>
      <div>{fundingList}</div>
      <div><APFundingTotalsSection /></div>
      <div className={fundingStyles.clear} />
    </div>);
  }
}
export default Section(APRegionalFundingSection, { SectionTitle: 'Regional Funding',
  useEncapsulateHeader: true,
  sID: 'APRegionalFunding'
});
