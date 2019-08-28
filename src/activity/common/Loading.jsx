import React, { Component } from 'react';
import PropTypes from 'prop-types';
import spinner from '../../assets/images/ajax-loader.gif';
import styles from './Loading.css';

let logger = null;

export default class Loading extends Component {
  static propTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('Loading component');
    logger.log('constructor');
  }

  render() {
    logger.log('render');
    const { translate } = this.props;
    return (
      <div className={styles.loading}>
        <span>{translate('loadingMessage')}</span>
        <img className={styles.loading_icon} alt="loading" src={spinner} />
      </div>
    );
  }
}
