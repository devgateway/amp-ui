import React, { Component, PropTypes } from 'react';
import styles from './APFundingTransactionTypeItem.css';


let logger = null;

/**
 * @author Gabriel Inchauspe
 */
class APFundingTotalItem extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    currency: PropTypes.string,
    dontFormatNumber: PropTypes.bool,
    isPercentage: PropTypes.bool,
    rawNumberToFormattedString: PropTypes.func.isRequired,
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
  };


  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP Funding total item');
    logger.debug('constructor');
  }

  render() {
    const { rawNumberToFormattedString } = this.props;
    logger.debug('render');
    // Note: dont translate the label because it might be a phrase composed by individually translated words.
    let val = (this.props.dontFormatNumber
      ? this.props.value
      : rawNumberToFormattedString(this.props.value));
    val = (this.props.isPercentage === true ? `${val}%` : val);
    return (<div className={styles.subtotal_footer}>
      <div className={styles.subtotal_footer_legend}>
        {`${this.props.label}:`}
      </div>
      <div className={styles.subtotal_footer_number}>
        {`${val}
        ${this.props.currency || ''}`}
      </div>
    </div>);
  }
}

export default APFundingTotalItem;
