import React, { Component } from 'react';
import HeaderTitle from '../components/page/HeaderTitle';
import HeaderMenu from '../components/page/CommunityHeaderMenu';
import Footer from '../components/page/Footer';
import NoticeBoard from '../components/ui/NoticeBoard';
import Overview from '../components/ui/Overview';
import EventCard from '../components/ui/EventCard';
import TileGrid from '../components/TileGrid';
import MenuSideNav from '../components/page/MenuSideNav';

const g = require('../data/General')
const events = require('../data/10065286');

/**
 * Display Home page
 *
 * @visibleName Home
 */
class Home extends Component {

    getNextEvent() {
        var dates = [];
        var today = new Date();
        const allEvents = events.TDSM_LEARNING_SERIES.events;
        var scheduled = [];
        var completed = [];
        allEvents.map((e) => {
            const eventDate = new Date(e.startDateTime);
            return today > eventDate ? completed.push(e) : scheduled.push(e);
        })
        scheduled.map((event) => {
            return dates.push(event.startDateTime);
        });
        dates.sort(function (a, b) {
            // Turn strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b) - new Date(a);
        });
        // get event with the latest date
        var nextEvent;
        scheduled.map((event) => {
            return dates[dates.length - 1] === event.startDateTime ? nextEvent = event : ""
        });
        return nextEvent;
    }

    render() {
        return (
            <div >
                <div className="tdsm-banner-image ">
                    <HeaderMenu selectedIndex={0} buttonLabel="Feedback" />
                    <HeaderTitle title='Hybrid DevOps and Service Management community' />
                    <MenuSideNav/> 
                </div>
                <div className="container">
                    <div className="display-flex">

                        <div className="cols-4 side-nav-margin">
                            <Overview
                                title="Welcome"
                                description={g.WHATIS_COMMUNITY_SUMMARY}
                                color="blue"
                                icon="cloud"
                                users={[
                                    { email: "david@uk.ibm.com" }, {
                                        email: "louise@uk.ibm.com"
                                    }
                                ]}
                            />
                        </div>
                        <div className="cols-3 ">
                            <EventCard event={this.getNextEvent()} />
                        </div>
                        <div className="cols-3 ">
                            <NoticeBoard
                                color="blue"
                                latest
                                banner="Latest..."
                                maxheight={true}
                                stories={g.WHATIS_COMMUNITY_LINKS}
                                blogs={g.WHATIS_COMMUNITY_BLOGS}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
