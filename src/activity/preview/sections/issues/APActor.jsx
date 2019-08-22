import React, { Component, PropTypes } from 'react';
import styles from './APActor.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
export default class APActors extends Component {
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    actor: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    Logger: PropTypes.func.isRequired,
  };
  /* eslint-enable react/no-unused-prop-types */

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP actor');
    logger.log('constructor');
  }

  render() {
    /* eslint-disable max-len */
    if (this.props.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.ISSUES}~${ActivityConstants.MEASURES}~${ActivityConstants.ACTORS}`)) {
      return (<div className={styles.actors}>{this.props.actor.name || ''}</div>);
    } else {
      return null;
    }
    /* eslint-enable max-len */
  }
}
