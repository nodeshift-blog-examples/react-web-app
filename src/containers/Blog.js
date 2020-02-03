import React, { Component } from 'react';
import BlogAbout from '../components/BlogAbout';
import IconTitle from '../components/basic/IconTitle';
import Separator from '../components/basic/Separator';
const json = require('../data/blogsample');
/**
 * Display Blog page
 *
 * @visibleName Blog
 */
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      published_date: '',
      author: [{ email: '' }],
      exec_summary: '',
      article: ''
    }
    this.loadBlog = this.loadBlog.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.loadBlog(match.params.blogId);
  }

  loadBlog(id) {
    const data = json.BLOG_SAMPLE[0];
    this.setState({
      title: data.title,
      published_date: data.published_date,
      author: data.author,
      exec_summary: data.exec_summary,
      article: data.article
    });
  }

  render() {
    console.log('blog detail=', this.props, this.state);
    const blogData = this.state;
    return blogData ? (
      <div className="display-flex" >
        <div className=" cols-9 panel-scroll">
          <IconTitle title={blogData.title} icon="blog" color="blue" />
          <h5 className="padding-top padding-bottom">Published {blogData.published_date}</h5>

          {blogData.exec_summary ?
            <div className="blog-nutshell tdsm-blue padding-all margin-top">
              <h5>In a nutshell...</h5>
              <h4 className="blog-exec-summary">{blogData.exec_summary}</h4>
            </div>
            : <Separator />}
          <div className="padding-all"></div>
          <h5 className="blog-nutshell padding-bottom">The detail...</h5>
          <div className="panel-scroll margin-top">
            <ul className="panel-text-small">
              {blogData.article.length > 0 ? blogData.article.map((c, index) =>
                <li key={"line_" + index} className="panel-text-li">
                  {c}
                </li>
              ) : "Loading..."}
            </ul>
          </div>
        </div>
        <div className=" cols-3">
          <BlogAbout author={blogData.author} />
        </div>
      </div>
    ) : (<div>Loading blog...</div>)

  }
}

export default Blog;
