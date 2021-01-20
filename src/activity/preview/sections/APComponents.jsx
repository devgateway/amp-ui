import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldPathConstants from '../../../utils/FieldPathConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import NumberUtils from '../../../utils/NumberUtils';
import Section from './Section.jsx';
import styles from './APComponents.css';
import CurrencyRatesManager from "../../../modules/util/CurrencyRatesManager";

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APComponents extends Component {
  static _extractYear(dateString) {
    return new Date(Date.parse(dateString)).getFullYear();
  }

  static _extractGroups(funding, trnType, currencyRatesManager, currency) {
    console.log(currencyRatesManager);
    const groups = [];
    funding.forEach(f => {
      const auxFd = {
        adjType: f[ActivityConstants.ADJUSTMENT_TYPE],
        trnType,
        key: f.id,
        currency: f[ActivityConstants.CURRENCY],
        amount: f[ActivityConstants.AMOUNT],
        year: APComponents._extractYear(f[ActivityConstants.TRANSACTION_DATE])
      };
      const group = groups.find(o => o.adjType.id === auxFd.adjType.id
        && o.trnType === auxFd.trnType
        && o.year === auxFd.year);
      if (!group) {
        groups.push(auxFd);
      } else {
        // TODO: we need currency conversion here.
        currencyRatesManager.convertTransactionAmountToCurrency(auxFd, currency);
        group.amount += auxFd.amount;
      }
    });
    return groups;
  }

  static _buildDetail(component, translate, currencyRatesManager, currency) {
    const content = [];
    FieldPathConstants.TRANSACTION_TYPES.forEach(trnType => {
      const fundings = component[trnType];
      if (fundings && fundings.length) {
        const groups = APComponents._extractGroups(fundings, trnType, currencyRatesManager, currency);
        groups.forEach(group => {
          // TODO: Translate a single phrase instead of a combination of words (AMPOFFLINE-477).
          content.push(<tr>
            <td>{group.year}</td>
            <td>{translate(`${group.adjType.value} ${group.trnType}`)}</td>
            <td>{`${NumberUtils.rawNumberToFormattedString(group.amount)} ${currency}`}</td>
          </tr>);
        });
      }
    });
    const table = (<div>
      <table className={styles.table}>
        <tbody>{content}</tbody>
      </table>
    </div>);
    return table;
  }

  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  };
  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Components');
    logger.debug('constructor');
  }

  _buildComponents() {
    const content = [];
    const currency = this.context.activityContext.effectiveCurrency;
    this.props.activity[ActivityConstants.COMPONENTS].forEach((component) => {
      if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TITLE)) {
        content.push(<div className={styles.title}>{component[ActivityConstants.COMPONENT_TITLE]}</div>);
      }
      if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TYPE)) {
        content.push(<div className={styles.title}>{component[ActivityConstants.COMPONENT_TYPE].value}</div>);
      }
      if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_DESCRIPTION)) {
        content.push(<div>{component.description}</div>);
      }
      content.push(<div className={styles.title}>{this.props.translate('Finance of the component')}</div>);
      content.push(APComponents._buildDetail(component, this.props.translate, this.context.currencyRatesManager
        , currency));
      content.push(<hr />);
    });
    return content;
  }

  render() {
    return (<div>
      {this._buildComponents()}
    </div>);
  }
}

export default Section(APComponents, {
  SectionTitle: 'Components',
  sID: 'APComponents'
});
