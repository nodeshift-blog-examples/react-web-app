import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkURL from './LinkURL';

const sf = require('../SharedFunctions');

/**
 * Display Icon with a Label and wrap with a URLLink
 *
 * @visibleName IconLabel 
 */
class IconLabelLink extends Component {
  render() {
    console.log("​IconLabelLink -> render -> this.props", this.props)
    const iconCss="display-block margin-right " + sf.getIconCSS("icon-" + this.props.icon, this.props.color, this.props.size);    
    return (
        <LinkURL iconCss={iconCss} label={this.props.label} link={this.props.link} />
      );
  }
}

/**
 * Type checking
 */
IconLabelLink.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,

  label: PropTypes.string,
}
/**
* Default values
*/
IconLabelLink.defaultProps = {
  size: "16",
  label: '',
}

export default IconLabelLink;
