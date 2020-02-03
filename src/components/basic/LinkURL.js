import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

/**
 * Display an external link as href to a new page or use react-route LINK component if internal to app 
 *
 * @visibleName LinkURL
 */
class LinkURL extends Component {
  render() {
    console.log("​LinkURL -> render -> this.props", this.props);
    return (
      this.props.link && this.props.link.length > 0 ? (this.props.link.startsWith("/") ? (
        <Link to={this.props.link} className="display-flex" >
          <span className={this.props.iconCss}/>          
          {this.props.label}
        </Link>
      ) : (
          <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="display-flex" >
            <span className={this.props.iconCss}/>
            {this.props.label}
          </a>
        )) :
        <div className="display-flex" >
          <span className={this.props.iconCss} />
          {this.props.label}
        </div>
    );
  }
}

/**
 * Type checking
 */
LinkURL.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  iconCss: PropTypes.string
}
/**
* Default values
*/
LinkURL.defaultProps = {
  label: '',
  iconCss: '',
  link: ''
}

export default LinkURL;
