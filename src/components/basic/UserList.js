import React, { Component } from 'react';
import UserProfile from './UserProfile';
import PropTypes from 'prop-types';

/**
 * Display a list of User Profile cards.
 * Email property is required, name and title are optional and used if email not found in IBM
 *
 * @visibleName UserList
 */
class UserList extends Component {

    render() {
        return (
            <div className="tile-container" >
                <div>
                    {this.props.users ? this.props.users.map((user, index) => {
                        return (
                            <div className="padding-bottom" key={"user_" + index + "_" + user.email}>
                                <UserProfile key={"user_" + index + "_" + user.email} email={user.email} name={user.name} title={user.title} photoUrl={user.photoUrl} />
                            </div>
                        )
                    })
                        : ""}
                </div>
            </div>
        )
    }
}

/**
 * Type checking
 */
UserList.propTypes = {
    users: PropTypes.array,
}
/**
* Default values
*/
UserList.defaultProps = {
}

export default UserList;