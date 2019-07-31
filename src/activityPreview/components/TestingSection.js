import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestAPField from './TestAPField';

export default class TestingSection extends Component {
  render() {
    return (
      <div>
        <h2>testing component</h2>
        <div>
          test translation: `DESKTOP = {this.props.translate('DESKTOP')}`
        </div>
        <div>
          test APField:
          <TestAPField ampLogger={this.props.ampLogger} translate={this.props.translate} />
        </div>
      </div>);
  }
}
TestingSection.propTypes = {
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};
