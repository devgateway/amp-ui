import React, { Component, PropTypes } from 'react';
import Section from './Section.jsx';
import styles from '../ActivityPreview.css';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import Tablify from '../components/Tablify.jsx';

let logger = null;

/**
 * Activity Preview Planning section
 * @author Nadejda Mandrescu
 */
class APPlanning extends Component {
  static propTypes = {
    buildSimpleField: PropTypes.func.isRequired,
    Logger: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP Planning');
    logger.log('constructor');
  }

  render() {
    let content = [];
    content.push(this.props.buildSimpleField(ActivityConstants.LINE_MINISTRY_RANK, true, new Set([-1]), false));
    const fieldPaths = [ActivityConstants.ORIGINAL_COMPLETION_DATE, ActivityConstants.ACTUAL_START_DATE,
      ActivityConstants.ACTUAL_COMPLETION_DATE, ActivityConstants.PROPOSED_START_DATE,
      ActivityConstants.ACTUAL_APPROVAL_DATE, ActivityConstants.PROPOSED_COMPLETION_DATE,
      ActivityConstants.PROPOSED_APPROVAL_DATE];
    const showIfNotAvailable = new Set([ActivityConstants.ORIGINAL_COMPLETION_DATE,
      ActivityConstants.ACTUAL_START_DATE, ActivityConstants.ACTUAL_COMPLETION_DATE,
      ActivityConstants.PROPOSED_START_DATE, ActivityConstants.ACTUAL_APPROVAL_DATE,
      ActivityConstants.PROPOSED_COMPLETION_DATE, ActivityConstants.PROPOSED_APPROVAL_DATE]);
    content = content.concat(fieldPaths.map(fieldPath =>
      this.props.buildSimpleField(fieldPath, showIfNotAvailable.has(fieldPath), null, false)
    ).filter(data => data !== undefined));

    const tableContent = Tablify.addRows(content, ActivityConstants.ACTIVITY_PLANNING_COLS);
    return <div><table className={styles.box_table}><tbody>{tableContent}</tbody></table></div>;
  }
}

export default Section(APPlanning, { SectionTitle: 'Planning',
  useEncapsulateHeader: true,
  sID: 'APPlanning'
});
