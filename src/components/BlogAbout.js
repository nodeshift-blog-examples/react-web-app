import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagList from '../components/basic/TagList';
import URLList from './URLListTest';
import ContactGrid from './ContactGrid';
// import { BLOG_SAMPLE } from '../data/blogsample';
import Separator from './basic/Separator';
const sample = require('../data/blogsample');

/**
 * Display Resource card 
 *
 * @visibleName Resource
 */
class BlogAbout extends Component {
  // enrollment link via API??: https://ec-services.yourlearning.ibm.com/learner/yl/api/v1/enroll/event/10014923
  // view YL event: https://ec.yourlearning.ibm.com/w3/event/10008181

  render() {
    console.log('BloGAbout', this.props);
    var titlePrefix = "Blog Author";
    titlePrefix = this.props.author && this.props.author.length > 1 ? titlePrefix + "s" : titlePrefix;
    return (
      <div className="panel panel-border padding-all">
        <ContactGrid
          title={titlePrefix}
          summary=""
          iconColor="green"
          imageCss={this.props.author.length > 1 ? "team" : "user"}
          data={this.props.author}
        />
        <Separator />
        <TagList  className="display-flex" sample={sample.RANDOM_TAGS[0]} />
        <Separator />
        <URLList />
      </div>
    );
  }
}
/**
 * Type checking
 */
BlogAbout.propTypes = {
  author: PropTypes.array,
}
/**
* Default values
*/
BlogAbout.defaultProps = {
  author: [],
}

export default BlogAbout;
