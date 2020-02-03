import React, { Component } from 'react';
import Separator from '../components/basic/Separator';
import IconTitle from '../components/basic/IconTitle';
import Summary from '../components/basic/Summary';
import EventTable from '../components/basic/EventTable';
import IconLabelLink from '../components/basic/IconLabelLink';
var moment = require('moment');

const json = require('../data/json');
const events = require('../data/10005049');

const headers = [
    { key: 'id', header: 'Code' },
    { key: 'links', header: 'Event' },
    { key: 'startDate', header: 'Date' },
    { key: 'name', header: 'Speakers' },
    { key: 'summary', header: 'Solution Summary' },
    { key: 'session', header: 'Session' },
    { key: 'tracks', header: 'Tracks' }
];

/**
 * Display Events page
 *
 * @visibleName Events
 */
class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
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
        this.getAllEvents();
        this.getEventDetails();
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

    getAllEvents() {
        var today = new Date();
        const allEvents = events.TDSM_LEARNING_SERIES.events;
        var scheduled = [];
        var completed = [];
        // var tableevents = [];
        allEvents.map((e) => {
            const eventDate = new Date(e.startDateTime);
            // let event = {id: e.id, }
            // events.push(event);
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
        var slidesURL;
        console.log('louise playback', playback);
        playback && this.state.playbacks && this.state.playbacks.replays ? this.state.playbacks.replays.map((replay) => {
            console.log(replay)
            return replay.info === "Session Slides"
                || replay.info === "PowerPoint Slide"
                || replay.info === "Presentation" ?
                console.log(replay) : ""
        })
            : console.log('');
        console.log(playback, slidesURL);
        return slidesURL;
    }

    render() {
        const TODAY = new Date();
        return (
            <div className="display-flex">
                <div className="cols-12">
                    <div className="panel">
                        <IconTitle title="ALL RESOURCES" icon="event" color="blue" />
                        <Separator />
                        <h4>coming soon...</h4>
                        <div className=" panel-text-small padding-bottom">
                            <Summary data={'There are ' + events.TDSM_LEARNING_SERIES.events.length + ' events associated with this <a target="_blank" rel="noopener noreferrer" href="https://ec.yourlearning.ibm.com/w3/series/10005049?other=All&track=All%20Tracks&layout=grid">Your Learning series.</a><p>'} />
                        </div>
                        <EventTable
                            // Clean up row data and simplify header mapping, adding extra id field since required by DataTable component
                            rows={events.TDSM_LEARNING_SERIES.events.map(event => {
                                return {
                                    ...event,
                                    links: <div className="display-flex">
                                        <IconLabelLink link={"https://ec.yourlearning.ibm.com/w3/event/" + event.id} icon="info" label="" color="blue" />
                                        <IconLabelLink link={"https://ec.yourlearning.ibm.com/w3/playback/" + event.playbackId} icon="video" label="" color="blue" />
                                        <IconLabelLink link={this.getEventSlides(event.id)} icon="download" label="" color="blue" />
                                    </div>,
                                    name: event.speakers.map((speaker) => speaker.name + ", "),
                                    tags: event.tracks.map((track) => track + ", "),
                                    session: TODAY < moment(new Date(event.startDateTime), 'MM/DD/YYYY', true) ?  "Scheduled" : "Replay"
                                    
                                }
                            })}
                            headers={headers}
                        />

                    </div>
                </div>
            </div>

        );
    }
}


export default AllEvents;
