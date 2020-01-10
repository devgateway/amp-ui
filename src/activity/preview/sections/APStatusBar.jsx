import React, { Component, PropTypes } from 'react';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';

let logger = null;

/**
 * Status Bar section
 * @author Anya Marshall
 */
class APStatusBar extends Component {
  static propTypes = {
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP status bar');
    logger.debug('constructor');
  }

  render() {
    const { buildSimpleField } = this.props;
    const fieldPaths = [ActivityConstants.AMP_ID, ActivityConstants.ACTIVITY_STATUS, ActivityConstants.ACTIVITY_BUDGET];
    return (
      <div>
        {fieldPaths.map(fieldPath => buildSimpleField(fieldPath, true, null, true))}
      </div>
    );
  }
}

export default Section(APStatusBar, {
  SectionTitle: '',
  useEncapsulateHeader: false,
  sID: 'APStatusBar'
});
