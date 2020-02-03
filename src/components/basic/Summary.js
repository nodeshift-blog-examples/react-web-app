import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';


/**
 * Display formatted Summary preserving HTML tags
 *
 * @visibleName Summary
 */
class Summary extends Component {
  render() {
    console.log("​Summary -> render -> this.props", this.props);
    return (
      this.props.data ? <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.data, { USE_PROFILES: { html: true } }) }} /> : ""
      );
  }
}

/**
 * Type checking
 */
Summary.propTypes = {
  data: PropTypes.string,
}
/**
* Default values
*/
Summary.defaultProps = {
}

export default Summary;
