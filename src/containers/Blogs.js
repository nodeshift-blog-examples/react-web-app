import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Blog from './Blog';
import AllBlogs from './AllBlogs';

/**
 * Display Blogs page
 *
 * @visibleName Blogs
 */
class Blogs extends Component {

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={AllBlogs} />
                <Route path={`${match.path}/:blogId`} component={Blog} />
            </div>
        );
    }
}

export default withRouter(Blogs);
