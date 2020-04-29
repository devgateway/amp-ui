/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActivityConstants from '../../../../modules/util/ActivityConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import FieldPathConstants from '../../../../utils/FieldPathConstants';
import Tablify from '../../components/Tablify.jsx';
import styles from './APRegionalFundingLocationSection.css';
import FieldsManager from '../../../../modules/field/FieldsManager';
import NumberUtils from '../../../../utils/NumberUtils';

let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APRegionalFundingLocationSection extends Component {
  static propTypes = {
    region: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func.isRequired,
    activity: PropTypes.object.isRequired,
    wsCurrency: PropTypes.string.isRequired,
  };

  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      effectiveCurrency: PropTypes.string.isRequired,
      reorderFundingItemId: PropTypes.number.isRequired
    }).isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP regional funding location section');
    logger.debug('constructor');
  }

  _buildFieldTable(field) {
    const content = [];
    const { buildSimpleField, region } = this.props;
    content.push(buildSimpleField(field, true, null, false, region));
    return Tablify.addRows(content, 1);
  }

  _buildFundingDetailSection() {
    const { activityFieldsManager, translate, currencyRatesManager } = this.context;
    const { activity, region, DateUtils, wsCurrency } = this.props;
    const transactions = [];
    const path = 'regional_';
    FieldPathConstants.TRANSACTION_TYPES.forEach(tt => {
      let row = 0;
      if (activityFieldsManager.isFieldPathEnabled(path + tt) && activity[path + tt]) {
        const fundings = activity[path + tt].filter(rf => rf[ActivityConstants.REGION_LOCATION].id === region.location.id);
        fundings.sort((i, j) => (i[ActivityConstants.ADJUSTMENT_TYPE].value > j[ActivityConstants.ADJUSTMENT_TYPE].value ? 1 : 0))
          .forEach(i => {
            const convertedAmount = currencyRatesManager.convertTransactionAmountToCurrency(i, wsCurrency);
            transactions.push(
              <tr className={styles.row}>
                {(row === 0) ? <td rowSpan={fundings.length} className={styles.left_text}>{translate(tt).toUpperCase()}</td> : null}
                <td className={styles.left_text}>{translate(i[ActivityConstants.ADJUSTMENT_TYPE].value)}</td>
                <td className={styles.right_text}>
                  {DateUtils.createFormattedDate(i[ActivityConstants.TRANSACTION_DATE])}
                </td>
                <td className={styles.right_text}>
                  {`${NumberUtils.rawNumberToFormattedString(convertedAmount)} ${wsCurrency}`}
                </td>
              </tr>);
            row++;
          });
      }
    });
    return transactions;
  }

  render() {
    logger.debug('render');
    const { region } = this.props;
    return (<div>
      <div className={styles.section_header}>{region.location.value}</div>
      <div className={styles.funding_detail}>
        <table className={styles.funding_table}>
          <tbody>
            {this._buildFundingDetailSection()}
          </tbody>
        </table>
      </div>
    </div>);
  }
}

export default APRegionalFundingLocationSection;
