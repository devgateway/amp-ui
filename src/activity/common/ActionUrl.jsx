import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './CommonStyles.css';

let logger = null;
/**
 * Action Url
 *
 * @author Nadejda Mandrescu
 */
export default class ActionUrl extends Component {
  static propTypes = {
    urlContent: PropTypes.any.isRequired,
    href: PropTypes.string, // external URL
    navUrl: PropTypes.string, // navigation link
    onClick: PropTypes.func, // a custom onClick action
    tooltip: PropTypes.string,
    openExternal: PropTypes.func.isRequired,
  };
  static contextTypes = {
    urlUtils: PropTypes.object.isRequired,
    Logger: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    const { Logger } = this.context;
    logger = new Logger('AP ActionUrl');
  }

  renderExternalLink() {
    const { href, urlContent, openExternal } = this.props;
    const { urlUtils } = this.context;
    logger.debug(`renderExternalLink ${href}`);
    return (<a
      className={styles.url}
      onClick={() => {
        if (urlUtils && href && href.indexOf('?') > 0) {
          const splitUrl = href.split('?');
          const params = splitUrl[1].split('=');
          const paramsMap = {};
          paramsMap[params[0]] = params[1];
          urlUtils.redirectExternalLink('GET', splitUrl[0], paramsMap);
        } else {
          return openExternal(href);
        }
      }}>{urlContent}</a>);
  }

  renderCustomAction() {
    const { onClick, urlContent } = this.props;
    return <span className={styles.action} onClick={onClick}>{urlContent}</span>;
  }

  renderNavigationLink() {
    const { navUrl, urlContent } = this.props;
    return <Link to={navUrl}>{urlContent}</Link>;
  }

  renderNoAction() {
    const { urlContent } = this.props;
    return <span className={styles.noAction}>{urlContent}</span>;
  }

  render() {
    const { href, onClick, navUrl, tooltip } = this.props;
    let content;
    if (href) {
      content = this.renderExternalLink();
    } else if (onClick) {
      content = this.renderCustomAction();
    } else if (navUrl) {
      content = this.renderNavigationLink();
    }
    if (content) {
      if (tooltip) {
        const tooltipElement = <Tooltip id="tooltipId">{tooltip}</Tooltip>;
        content = (
          <OverlayTrigger placement="right" overlay={tooltipElement}>
            {content}
          </OverlayTrigger>
        );
      }
    } else {
      content = this.renderNoAction();
    }
    return content;
  }
}
