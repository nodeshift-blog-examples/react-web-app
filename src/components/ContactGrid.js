import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './basic/UserProfile';
import IconTitle from './basic/IconTitle';
import Separator from './basic/Separator';
import Summary from './basic/Summary';

const sf = require('./SharedFunctions');

/**
 * Display list of contacts
 *
 * @visibleName ContactGrid
 */
class ContactGrid extends Component {

  render() {
    // var leaders = this.props.tag ? sf.filterDataByTag(this.props.data, this.props.tagLeader) : this.props.data;
    var users = this.props.tag ? sf.filterDataByTag(this.props.data, this.props.tag) : this.props.data;
    console.log("​ContactGrid -> render -> users", users, users.length);

    return (
      <div>
        <IconTitle title={this.props.title} icon={this.props.imageCss} color={this.props.iconColor} />
        {this.props.summary ?
          <div>
            <Separator />

            <p className=" panel-text-small">
              <Summary data={this.props.summary} />
            </p>
          </div>
          : ""}
        <Separator />
        <div className="tile-container" >
          <div>
            {users ? users.map((user, index) => {
              return (
                <UserProfile key={"user_" + index} email={user.email} full_name={user.full_name} job_title={user.job_title} />
              )
            })
              : <h1>Loading...</h1>}
          </div>
        </div>
      </div>

    );
  }
}

/**
 * Type checking
 */
ContactGrid.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  data: PropTypes.array.isRequired,
  tag: PropTypes.string,
  tagLeader: PropTypes.string,
  width: PropTypes.string,
  iconColor: PropTypes.string,
  iconCss: PropTypes.string,
}
/**
* Default values
*/
ContactGrid.defaultProps = {
  title: '',
  summary: '',
  data: [],
  tag: '',
  iconColor: '',
  iconCss: 'bx--icon-team',
  tagLeader: 'owner'
}

export default ContactGrid;
