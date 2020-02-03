import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NoticeBoard from '../components/ui/NoticeBoard';
const json = require('../data/json');

/**
 * Display Blog page
 *
 * @visibleName Blog
 */
class AllBlogs extends Component {

  render() {
    return (
      <div className="display-flex">
      <div className="cols-3">
          <NoticeBoard
            title="DevOps Blogs"
            color={json.JSON_DEVOPS.whatis.icon.color}
            blogs={json.JSON_DEVOPS.blogs.blogs}
          />
      </div>
      <div className="cols-3">
          <NoticeBoard
            title="MCM Blogs"
            color={json.JSON_MCM.whatis.icon.color}
            blogs={json.JSON_MCM.blogs.blogs}
          />
      </div>
      <div className="cols-3">
          <NoticeBoard
            title="CSMO Blogs"
            color={json.JSON_CSMO.whatis.icon.color}
            blogs={json.JSON_CSMO.blogs.blogs}
          />
      </div>
      <div className="cols-3">
          <NoticeBoard
            title="Other Blogs"
            color={json.JSON_TRADITIONAL_IT.whatis.icon.color}
            blogs={json.JSON_TRADITIONAL_IT.blogs.blogs}
          />
      </div>

      </div>
    );

  }
}

export default withRouter(AllBlogs);
