import React, { Component, PropTypes } from 'react';
import styles from './APActor.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import ActivityConstants from '../../../../modules/util/ActivityConstants';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
export default class APActors extends Component {
  static propTypes = {
    actor: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
  };


  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP actor');
    logger.log('constructor');
  }

  render() {
    /* eslint-disable max-len */
    if (this.props.activityFieldsManager.isFieldPathEnabled(`${ActivityConstants.LINE_MINISTRY_OBSERVATIONS}~${ActivityConstants.MEASURES}~${ActivityConstants.ACTORS}`)) {
      return (<div className={styles.actors}>{this.props.actor.name || ''}</div>);
    } else {
      return null;
    }
    /* eslint-enable max-len */
  }
}
