import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const BLUEPAGES_PHOTO_LOOKUP = `https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/`;
// = "https://w3-pics.ibm.com/bluepages/photo/Photo.jsp?email="
// "https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/";

// This is for localhost use:
const BLUEPAGES_LOOKUP = `https://w3-dev.api.ibm.com/common/development/bluepages/email/`;

// This is to access managed BluePages API from CIO Bluemix Dedicated:
// const BLUEPAGES_LOOKUP = `https://eapim.w3ibm.mybluemix.net/common/development/bluepages/email/`;

const BLUEPAGES_LOOKUP_PRINT_USER = `/preferredFirstName&sn&jobResponsibilities`;

// e.g. http://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/mail=louise@uk.ibm.com.list,printable/bytext?preferredfirstname&sn&jobResponsibilities

/**
 * Display User Profile card - bluepages photo, first and last name, job description
 *
 * @visibleName UserProfile
 */
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      job: '',

      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.email !== this.props.email)
      this.getUserData();
  }

  handleNonIBMer() {
    console.log('User not found in IBM:', this.props.name,);
    let name = this.props.name.split(" ");
    this.setState({ firstName: name[0], lastName: name[name.length -1], job: this.props.title })
  }

  async getUserData() {
    const url = BLUEPAGES_LOOKUP + this.props.email + BLUEPAGES_LOOKUP_PRINT_USER;
    console.log('UserProfile.getUserData -> ', this.props.email, url);
    return axios.get(url, {
      headers: {
        'accept': 'application/json',
        'x-ibm-client-id': '409b6041-6b3a-496c-8c5a-28bb09b6a4f2'
      }
    })
      .then((response) => {
        this.setState({
          data: response.data.search || [],
          loading: false,
          error: null
        });    
        response.data.search.entry[0] && response.data.search.entry[0].attribute ? response.data.search.entry[0].attribute.forEach((attr) => {
          switch (attr.name) {
            case "preferredFirstName":
              this.setState({ firstName: attr.value[0] })
              break;
            case "sn":
              this.setState({ lastName: attr.value[0] })
              break;
            case "jobResponsibilities":
              this.setState({ job: attr.value[0] })
              break;
            default: break;
          }
        }) : this.handleNonIBMer();
      }).catch((error) => {
        console.log('UserProfile.getUserData ERROR:', error);
        this.setState({
          data: [],
          loading: false,
          error: error
        });
      });
  }

  render() {
    return (
      <div className="display-flex padding-top-5" >
        <img src={this.props.email.endsWith("ibm.com") ? BLUEPAGES_PHOTO_LOOKUP + this.props.email : this.props.photoUrl ? this.props.photoUrl : "https://w3.ibm.com/bluepages/images/profile.jpg"}
          alt=""
          className="user-profile" >
        </img>
        <div className="user-report panel-text-small">
          <ul>
            <li><a className="email" href={"mailto:" + this.props.email}><strong>{this.state.firstName + " " + this.state.lastName}</strong></a></li>
            <li>{this.state.job}</li>
          </ul>
        </div>
      </div>
    );
  }
}

/**
 * Type checking
 */
UserProfile.propTypes = {
  email: PropTypes.string.isRequired,
}

/**
* Default values
*/
UserProfile.defaultProps = {
}

export default UserProfile;
