import React, { Component } from 'react';
import Tile from '../components/basic/Tile';
import { find } from 'lodash';
import EventCard from '../components/ui/EventCard';
import Separator from '../components/basic/Separator';
import IconTitle from '../components/basic/IconTitle';
import Summary from '../components/basic/Summary';
import IconLabelLink from '../components/basic/IconLabelLink';
import axios from 'axios';


const json = require('../data/json');
const g = require('../data/General');

const events = require('../data/10065286');
const cloud_events = require('../data/10010551');

/**
 * Display Events page
 *
 * @visibleName Events
 */
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventData: {},
            scheduled: [],
            completed: [],
            playbacks: events.TDSM_LEARNING_SERIES.playbacks,
            nextEvent: {},
            previousEvent: {},
            eventPlayback: {},
            eventSlides: ""
        }
    }

    componentDidMount() {
        this.loadEventDetails();
        let tdsm_events = this.getAllEvents(events.TDSM_LEARNING_SERIES);
        this.getEventDetails();
    }

    loadEventDetailsFromGit() {
        var githubToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImlibSIsImlkIjoiMDA5ODIwODY2Iiwic3ViIjoiTE9VSVNFQHVrLmlibS5jb20iLCJuYW1lIjoiTG91aXNlIFMgRWxsaW90dCIsImhhc2giOiJmZDlkZDg3ODAwMjdiZWFlZTc1ZTQ4ZDA2NjM2ZWQ5MSIsImV4cCI6MTU3MDAyNjE2NywiaWF0IjoxNTY5OTM5NzY3fQ.Xt_6isalrZMK4VqSZsWoVRwRT6OXmZdFL3ijXfQEYf3eaa8acKgH9HslmcZld1W81lHcnerOLJmJGk9HEepHzS84YhxUYhiUZNbrFPsw5RC_zqb_XAx0pRR8jjAAu2SmFnTTE_wYuWN4tjlB0j1vuiznM849aJklHAyiX9GKUUodN8pzsSFUHX1DmHarPA7tbGUoJgMMPZ1OICK5BnlrYD3KmdZpI8mybZbi3aBGVgk63SxEDWzP6sNX_kwmr_PTUmfN72EThZqeT85FoUR2se3a8WE3vg2b1Wfx-n2aY_qXmNKjyFiSHIyUTB0D9l_8XFSaBlXZtTDeo32T8wapvg";
        var user;

        const url = "https://api.github.com/repos/${user}/<reponame>/";
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${githubToken}`,
            }
        })
            .then((response) => {
                console.log('louise.loadEvent data', response.data);
                this.setState({
                    data: response.data || [],
                    loading: false,
                    error: null
                });
            }).catch((error) => {
                console.log('louise.loadEventDetails ERROR:', error);
                this.setState({
                    data: [],
                    loading: false,
                    error: error
                });
            });
    }

    loadEventDetails() {
        console.log('louise hello')
        var githubToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImlibSIsImlkIjoiMDA5ODIwODY2Iiwic3ViIjoiTE9VSVNFQHVrLmlibS5jb20iLCJuYW1lIjoiTG91aXNlIFMgRWxsaW90dCIsImhhc2giOiJmZmM1MmQ1MTBjOWJiNWM4ZDdhMjc5OTcwYTMxMGEwZiIsImV4cCI6MTU3MTc0NzYwNiwiaWF0IjoxNTcxNjYxMjA2fQ.P2ofIcLho_A_ghA1QslJN7_oFEmY3PCaRaKYotjd7Hq0ThcyjUTfS1OcWCzjAYoFKEa7aH2OADdGpeaKcLQshgVAi8T83y-KygwC-PaoSIjLxYsbTkXo5913EEj0WlzuMDkzCXcPNsa17q-GDzFboYyu_kBRMvAZiqDXDltqpFm0W-UHgeDjlv89f1Zzxskz-W0OTOVqGoJhQU5WT1g7BCD2rZek8BmMYDNpvFJIXXU4aACakhxfEFivyfwVfFM12UH3PquT-ymo35YNn7YbpKj8t5IbBCPKLr02SLpLb5VHut2ZQJZw0ppgRpYmZugBhiQbpJiGGhplN2c8fsO0TA";
        // const url = "https://ec-services.yourlearning.ibm.com/learner/yl/api/v2/chains/10005049";
        this.setState({
			data: {},
			loading: true,
			error: null
		});
        const url = "https://api.yourlearning.ibm.com/v3/ibm/badges?learnerIntranetID=louise%40uk.ibm.com&status=all&format=json&detail=full"
        const jwt_token_url = `https://api.yourlearning.ibm.com/v3/ibm/token/validate`;
        const auth = `https://api.yourlearning.ibm.com/oauth2/authorize`;
        // const auth2 = `https://ec-services.yourlearning.ibm.com/security/yl/api/v1/login`;
        const auth2 = `https://ec-services.yourlearning.ibm.com/learner/yl/api/v2/chains/10005049`;
        
        console.log('louise.loadEventDetails -> ', jwt_token_url);
        return axios.get(auth2, {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${githubToken}`,
            }
        })
            .then((response) => {
                console.log('louise.loadEvent data', JSON.stringify(response.data));
                this.setState({
                    data: response.data || [],
                    loading: false,
                    error: null
                });
            }).catch((error) => {
                console.log('louise.loadEventDetails ERROR:', error);
                this.setState({
                    data: [],
                    loading: false,
                    error: error
                });
            });
    }

    getEventDetails() {
        const nextEvent = this.getNextEvent();
        const previousEvent = this.getPrevioustEvent();
        const eventPlayback = previousEvent ? this.getPlayback(previousEvent.id) : {}
        const eventSlides = eventPlayback ? this.getEventSlides(eventPlayback) : ""

        this.setState({
            nextEvent: nextEvent,
            previousEvent: previousEvent,
            eventPlayback: eventPlayback,
            eventSlides: eventSlides
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.nextEvent !== this.state.nextEvent) {
            this.getEventDetails();
        }
    }

    getSummaryData() {
        return (json.TESTDATA.data);
    }

    getAllEvents(learningseries) {
        var today = new Date();
        const allEvents = learningseries.events;
        var scheduled = [];
        var completed = [];

        allEvents.map((e) => {
            const eventDate = new Date(e.startDateTime);
            return today > eventDate ? completed.push(e) : scheduled.push(e);
        })

        this.setState({
            completed: completed,
            scheduled: scheduled
        })

        console.log('completed', completed);
    }

    getNextEvent() {
        var dates = [];
        this.state.scheduled.map((event) => {
            return dates.push(event.startDateTime);
        });
        dates.sort(function (a, b) {
            // Turn strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b) - new Date(a);
        });
        // get event with the latest date
        var nextEvent;
        this.state.scheduled.map((event) => {
            return dates[dates.length - 1] === event.startDateTime ? nextEvent = event : ""
        });
        return nextEvent;
    }

    getPrevioustEvent() {
        // get and sort all event dates
        var dates = [];
        this.state.completed.map((event) => {
            return dates.push(event.endDateTime);
        });
        dates.sort(function (a, b) {
            // Turn strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b) - new Date(a);
        });
        // get event with the latest date
        var latestEvent;
        this.state.completed.map((event) => {
            return dates[0] === event.endDateTime ? latestEvent = event : ""
        });
        return latestEvent;
    }

    getPlayback(eventId) {
        var eventPlayback;
        this.state.playbacks.map((p) => {
            return p.sourceId === eventId ? eventPlayback = p : ""
        });
        console.log('eventPlayback', eventPlayback);
        return eventPlayback;
    }

    getEventSlides(playback) {
        console.log('eventPlayback replays:', playback.replays);
        var slidesURL;
        playback.replays ? playback.replays.map((replay) => {
            return replay.info === "Session Slides" ? slidesURL = replay.url : ""
        })
            : console.log('');

        return slidesURL;
    }

    render() {
        console.log('louise rendering EVENTS')
        const t = find(g.COMMUNITY_LINKS || [], v => v.id === "your_learning");

        return (
            <div className="display-flex">
                <div className="cols-4">
                    <div className="panel">
                        <IconTitle title="Hybrid DevOps and Service Management series" icon="event" color="blue" />
                        <Separator />
                        <Summary data={this.getSummaryData()} />
                        <div className="tile-container padding-top ">
                            <Tile
                                url={t.link.url}
                                imageCss={t.imageCss}
                            />
                        </div>
                        <div className="padding-top panel-text-small">
                            <IconLabelLink link="/allevents" icon="launch" label="View a list of all events in this community series." color="blue" />
                        </div>
                        <Separator />
                        <div className="padding-top panel-text-small">
                            Related Events and Classes:
                            <ul>
                                <li><IconLabelLink link="https://ec.yourlearning.ibm.com/w3/series/10010551" icon="event" label="IBM Cloud New Release Technical Enablement" color="blue" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cols-4 height-half">
                    <EventCard event={this.state.nextEvent} />
                </div>
                <div className="cols-4 height-half">
                    <EventCard event={this.state.previousEvent} playback={this.state.eventPlayback} download={this.state.eventSlides} />
                </div>
            </div>

        );
    }
}


export default Events;
