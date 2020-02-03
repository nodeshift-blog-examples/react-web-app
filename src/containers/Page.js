import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import HeaderTitle from '../components/page/HeaderTitle';
import HeaderMenu from '../components/page/CommunityHeaderMenu';
import Footer from '../components/page/Footer';

import About from './About';
import Tools from './Resources';
import Blogs from './Blogs';
import BlogForm from './BlogForm';
import FeedbackForm from './FeedbackForm';
import Events from './Events';
import AllEvents from './AllEvents';
import AllResources from './AllResources';
import Channel from './Channel';

import Journey from './Journey';
import Palette from './Palette';

import CommunityPage from '../components/page/CommunityPage';
import NotFound from '../components/basic/NoMatch';

const json = require('../data/json');


/**
 * Display Page page
 *
 * @visibleName Page
 */
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentId: 0,
            content: <NotFound />,
            buttonLabel: 'Feedback'
        }
        this.getPageContent = this.getPageContent.bind(this);
    }

    componentDidMount() {
        this.getPageContent();
    }

    componentDidUpdate(prevProps) {
        console.log('Page.componentDidUpdate');
        if (prevProps.location.pathname !== this.props.location.pathname) {
            console.log('page changed...');
            this.getPageContent();
        }
    }

    getToolsTab() {

    }

    getPageContent() {
        const { match } = this.props;
        console.log('match=', match);
        match.params.pageId ? console.log('louise: ', match.params.pageId) : console.log('not found');

        switch (this.props.match.params.pageId.toLowerCase()) {
            // case "home": { this.setState({ contentId: 0, content: <Home /> }); break; }
            case "tools": { this.setState({ contentId: 1, content: <Tools selectedTab='0'/> }); break; }
            case "tools-devops": { this.setState({ contentId: 1, content: <Tools selectedTab='0' /> }); break; }
            case "tools-mcm": { this.setState({ contentId: 1, content: <Tools selectedTab='1' /> }); break; }
            case "tools-system": { this.setState({ contentId: 1, content: <Tools selectedTab='2' /> }); break; }
            case "tools-csmo": { this.setState({ contentId: 1, content: <Tools selectedTab='3' /> }); break; }
            case "tools-tradit": { this.setState({ contentId: 1, content: <Tools selectedTab='4' /> }); break; }

            case "events": { this.setState({ contentId: 2, content: <Events /> }); break; }
            case "allevents": { this.setState({ contentId: 2, content: <AllEvents title="Hybrid DevOps and Service Management series" />}); break; }
            case "channel": { this.setState({ contentId: 3, content: <Channel /> }); break; }
            case "blogs": { this.setState({ contentId: 4, content: <Blogs /> }); break; }
            case "newblog": { this.setState({ contentId: 4, content: <BlogForm /> }); break; }
            case "feedback": { this.setState({ contentId: 4, content: <FeedbackForm />, buttonLabel: "" }); break; }
            case "csmo": { this.setState({ contentId: -1, content: <CommunityPage data={json.JSON_CSMO} /> }); break; }
            case "devops": { this.setState({ contentId: -1, content: <CommunityPage data={json.JSON_DEVOPS} /> }); break; }
            case "tradit": { this.setState({ contentId: -1, content: <CommunityPage data={json.JSON_TRADITIONAL_IT} /> }); break; }
            case "mcm": { this.setState({ contentId: -1, content: <CommunityPage data={json.JSON_MCM} /> }); break; }
            case "system": { this.setState({ contentId: -1, content: <CommunityPage data={json.JSON_CLOUDPAK_SYSTEM} /> }); break; }

            case "journey": { this.setState({ contentId: -1, content: <Journey /> }); break; }
            case "palette": { this.setState({ contentId: -1, content: <Palette /> }); break; }
            case "about": { this.setState({ contentId: -1, content: <About /> }); break; }
            case "news": { this.setState({ contentId: -1, content: <AllResources /> }); break; }
            default: break;
        }
    }

    render() {
        console.log('Page.render', this.props, this.state);
        return (
            <div >
                <div className="tdsm-banner-image ">
                    <HeaderMenu selectedIndex={this.state.contentId} buttonLabel={this.state.buttonLabel} />
                    <HeaderTitle title='Hybrid DevOps and Service Management community' />
                </div>
                <div className="container">
                    {this.props.children}
                    {this.state.content}
                </div>

                <Footer />
            </div>
        );
    }
}


export default withRouter(Page);
