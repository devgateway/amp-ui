import React, { Component, PropTypes } from 'react';
import ActivityConstants from '../../../../modules/util/ActivityConstants';
import FeatureManagerConstants from '../../../../modules/util/FeatureManagerConstants';
import CurrencyRatesManager from '../../../../modules/util/CurrencyRatesManager';
import FeatureManager from '../../../../modules/util/FeatureManager';
import UIUtils from '../../../../utils/UIUtils';
import APLabel from '../../components/APLabel.jsx';
import APFundingTotalItem from './APFundingTotalItem.jsx';
import APFundingMTEFItem from './APFundingMTEFItem.jsx';
import styles from './APFundingTransactionTypeItem.css';
import stylesMTEF from './APFundingMTEF.css';
import WorkspaceConstants from '../../../../utils/constants/WorkspaceConstants';


let logger = null;

class APFundingMTEFSection extends Component {
  static contextTypes = {
    currencyRatesManager: PropTypes.instanceOf(CurrencyRatesManager),
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    activityContext: PropTypes.shape({
      activityStatus: PropTypes.string,
      userTeamMember: PropTypes.number.isRequired,
      [WorkspaceConstants.ACCESS_TYPE]: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_COMPUTED]: PropTypes.bool.isRequired,
      [WorkspaceConstants.CROSS_TEAM_VALIDATION]: PropTypes.bool.isRequired,
      teamMemberRole: PropTypes.number.isRequired,
      workspaceCurrency: PropTypes.string.isRequired,
      [WorkspaceConstants.IS_PRIVATE]: PropTypes.bool.isRequired,
      calendar: PropTypes.object,
      workspaceLeadData: PropTypes.string
    }).isRequired,
  };

  static propTypes = {
    funding: PropTypes.object.isRequired,
    DateUtils: PropTypes.func.isRequired,
    rawNumberToFormattedString: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP Funding MTEF section');
  }
  drawTable(mtef, currency) {
    const { rawNumberToFormattedString, DateUtils } = this.props;
    return (<table className={styles.funding_table}>
      {<APFundingMTEFItem
        item={mtef} key={UIUtils.numberRandom()} wsCurrency={currency}
        rawNumberToFormattedString={rawNumberToFormattedString}
        DateUtils={DateUtils}
      />}
    </table>);
  }

  drawSubTotal(funding, currency, type) {
    const { translate } = this.context;
    let subtotal = 0;
    const { rawNumberToFormattedString } = this.props;
    funding[ActivityConstants.MTEF_PROJECTIONS].forEach(mtef => {
      if (mtef[ActivityConstants.PROJECTION].value === type) {
        subtotal += this.context.currencyRatesManager.convertAmountToCurrency(mtef[ActivityConstants.AMOUNT],
          mtef[ActivityConstants.CURRENCY].value, mtef[ActivityConstants.PROJECTION_DATE], null, currency);
      }
    });
    return (<div>
      <APFundingTotalItem
        value={subtotal}
        label={`${translate(`Subtotal MTEF Projections ${type}`)}`.toUpperCase()}
        currency={currency}
        key={Math.random()}
        rawNumberToFormattedString={rawNumberToFormattedString}

      />
    </div>);
  }

  render() {
    logger.debug('render');
    const { funding } = this.props;
    const { translate, activityContext } = this.context;
    const types = [ActivityConstants.PIPELINE, ActivityConstants.PROJECTION];
    const currency = activityContext.workspaceCurrency;
    if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.MTEF_PROJECTIONS)
      && funding[ActivityConstants.MTEF_PROJECTIONS] && funding[ActivityConstants.MTEF_PROJECTIONS].length > 0) {
      const content = [];
      types.forEach(type => {
        let show = false;
        funding[ActivityConstants.MTEF_PROJECTIONS].forEach(mtef => {
          if (mtef[ActivityConstants.PROJECTION].value === type) {
            show = true;

            content.push(<div>
              {this.drawTable(mtef, currency)}
            </div>);
          }
        });
        if (show) {
          content.push(this.drawSubTotal(funding, currency, type));
        }
      });
      return (<div>
        <div className={stylesMTEF.header}>
          <APLabel
            label={translate('MTEF Projections')} labelClass={styles.header} key={Math.random()}
          />
        </div>
        {content}
      </div>);
    } else {
      return null;
    }
  }
}

export default APFundingMTEFSection;
