import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './APMeasure.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import APActor from './APActor.jsx';
import UIUtils from '../../../../../src/utils/UIUtils';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
export default class APMeasures extends Component {
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    measure: PropTypes.object.isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    DateUtils: PropTypes.func,
  };

  /* eslint-enable react/no-unused-prop-types */

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP measure');
    logger.debug('constructor');
  }

  _buildMeasure() {
    const { Logger, translate, DateUtils } = this.props;
    const content = [];
    let date = '';
    /* eslint-disable max-len */
    if (this.props.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.MEASURE_DATE}`)) {
      date = ` ${DateUtils.createFormattedDate(this.props.measure[ActivityConstants.MEASURE_DATE])}`;
    }
    /* eslint-enable max-len */
    const measure = `${this.props.measure.name || ''}${date}`;
    content.push(<div className={styles.measures} key={UIUtils.stringToUniqueId()}>{measure}</div>);
    this.props.measure[ActivityConstants.ACTORS].forEach((actor) => {
      content.push(
        <APActor
          key={UIUtils.stringToUniqueId()} activityFieldsManager={this.props.activityFieldsManager} actor={actor}
          measure={measure} translate={translate} Logger={Logger} />);
    });
    return content;
  }

  render() {
    /* eslint-disable max-len */
    if (this.props.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}`)) {
      return <div>{this._buildMeasure()}</div>;
    } else {
      return null;
    }
    /* eslint-enable max-len */
  }
}
