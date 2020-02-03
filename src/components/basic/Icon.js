import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconLabelLink from './IconLabelLink'

/**
 * Display formatted icon with an optional link to an internal/external URL.
 * This is a simple helper function which redirects to IconLabelLink
 *
 * @visibleName Icon
 */
class Icon extends Component {
  render() {
    console.log("​Icon -> render -> this.props", this.props);
    return (
      <IconLabelLink {...this.props} />
      );
  }
}

/**
 * Type checking
 */
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}
/**
* Default values
*/
Icon.defaultProps = {
  color: "blue",
  size: "32",
}

export default Icon;
