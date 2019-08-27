import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section.jsx';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import styles from '../ActivityPreview.css';
import UIUtils from '../../../utils/UIUtils';

let logger = null;

/**
 * Activity Preview Structures section
 * @author Gabriel Inchauspe
 */
class APStructures extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    buildSimpleField: PropTypes.func.isRequired,
  };

  static contextTypes = {
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
  };

  static getCoordinates(structure) {
    if (structure[ActivityConstants.STRUCTURES_SHAPE] === ActivityConstants.STRUCTURES_POINT) {
      return (<div>
        <div>{structure[ActivityConstants.STRUCTURES_LATITUDE]}</div>
        <div>{structure[ActivityConstants.STRUCTURES_LONGITUDE]}</div>
      </div>);
    } else {
      return (<div>
        {structure[ActivityConstants.STRUCTURES_COORDINATES].map(c => (<div>
          <div>{c[ActivityConstants.STRUCTURES_LATITUDE]}</div>
          <div>{c[ActivityConstants.STRUCTURES_LONGITUDE]}</div>
        </div>))}
      </div>);
    }
  }

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP structures');
    logger.debug('constructor');
  }

  getCoordinates(structure) {
    const { buildSimpleField } = this.props;
    const { translate } = this.context;
    let isPoint = false;
    if (!structure[ActivityConstants.STRUCTURES_SHAPE]) {
      if (!structure[ActivityConstants.STRUCTURES_LATITUDE] || !structure[ActivityConstants.STRUCTURES_LONGITUDE]) {
        isPoint = false;
      } else {
        isPoint = true;
      }
    } else if (structure[ActivityConstants.STRUCTURES_SHAPE] === ActivityConstants.STRUCTURES_POINT) {
      isPoint = true;
    } else {
      isPoint = false;
    }
    if (isPoint) {
      const content = [];
      content.push(
        buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_LATITUDE]}`, true, null,
          false, structure));
      content.push(
        buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_LONGITUDE]}`, true, null,
          false, structure));
      return content;
    } else {
      const content = [];
      /* eslint-disable max-len */
      structure[ActivityConstants.STRUCTURES_COORDINATES].forEach(c => {
        content.push(
          <tr key={UIUtils.stringToUniqueId()}>
            <td>{buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${ActivityConstants.STRUCTURES_COORDINATES}~${[ActivityConstants.STRUCTURES_LATITUDE]}`,
              true, null, true, c, null, { noTitle: true, fieldValueClass: styles.structures_coordinates_value })}</td>
            <td>{buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${ActivityConstants.STRUCTURES_COORDINATES}~${[ActivityConstants.STRUCTURES_LONGITUDE]}`,
              true, null, true, c, null, { noTitle: true, fieldValueClass: styles.structures_coordinates_value })}</td>
          </tr>);
      });
      /* eslint-enable max-len */
      return (
        <table className={styles.structures_coordinates_table}>
          <thead>
            <tr>
              <th><span className={styles.section_field_name}>{translate('Coordinates')}</span></th>
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </table>);
    }
  }

  render() {
    const { activity, buildSimpleField } = this.props;
    if (activity[ActivityConstants.STRUCTURES]) {
      return (
        <div>{activity[ActivityConstants.STRUCTURES].sort((a, b) =>
          (a[ActivityConstants.STRUCTURES_TITLE] > b[ActivityConstants.STRUCTURES_TITLE]))
          .map(s => (
            <div key={Math.random()}>
              <div className={styles.structure_title}>{s[ActivityConstants.STRUCTURES_TITLE]}</div>
              {buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_TITLE]}`,
                true, null, false, s)}
              {buildSimpleField(`${[ActivityConstants.STRUCTURES]}~${[ActivityConstants.STRUCTURES_DESCRIPTION]}`,
                false, null, false, s)}
              {this.getCoordinates(s)}
            </div>)
          )}
        </div>
      );
    }
    return null;
  }
}

export default Section(APStructures, { SectionTitle: 'Structures',
  useEncapsulateHeader: true,
  sID: 'APStructures'
});
