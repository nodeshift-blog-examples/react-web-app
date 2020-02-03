import React, { Component } from 'react';
import Separator from '../components/basic/Separator';
import IconTitle from '../components/basic/IconTitle';
import Summary from '../components/basic/Summary';
import EventTable from '../components/basic/EventTable';
// import SeriesTable from '../components/basic/SeriesTable';
import IconLabelLink from '../components/basic/IconLabelLink';
import { DataTable } from 'carbon-components-react';
import LinkURL from '../components/basic/LinkURL';
import { flattenDeep, find } from 'lodash';
// import EventService from './EventService';

var moment = require('moment');


const json = require('../data/json');

const events_10065286 = require('../data/10065286');
const events_10005049 = require('../data/10005049');

const headers = [
    { key: 'series_shortname', header: 'Series' },
    { key: 'title', header: 'Title' },
    { key: 'links', header: 'Event' },
    { key: 'startDate', header: 'Date' },
    { key: 'name', header: 'Speakers' },
    { key: 'summary', header: 'Solution Summary' },
    { key: 'session', header: 'Session' },
    { key: 'tracks', header: 'Tracks' }
];

const eventsSeriesList = [
    { id: "10065286", title: 'Hybrid DevOps and Service Management series 2020', shortname: '2020' },
    { id: "10005049", title: 'Hybrid DevOps and Service Management series 2019', shortname: '2019' }
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
            allEventSeries: [],
            events: [],
            scheduled: [],
            completed: [],
            playbacks: [], // this.state.events ? this.state.events.TDSM_LEARNING_SERIES.playbacks : [],
            nextEvent: {},
            previousEvent: {},
            eventPlayback: {},
            eventSlides: ""
        }
        this.sortEventsByDate = this.sortEventsByDate.bind(this);
    }

    componentDidMount() {
        // this.getAllEvents(this.props.seriesId);
        this.getEventDetails();
        this.loadAllEvents()
    }

    loadAllEvents() {
        var all = []
        var evts = []
        eventsSeriesList.map((series, index) => {
            // return console.log('loadAllEvents', index, seriesId)
            var allSeriesData = this.getAllEvents(series.id);
            all.push(allSeriesData);
            evts.push(allSeriesData.events)
        })
        var f = flattenDeep(evts)
        console.log("all...", f, all)
        this.setState({ allEventSeries: all, events: f })
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

    /**
     * Turn strings into dates, and then subtract them
     * to get a value that is either negative, positive, or zero.            
     * @param {*} eventsArray 
     */
    sortEventsByDate(eventsArray, ascendingOrder) {
        return ascendingOrder ? eventsArray.sort(function (a, b) {
            return new Date(a.startDateTime) - new Date(b.startDateTime);
        })
            : eventsArray.sort(function (a, b) {
                return new Date(b.startDateTime) - new Date(a.startDateTime);
            });
    }

    getAllEvents(seriesId) {
        var today = new Date();
        var events = seriesId === "10005049" ? events_10005049 : events_10065286;
        const allEvents = events ? events.TDSM_LEARNING_SERIES.events : [];
        var scheduled = [];
        var completed = [];
        allEvents.map((e) => {
            const eventDate = new Date(e.startDateTime);
            return today > eventDate ? completed.push(e) : scheduled.push(e);
        })
        let sortedScheduledEvents = this.sortEventsByDate(scheduled, true);
        let sortedCompletedEvents = this.sortEventsByDate(completed, false)
        this.setState({
            completed: completed,
            scheduled: scheduled,
            events: sortedScheduledEvents.concat(sortedCompletedEvents)
        })

        console.log('Events completed', completed, scheduled);
        return {
            seriesId: seriesId,
            completed: completed,
            scheduled: scheduled,
            events: sortedScheduledEvents.concat(sortedCompletedEvents)
        }
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

    //<IconLabelLink link={this.getEventSlides(event.id)} icon="download" label="" color="blue" />
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
        console.log('getEventSlides', playback, slidesURL);
        return slidesURL;
    }

    buildSeriesURLList() {
        var str = "<div className='side-nav-indent'><ul>";
        eventsSeriesList.map((series) => {
            str+="<li><a target='_blank' rel='noopener noreferrer' href='https://ec.yourlearning.ibm.com/w3/series/"+series.id+"?other=All&track=All%20Tracks&layout=grid'>"+series.title+"</a></li>";            
        })
        str+= "</ul></div>"
        return str;
    }

    getSeriesShortName(seriesId) {        
        var series = find(eventsSeriesList, series => seriesId === series.id)
        return series.shortname;
    }

    render() {
        const TODAY = new Date();
        console.log(this.state)        
        const allEvts = this.state.events;  //events.TDSM_LEARNING_SERIES.events;
        const seriesUrl = this.buildSeriesURLList();
        return (
            <div className="display-flex">
                <div className="cols-12">
                    <div className="panel tableToolbarOverflow">
                        <IconTitle title={this.props.title + " - ALL EVENTS"} icon="event" color="blue" />
                        <Separator />
                        <div className=" panel-text-small padding-bottom">
                            <Summary data={'There are ' + eventsSeriesList.length + ' event series associated with this community: '+seriesUrl + '<p>'} />
                        </div>
                        <EventTable
                            filterBy={eventsSeriesList}
                            // Clean up row data and simplify header mapping, adding extra id field since required by DataTable component
                            rows={allEvts.map(event => {
                                return {
                                    ...event,
                                    links: <div className="display-flex">
                                        <IconLabelLink link={"https://ec.yourlearning.ibm.com/w3/event/" + event.id} icon="info" label="" color="blue" />
                                        <IconLabelLink link={"https://ec.yourlearning.ibm.com/w3/playback/" + event.playbackId} icon="video" label="" color="blue" />

                                    </div>,
                                    name: event.speakers.map((speaker) => speaker.name + ", "),
                                    tags: event.tracks.map((track) => track + ", "),
                                    session: TODAY < moment(new Date(event.startDateTime), 'MM/DD/YYYY', true) ? "Scheduled" : "Replay",
                                    series: event.chainId,
                                    series_shortname: this.getSeriesShortName(event.chainId)
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
