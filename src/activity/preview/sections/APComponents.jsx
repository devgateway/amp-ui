import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import FieldPathConstants from '../../../utils/FieldPathConstants';
import FieldsManager from '../../../modules/field/FieldsManager';
import NumberUtils from '../../../utils/NumberUtils';
import Section from './Section.jsx';
import styles from './APComponents.css';
import CurrencyRatesManager from '../../../modules/util/CurrencyRatesManager';
import APField from '../components/APField.jsx';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APComponents extends Component {
  static _extractYear(dateString) {
    return new Date(Date.parse(dateString)).getFullYear();
  }

  static _extractGroups(funding, trnType, currencyRatesManager, currency) {
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

  static _buildDetail(component, translate, currencyRatesManager, currency, keyTxt = 'keyTxt') {
    const content = [];
    FieldPathConstants.TRANSACTION_TYPES.forEach(trnType => {
      const fundings = component[trnType];
      if (fundings && fundings.length) {
        const groups = APComponents._extractGroups(fundings, trnType, currencyRatesManager, currency);
        groups.forEach(group => {
          // TODO: Translate a single phrase instead of a combination of words (AMPOFFLINE-477).
          content.push(<tr id={group.amount} key={group.amount}>
            <td>{group.year}</td>
            <td>{translate(`${group.adjType.value} ${group.trnType}`)}</td>
            <td>{`${NumberUtils.rawNumberToFormattedString(group.amount)} ${currency}`}</td>
          </tr>);
        });
      }
    });
    const table = (<div id={keyTxt} key={keyTxt}>
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
    activityFieldsManager: PropTypes.instanceOf(FieldsManager),
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
    if (this.props.activity[ActivityConstants.COMPONENTS]
      && this.props.activity[ActivityConstants.COMPONENTS].length > 0) {
      let toCheckFieldPath;
      const keyTxt = 'key';
      let keyNumber = -1;
      this.props.activity[ActivityConstants.COMPONENTS].forEach((component) => {

        toCheckFieldPath = `${ActivityConstants.COMPONENTS}~${ActivityConstants.COMPONENT_TITLE}`;
        if (this.props.activityFieldsManager.isFieldPathEnabled(toCheckFieldPath)) {
          keyNumber++;
          content.push(<div className={styles.title} id={keyTxt + keyNumber} key={keyTxt + keyNumber}>
            {this.context.activityFieldsManager.getValue(component, ActivityConstants.COMPONENT_TITLE, PossibleValuesManager.getOptionTranslation)}
          </div>);
        }

        if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TYPE)) {
          keyNumber++;
          content.push(<div className={styles.title} id={keyTxt + keyNumber} key={keyTxt + keyNumber}>{component[ActivityConstants.COMPONENT_TYPE].value}</div>);
        }

        toCheckFieldPath = `${ActivityConstants.COMPONENTS}~${ActivityConstants.COMPONENT_DESCRIPTION}`;
        if (this.props.activityFieldsManager.isFieldPathEnabled(toCheckFieldPath)) {
          keyNumber++;
          content.push(<div id={keyTxt + keyNumber} key={keyTxt + keyNumber}>
            {this.context.activityFieldsManager.getValue(component, ActivityConstants.COMPONENT_DESCRIPTION, PossibleValuesManager.getOptionTranslation)}
          </div>);
        }

        keyNumber++;
        content.push(<div className={styles.title} id={keyTxt + keyNumber} key={keyTxt + keyNumber}>{this.props.translate('Finance of the component')}</div>);

        keyNumber++;
        content.push(APComponents._buildDetail(component, this.props.translate, this.context.currencyRatesManager
          , currency, keyTxt + keyNumber));

        keyNumber++;
        content.push(<hr id={keyTxt + keyNumber} key={keyTxt + keyNumber} />);
      });
    } else {
      content.push(this.renderNoComponents());
    }
    return content;
  }

  renderNoComponents() {
    const { translate } = this.props;
    return (
      <div className={styles.nodata} key="cp-no-data">{translate('No Data')}</div>
    );
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
