import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from '../basic/UserList';
import IconTitle from '../basic/IconTitle';
import IconLabelLink from '../basic/IconLabelLink';
import Separator from '../basic/Separator';
import Summary from '../basic/Summary';
var moment = require('moment');

/**
 * Display Resource card 
 *
 * @visibleName Resource
 */
class EventCard extends Component {
  // enrollment link via API??: https://ec-services.yourlearning.ibm.com/learner/yl/api/v1/enroll/event/10014923
  // view YL event: https://ec.yourlearning.ibm.com/w3/event/10008181

  card() {
    console.log("LOUISE props ===", this.props)
    var today = new Date();
    var nextEventDate = this.props.event ? moment(new Date(this.props.event.startDateTime), 'MM/DD/YYYY', true) : new Date(this.props.date);
    var titlePrefix = "Event"
    today > nextEventDate ? titlePrefix = "Previous Event" : titlePrefix = "Next Event";
    // var eventCard = <h4>There seems to be a problem loading events! Please try again later</h4>
    //var eventCard = <div><h3>Happy New Year 2020</h3><h4>New schedule of events coming soon…</h4></div>
    var eventCard = <div><h3>Playbacks not yet available for 2020 series</h3><Separator /><h4><IconLabelLink className="justify-center" link="/allevents2019" icon="launch" label="Review 2019 series" color="blue" /></h4></div>
    if (this.props.event) {
      var eventLink = "https://ec.yourlearning.ibm.com/w3/event/" + this.props.event.id;
      var playbackLink = this.props.playback ? "https://ec.yourlearning.ibm.com/w3/playback/" + this.props.playback.id : eventLink;
      var enrolLink = "https://ec-services.yourlearning.ibm.com/learner/yl/api/v1/enroll/event/" + this.props.event.id;

      eventCard =
        (
          <div className="justify-left">
            <IconTitle {...this.props} titlePrefix={titlePrefix} title={nextEventDate.format('D MMM YYYY')} />
            <Separator />
            <span className="tdsm-font-blue font-bold display-block">{this.props.event.title}</span>
            <div className=" panel-text-small" >
              <Summary data={this.props.event.summary} />
            </div>

            <div className="display-block padding-top">
              <span className="justify-left" >
                <UserList users={this.props.event.speakers} />
              </span>
              <Separator />
              <div className="display-flex panel-text-small icons-in-center">
                {today < nextEventDate ?
                  <span className="display-contents">
                    <IconLabelLink link={enrolLink} icon="launch" label="Enrol" color="blue" />
                    <IconLabelLink link={eventLink} icon="info" label="Event detail" color="blue" />
                  </span>
                  : (
                    <span className="display-contents">
                      <IconLabelLink link={playbackLink} icon="video" label="Playback" color="blue" />
                      <IconLabelLink link={this.props.download} icon="download" label="Download" color="blue" />
                      <IconLabelLink link={eventLink} icon="info" label="Event detail" color="blue" />
                    </span>
                  )}
              </div>
            </div>
          </div>
        )
    }
    return eventCard;
  }

  render() {
    console.log('EventCard', this.props );
    var today = new Date();
    var nextEventDate = this.props.event ? new Date(this.props.event.startDateTime) : new Date(this.props.date);
    return (
      this.props.event ?
        today > nextEventDate ?
          <div className="panel panel-max-content tdsm-red tdsm-font-white padding-all justify-center" >
            <div className="font-bold">Next Event</div>
            <div className="tdsm-normal-text margin-top padding-all event-panel-height">
              {this.card()}
            </div>
          </div >
          : <div className="panel panel-max-content tdsm-red tdsm-font-white padding-all justify-center" >
            <div className="font-bold">Join us...</div>
            <div className="tdsm-normal-text margin-top padding-all event-panel-height">
              {this.card()}
            </div>
          </div >

        : <div className="panel panel-max-content tdsm-blue tdsm-font-white padding-all justify-center" >
          <div className="font-bold">Catch up...</div>
          <div className="tdsm-normal-text margin-top padding-all">
            {this.card()}
          </div>
        </div >

    );
  }
}

/**
 * Type checking
 */
EventCard.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  titlePrefix: PropTypes.string,
  summary: PropTypes.string,
  date: PropTypes.string,
  speaker: PropTypes.array,
  event: PropTypes.object,
  playback: PropTypes.object
}

/**
* Default values
*/
EventCard.defaultProps = {
  title: '',
  icon: 'event',
  color: 'blue',
  summary: '',
}


export default EventCard;

// TEST DATA
// <EventCard
//     date="18 June 2019"
//     eventId="10014929"
//     title="IBM Cloud Continuous Delivery Service & DevOps Insights"
//     summary="The session will cover IBM Cloud Continuous Delivery Service, DevOps Insights, and solutions that involve integration of on-premise and SaaS automation tools."
//     speaker={[{
//         email: "acm@us.ibm.com"
//     }, { email: "sjweaver@us.ibm.com" }
//     ]}
// /> 

// <EventCard
//     date="11 June 2019"
//     eventId="10031322"   
//     playbackId="10032232"    
//     download="https://apps.na.collabserv.com/files/app/file/5120fa75-fe1e-49ad-9bd3-3061baaa63ad"                 
//     title="Evolution and Future of Cloud App Management"
//     summary="Aaron, Ben and Mark discuss the future roadmap of Cloud App Management, and present a demo on the solution."
//     speaker={[{email:"atobin@us.ibm.com"}, {email: "bstern@us.ibm.com"}, {email: "leftwich@uk.ibm.com"}]}
// /> 

