import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import APPercentageList from '../components/APPercentageList.jsx';
import Section from './Section.jsx';
import styles from '../ActivityPreview.css';


const APLocationsList = APPercentageList(ActivityConstants.LOCATIONS, ActivityConstants.LOCATION,
  ActivityConstants.LOCATION_PERCENTAGE);

let logger = null;

/**
 * Activity Preview Locations section
 * @author Nadejda Mandrescu
 */
class APLocation extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired, // eslint-disable-line
    buildSimpleField: PropTypes.func.isRequired,
    DateUtils: PropTypes.func,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    rtl: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP location');
    logger.debug('constructor');
  }

  render() {
    let content = [<APLocationsList
      key="locations-list" {...this.props}
      percentTitleClass={styles.percent_field_name} percentValueClass={styles.percent_field_value} tablify={false} />];
    const topContent = [ActivityConstants.IMPLEMENTATION_LEVEL, ActivityConstants.IMPLEMENTATION_LOCATION]
      .map(fp => <td key={fp}>{this.props.buildSimpleField(fp, true, new Set([0]))}</td>);
    content = content.filter(el => el !== undefined);
    let table = null;
    if ((this.props.activity[ActivityConstants.IMPLEMENTATION_LEVEL]
      && this.props.activity[ActivityConstants.IMPLEMENTATION_LEVEL].value !== ActivityConstants.NATIONAL)
      || (this.props.activity[ActivityConstants.IMPLEMENTATION_LOCATION]
        && this.props.activity[ActivityConstants.IMPLEMENTATION_LOCATION].value !== ActivityConstants.COUNTRY)) {
      table = (<table className={styles.box_table2}>
        <tbody>
          <tr>
            <td>
              {content}
            </td>
          </tr>
        </tbody>
      </table>);
    }
    return (<div>
      <table className={styles.two_box_table}>
        <tbody>
          <tr>{topContent}</tr>
        </tbody>
      </table>
      {table}
    </div>);
  }
}
export default Section(APLocation, { SectionTitle: 'Location',
  useEncapsulateHeader: true,
  sID: 'APLocation'
});
