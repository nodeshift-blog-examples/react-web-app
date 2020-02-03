import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * Display IconTitle 
 *
 * @visibleName IconTitle
 */
class IconTitle extends Component {

  render() {
    console.log("​IconTitle -> render -> this.props", this.props)
    const prefix = this.props.titlePrefix ? this.props.titlePrefix + ': ' : "";
    const formatTitle = this.props.subTitle.length > 0 ? "" : "padding-top-5";
    
    return this.props.icon ?
      (
        <h3 className="display-flex">
          <Icon icon={this.props.icon} color={this.props.color} size={this.props.size} link={this.props.link}/>
          <div className={this.props.subTitle ? "display-grid" : ""}>
            <span className={(prefix.length > 0 ? "padding-right " : "") + {formatTitle} }>{prefix} </span>
            <span className={(prefix.length > 0 ? "font-bold " : "padding-right " ) +  + {formatTitle} } > {this.props.title}</span>
            <span className="panel-text-small">{this.props.subTitle}</span>
          </div>
        </h3>
      ) : "";
  }
}

/**
 * Type checking
 */
IconTitle.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,

  title: PropTypes.string,
  subTitle: PropTypes.string,
  titlePrefix: PropTypes.string,
}
/**
* Default values
*/
IconTitle.defaultProps = {
  color: "blue",
  size: "32",

  title: '',
  subTitle: '',
  titlePrefix: '',
}

export default IconTitle;
