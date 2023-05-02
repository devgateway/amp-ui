import React, { Component, PropTypes } from 'react';
import Section from './Section.jsx';
import APPercentageList from '../components/APPercentageList.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from './APSector.css';
import FieldsManager from '../../../modules/field/FieldsManager';

const PrimarySectorList = APPercentageList(ActivityConstants.PRIMARY_SECTORS, ActivityConstants.SECTOR,
  ActivityConstants.SECTOR_PERCENTAGE, 'Primary Sector');
const SecondarySectorList = APPercentageList(ActivityConstants.SECONDARY_SECTORS, ActivityConstants.SECTOR,
  ActivityConstants.SECTOR_PERCENTAGE, 'Secondary Sector');

let logger = null;

const getItemTitle = (item) => item[ActivityConstants.SECTOR][ActivityConstants.ANCESTOR_VALUES]
  .reverse()
  .reduce((acc, name) => (
    <ul style={{ paddingLeft: '10px' }}>
      <li>
        {name}
        {acc}
      </li>
    </ul>), null);

/**
 * Activity Preview Sector section
 * @author Nadejda Mandrescu
 */
class APSector extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    rtl: PropTypes.bool,
    Logger: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP sector');
    logger.log('constructor');
  }

  render() {
    return (<div className={styles.sector_container}>
      <div className={styles.primary_sector}>
        <PrimarySectorList key="primary-programs-list" getItemTitle={getItemTitle} {...this.props} />
      </div>
      <div className={styles.secondary_sector}>
        <SecondarySectorList key="secondary-programs-list" getItemTitle={getItemTitle} {...this.props} />
      </div>
    </div>);
  }
}

export default Section(APSector, { SectionTitle: 'Sectors',
  useEncapsulateHeader: true,
  sID: 'APSector'
});
