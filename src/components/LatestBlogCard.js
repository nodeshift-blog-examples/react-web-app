import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './basic/UserProfile';
import IconTitle from './basic/IconTitle';
import IconLabelLink from './basic/IconLabelLink';
import TagList from '../components/basic/TagList';
import Separator from './basic/Separator';
// const sample = require('../data/blogsample');

/**
 * Display Resource card 
 *
 * @visibleName Resource
 */
class LatestBlogCard extends Component {
  // enrollment link via API??: https://ec-services.yourlearning.ibm.com/learner/yl/api/v1/enroll/event/10014923
  // view YL event: https://ec.yourlearning.ibm.com/w3/event/10008181

  render() {
    return (
      <div className="">
        <IconTitle icon="blog" title={this.props.title} />
        <Separator />
        <p className=" panel-text-small">
          {this.props.summary}
        </p>

        <div className="display-block padding-top">
          <span className="justify-left" >
            <UserProfile email={this.props.email} full_name="Andrea C Martinez" job_title="Distinguished Engineer, CTO DevOps, IBM Cloud Labs" />
          </span>
          <Separator />
          <div className="display-flex">
            <span className="tdsm-font-blue panel-text-small col-half">Published {this.props.date}</span>

            <div className="display-flex panel-text-small font-bold justify-center">
              <IconLabelLink link="/blogs/1"
                icon="arrow-right"
                label="READ" />
            </div>
          </div>
          <div>
            <Separator />
            <TagList justify="center" prefix={false} sample={this.props.tags} />
          </div>

        </div>
      </div>
    );
  }
}
/**
 * Type checking
 */
LatestBlogCard.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  iconCss: PropTypes.string,
  iconColor: PropTypes.string,
  data: PropTypes.array,
  width: PropTypes.string,
  summary: PropTypes.string,
  summaryFooter: PropTypes.object,
  progressIndex: PropTypes.number,
}
/**
* Default values
*/
LatestBlogCard.defaultProps = {
  title: '',
  iconCss: '',
  iconColor: 'green',
  data: [],
  width: 4,
  summary: '',
  summaryFooter: {},
  progressIndex: -1,
}

export default LatestBlogCard;
