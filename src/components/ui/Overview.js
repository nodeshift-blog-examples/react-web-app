import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Separator from '../basic/Separator';
import IconTitleSummary from '../basic/IconTitleSummary';
import Summary from '../basic/Summary';
import URLList from '../basic/URLList';
import UserList from '../basic/UserList';

/**
 * Display Overview component
 *
 * @visibleName Overview
 */
class Overview extends Component {
  render() {
    return (
      <div className="padding-top padding-left padding-right">
        <IconTitleSummary {...this.props} />
        <Separator />
        {this.props.description ?
          <div className=" panel-text-small padding-bottom">
            <Summary data={this.props.description} />
          </div>
          : ""}
        {this.props.links && this.props.links.length > 0 ?
          <URLList {...this.props} links={this.props.links} />
          : ""
        }
        {this.props.users && this.props.users.length > 0 ?
          <UserList {...this.props} users={this.props.users} />
          : ""
        }

      </div>
    );
  }
}

/**
 * Type checking
 */
Overview.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,

  title: PropTypes.string,
  subTitle: PropTypes.string,
  titlePrefix: PropTypes.string,

  summary: PropTypes.string,

  description: PropTypes.string,

  links: PropTypes.array,
  users: PropTypes.array,
}
/**
* Default values
*/
Overview.defaultProps = {
  color: "green",
  icon: "help",
  size: "32",

  title: '',
  subTitle: '',
  titlePrefix: '',

  summary: '',
}

export default Overview;
