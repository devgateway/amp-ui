/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import Section from '../Section.jsx';
import APRegionalFundingLocationSection from './APRegionalFundingLocationSection.jsx';
import NumberUtils from '../../../../utils/NumberUtils';
import fundingStyles from './APRRegionalFundingSection.css';

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

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired,
      reorderFundingItemId: PropTypes.number.isRequired
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.props;
    logger = new Logger('AP regional funding section');
    logger.debug('constructor');
  }

  render() {
    logger.debug('render');
    const { DateUtils, activity } = this.props;
    const { activityContext } = this.context;
    const fundingList = [];
    if (activity[ActivityConstants.LOCATIONS]) {
      activity[ActivityConstants.LOCATIONS].filter(l =>
        l.location.extra_info[ActivityConstants.IMPLEMENTATION_LOCATION_EXTRA_INFO] === ActivityConstants.REGION)
        .forEach((region) => {
          const item = (<APRegionalFundingLocationSection
            activity={activity}
            region={region} key={region.id}
            buildSimpleField={this.props.buildSimpleField}
            wsCurrency={activityContext.effectiveCurrency}
            DateUtils={DateUtils} />);
          fundingList.push(item);
        });
    }
    return (<div className={fundingStyles.container}>
      <div className={fundingStyles.byline}>{NumberUtils.getAmountsInThousandsMessage()}</div>
      <div>{fundingList}</div>
      <div className={fundingStyles.clear} />
    </div>);
  }
}

export default Section(APRegionalFundingSection, { SectionTitle: 'Regional Funding',
  useEncapsulateHeader: true,
  sID: 'APRegionalFunding'
});
