import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Display ImageCss 
 *
 * @visibleName ImageCss
 */
class ImageCss extends Component {
  render() {
    console.log("​ImageCss -> render -> this.props", this.props);
    const css = this.props.outline ? "ds-bg-light ds-shadow-floating "
      : "ds-bg-light "
    return (      
        <div className="ds-flex-grow-1 ds-flex-nowrap ds-pad-1">
          <div className={css + this.props.imageCss} />
        </div>
    );
  }
}

/**
 * Type checking
 */
ImageCss.propTypes = {
  imageCss: PropTypes.string.isRequired,
  outline: PropTypes.bool
}
/**
* Default values
*/
ImageCss.defaultProps = {
  imageCss: '',
  outline: false
}

export default ImageCss;
