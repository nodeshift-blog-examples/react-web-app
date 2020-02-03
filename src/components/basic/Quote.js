import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Display Quote from quote object (e.g.  
 *  quote: {
 *   text: "Hello",
 *   link: {
 *     label: "someone",
 *     url: "http://my_link.com",
 *   }
 * }
 *
 * @visibleName Quote
 */
class Quote extends Component {

  render() {
    console.log(this.props);
    return (
      this.props.quote.text ? 
      <div className="display-block padding-all">
        <p className="block-quote text-align-center">
          {this.props.quote.text}
        </p>
        {this.props.quote.link ? 
        <p className="ds-text-small text-align-center">
          - <span className="ds-text-citation ds-text-small">
            <a target="_blank" rel="noopener noreferrer" href={this.props.quote.link.url}>
              {this.props.quote.link.label}
            </a>
          </span>
        </p>
        : ""}
      </div>
      : "" 
    );
  }
}

/**
 * Type checking
 */
Quote.propTypes = {
  quote: PropTypes.object.isRequired,
}
/**
* Default values
*/
Quote.defaultProps = {
  quote: {},
}

export default Quote;
