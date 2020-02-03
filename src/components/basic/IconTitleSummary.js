import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconTitle from './IconTitle';
import Separator from './Separator';
import Summary from './Summary';

/**
 * Display IconTitleSummary 
 *
 * @visibleName IconTitleSummary
 */
class IconTitleSummary extends Component {

  render() {
    console.log("​IconTitleSummary -> render -> this.props", this.props)

    return (
      <div>
        {this.props.icon && this.props.title ? <IconTitle {...this.props} /> : ""}
        {this.props.summary ?
          <div>
            {this.props.noSeparator ? "" : <Separator />}
            <p className=" panel-text-small">
              <Summary data={this.props.summary} />
            </p>
          </div>
          : ""}
      </div>
    );
  }
}

/**
 * Type checking
 */
IconTitleSummary.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,

  title: PropTypes.string,
  subTitle: PropTypes.string,
  titlePrefix: PropTypes.string,

  summary: PropTypes.string,
  noSeparator: PropTypes.bool
}
/**
* Default values
*/
IconTitleSummary.defaultProps = {
  color: "blue",
  size: "32",

  title: '',
  subTitle: '',
  titlePrefix: '',
  noSeparator: false
}

export default IconTitleSummary;
