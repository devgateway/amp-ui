import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionUrl from './ActionUrl.jsx';

/**
 * Action Icon
 *
 * @author Nadejda Mandrescu
 */
export default class ActionIcon extends Component {
  static propTypes = {
    iconClassName: PropTypes.string,
    iconElement: PropTypes.object,
    href: PropTypes.string, // external URL
    navUrl: PropTypes.string, // navigation link
    onClick: PropTypes.func, // a custom onClick action
    tooltip: PropTypes.string,
    openExternal: PropTypes.func.isRequired,
  };

  getIcon() {
    const { iconElement, iconClassName } = this.props;
    if (iconElement) {
      return iconElement;
    }
    return <span className={iconClassName} />;
  }

  render() {
    const { href, onClick, navUrl, tooltip, openExternal } = this.props;
    return (<ActionUrl
      urlContent={this.getIcon()} onClick={onClick} href={href} navUrl={navUrl} tooltip={tooltip}
      openExternal={openExternal} />);
  }
}
