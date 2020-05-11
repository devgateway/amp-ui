import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import UIUtils from '../../../utils/UIUtils';
import { FeatureManagerConstants } from '../../../index';
import APField from '../components/APField.jsx';

let logger = null;

class APME extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP M&E');
    logger.debug('constructor');
  }

  render() {
    const { activity, buildSimpleField, translate } = this.props;
    console.error(activity.indicators);
    const indicators = [];
    activity[ActivityConstants.INDICATORS].forEach(i => {
      console.error(i);
      indicators.push(buildSimpleField(`${ActivityConstants.INDICATORS}~${ActivityConstants.INDICATOR}`,
        true, null, false, i));
      ActivityConstants.ME_SECTIONS.forEach(s => {
        indicators.push(<APField
          key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_VALUE}:`)}
          value={i[s][ActivityConstants.INDICATOR_VALUE]} inline />);
        indicators.push(<APField
          key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_DATE}:`)}
          value={i[s][ActivityConstants.INDICATOR_DATE]} inline />);
        indicators.push(<APField
          key={Math.random()} title={translate(`${s} ${ActivityConstants.INDICATOR_COMMENT}:`)}
          value={i[s][ActivityConstants.INDICATOR_COMMENT]} inline />);
      });
    });
    return <div>{indicators}</div>;
  }
}

export default Section(APME, { SectionTitle: 'M&E',
  useEncapsulateHeader: true,
  sID: 'APME'
});
