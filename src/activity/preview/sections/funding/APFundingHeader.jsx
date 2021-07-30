/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import fundingStyles from './APFundingHeader.css';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import FieldsManager from '../../../../modules/field/FieldsManager';


let logger = null;

/**
 * Header section for all funding.
 * @author Gabriel Inchauspe
 */
export default class APFundingHeader extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired
  };

  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP funding header section');
    logger.debug('constructor');
  }

  render() {
    logger.debug('render');
    const { activity, buildSimpleField } = this.props;
    if (activity[ActivityConstants.FUNDINGS]) {
      const fieldPaths = [ActivityConstants.MODALITIES];
      return (<div className={fundingStyles.container}>
        {fieldPaths.map(fieldPath => buildSimpleField(fieldPath, true))}
      </div>);
    } else {
      return null;
    }
  }
}
