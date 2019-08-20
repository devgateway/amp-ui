import React, { Component, PropTypes } from 'react';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import Section from './Section.jsx';

let logger = null;

/**
 * Total Number of Funding Sources section
 * @author Gabriel Inchauspe
 */
class APFundingSources extends Component {
  static propTypes = {
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP funding sources');
    logger.log('constructor');
  }

  render() {
    const content = this.props.buildSimpleField(ActivityConstants.TOTAL_NUMBER_OF_FUNDING_SOURCES, true, null, true);
    return (<div>{content}</div>);
  }
}
export default Section(APFundingSources, { SectionTitle: 'Funding Sources',
  useEncapsulateHeader: true,
  sID: 'APFundingSources'
});
