import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Display Image 
 *
 * @visibleName Image
 */
class Image extends Component {
  render() {
    console.log("​Image -> render -> this.props", this.props)
    const css = this.props.outline ? "ds-bg-light ds-shadow-floating tile-height"
      : "ds-bg-light tile-height"
    return (
      this.props.filename ?
        <div className="ds-flex-grow-1 ds-flex-nowrap padding-top">
          <img src={require('../../images/' + this.props.filename)} className={css} alt={this.props.filename} ></img>
        </div>
        : ""
    );
  }
}

/**
 * Type checking
 */
Image.propTypes = {
  filename: PropTypes.string,
  outline: PropTypes.bool
}
/**
* Default values
*/
Image.defaultProps = {
  filename: '',
  outline: true
}

export default Image;
