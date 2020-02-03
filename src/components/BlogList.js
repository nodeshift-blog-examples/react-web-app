import React, { Component } from 'react';
import IconTitle from './basic/IconTitle';
import IconLabelLink from './basic/IconLabelLink';
import TagList from '../components/basic/TagList';
import UserProfile from './basic/UserProfile';
import { find, reduce, uniqWith } from 'lodash';
import { Search } from 'carbon-components-react';
import Separator from './basic/Separator';

const sample = require('../data/blogsample');
// const json = require('../data/json');

/**
 * Display a list of tags
 *
 * @visibleName BlogList
 */
class BlogList extends Component {
    constructor(props) {
        super(props);
        const { blogs } = props;
        this.state = {
            allBlogs: blogs,
            filteredBlogs: blogs,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        // let parser = new Parser();
        // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        // const blogURL = "https://apps.na.collabserv.com/blogs/roller-ui/rendering/feed/c83b42e5-2186-42f1-b498-2871621e2984/entries/atom?lang=en_us";

        // (async () => {
        //     let feed = await parser.parseURL(CORS_PROXY + blogURL);
        //     feed.items.forEach(item => {
        //         console.log(item);
        //     });
        // })();
    }
	/**
	 * Filter list by name that start with search text, or reset if search text undefined.
	 * @param {*} e
	 */
    handleSearch(e) {
        if (e.target.value) {
            var filterList = [];
            filterList = reduce(this.state.allBlogs, function (result, res) {
                if (res.title && res.title.length > 0) {
                    var splitName = res.title.toLowerCase().split(" ");
                    splitName.map((s, index) => {
                        return (s.startsWith(e.target.value.toLowerCase(), 0)) ?
                            filterList.push(res) : {}
                    })
                }
                if (res.body && res.body.length > 0) {
                    var splitCat = res.body.toLowerCase().split(" ");
                    splitCat.map((s, index) => {
                        return (s.startsWith(e.target.value.toLowerCase(), 0)) ?
                            filterList.push(res) : {}
                    })
                }
                return filterList;
            }, {});
            var uniqFilterList = uniqWith(filterList, function (arrVal, othVal) {
                return arrVal.id === othVal.id;
            });
            this.setState({ filteredBlogs: uniqFilterList });
        } else
            this.setState({ filteredBlogs: this.state.allBlogs });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.blogs !== prevProps.blogs) {
            this.setState({
                allBlogs: this.props.blogs,
                filteredBlogs: this.props.blogs,
            })
        }
    }

    getUserEmail(id) {
        const user = find(this.props.users || [], v => v.id === id);
        console.log(user);
        return "louise@uk.ibm.com";
    }

    render() {
        const { linkPrefix } = this.props;
        var counter = this.state.filteredBlogs.length > 1 ?
            this.state.filteredBlogs.length + " articles"
            : this.state.filteredBlogs.length + " article"
        return (
            <div>
                <IconTitle
                    title={this.props.title}
                    icon={this.props.icon ? this.props.icon : "document"}
                    color={this.props.iconColor ? this.props.iconColor : "blue"}
                />
                <div className="display-flex">
                    <Search className="search-max-width padding-top padding-right panel-text-small"
                        small
                        labelText="Search"
                        placeHolderText="Search"
                        onChange={this.handleSearch}
                    />
                    <span className="padding-top">{counter}</span>
                </div>
                <div className="display-flex justify-left panel-text-small panel-scroll-with-search">
                    <ul className="panel-text-small">
                        {this.state.filteredBlogs ? this.state.filteredBlogs.map((post, index) =>
                            <li key={"post_" + index} className="panel-text-li">
                                <Separator />

                                <span className="tdsm-font-blue font-bold"><IconLabelLink link={`${linkPrefix}/${post.id}`} icon="arrow-right" label={post.title} /></span>
                                <p className=" panel-text-small">
                                    {post.body}
                                </p>

                                <div className="display-block padding-top">
                                    <span className="justify-left" >
                                        <UserProfile key={index} email={this.getUserEmail(post.userId)} />
                                    </span>
                                    <TagList sample={sample.RANDOM_TAGS[index]} />
                                </div>
                            </li>
                        ) : "Loading...."
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// <IconLabelLink link={`${linkPrefix}/${post.id}`} icon="arrow-right" label={post.title} />
//                                 <p className="panel-text-small">{post.body}</p>
//                                 <p className="panel-text-small">Published 27 May 2019 by </p> 
//                                 <UserProfile key={index} email="david@uk.ibm.com" />
//                                 <TagList />
export default BlogList;