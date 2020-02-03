import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import BlogList from '../components/BlogList';
import LatestBlogCard from '../components/LatestBlogCard';
import SignIn from '../components/SignIn';
import TagList from '../components/basic/TagList';
import URLList from '../components/URLListTest';
import Separator from '../components/basic/Separator';
const sample = require('../data/blogsample');

/**
 * Display Blog page
 *
 * @visibleName Blog
 */
class AllBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    }
  }
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 12)
        })
      })
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        })
      })

  }

  render() {
    const { posts, users } = this.state;
    const { match } = this.props;

    console.log('louise users: ', users);
    const postList = posts.length ? (
      <BlogList
        title="Our Community Blogs"
        icon="blog"
        iconColor="green"
        blogs={posts}
        users={users}
        linkPrefix={match.url}
      />
    ) : (
        <div>No posts yet.</div>
      )
    return (
      <div className="display-flex">
        <div className="padding-all panel panel-border ">
          {postList}
        </div>
        <div className="display-block cols-3 ">
          <div className="panel panel-max-content tdsm-red tdsm-font-white padding-all justify-center">
            <div className="font-bold">Featured Blog</div>
            <div className="tdsm-normal-text margin-top padding-all">
              <LatestBlogCard
                date="8 May 2019"
                title="UrbanCode Deploy(UCD) – Sharing Properties Between Components"
                summary="Learn how to avoid having multiple independent definitions or property sheets with different versions and still maintain the traceability of values used."
                email="alan.murphy@uk.ibm.com"
                tags={sample.RANDOM_TAGS[0]}
              />
            </div>
          </div>
          <div className="tdsm-normal-text">
            <SignIn />
          </div>
        </div>
        <div className="cols-3 panel panel-border panel-scroll padding-all">
          <URLList
            title="CSMO Blogs"
            icon="recommend"
            iconColor="red"
            links={sample.CSMO_LINKS}
          />
          <TagList className="display-block" prefix={true} sample={sample.RANDOM_TAGS[4]} />
          <Separator />
          <URLList
            title="DevOps Blogs"
            icon="recommend"
            iconColor="blue"
            links={sample.DEVOPS_LINKS}
          />
          <TagList className="display-block" prefix={true} sample={sample.RANDOM_TAGS[3]} />
          <Separator />
          <URLList
            title="Traditional IT Blogs"
            icon="recommend"
            iconColor="green"
            links={sample.TRADIT_LINKS}
          />
          <TagList className="display-block" prefix={true} sample={sample.RANDOM_TAGS[7]} />

        </div>
      </div>
    );

  }
}

export default withRouter(AllBlogs);
