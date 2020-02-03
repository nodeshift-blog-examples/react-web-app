import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import PropTypes from 'prop-types';
import ServiceOfferingAccordion from '../ui/ServiceOfferingAccordion';
import Quote from '../basic/Quote';
import Overview from '../ui/Overview';
import ImageCss from '../basic/ImageCss';
import NoticeBoard from '../ui/NoticeBoard';

const sf = require('../SharedFunctions');

/**
 * Display CommunityPage page
 *
 * @visibleName CommunityPage
 */
class CommunityPage extends Component {

  getLinks(allData, tag) {
    console.log('CommunityPage.getLinks', allData, tag);
    return sf.filterDataByTag(allData, tag);
  }

  render() {
    const json = this.props.data;
    
    return (
      <div className="display-flex">
        <div className="cols-4">
          <div className="display-flex">
            <div className="col-half">
              <ImageCss imageCss={json.short_name.toLowerCase() + "-image"} />
            </div>
            <div className="col-half">
              <Quote quote={json.quote} />
            </div>
          </div>
          <Overview
            title={json.whatis.title}
            description={json.whatis.summary}
            color={json.whatis.icon.color}
            icon={json.whatis.icon.type}
          />
        </div>
        <div className="">
          <ServiceOfferingAccordion
            title={"Service Offerings"}
            color={json.whatis.icon.color}
            summary={json.offerings.summary}
            summaryFooter={json.offerings.link}
            data={json.offerings}
          />
        </div>
        <div className="cols-2">
          <NoticeBoard
            color={json.whatis.icon.color}
            tags={json.tags}
            resources={this.getLinks(json.resources, "feature").concat(this.getLinks(json.resources, "video"))}
            stories={json.stories}
            blogs={json.blogs.blogs}
            linkToAllResources
            shortName={json.short_name.toLowerCase()}
          />
        </div>
        <div className="cols-2">
          <NoticeBoard
            color={json.whatis.icon.color}
            tags={json.tags}
            slack={json.slack_channels}
            contacts={json.contacts}
          />
        </div>

        {/* <div>
          <div className="cols-3 display-flex">
            <BlogCard
              title="Blogs"
              imageCss="icon-document"
              iconColor="yellow"
              data={json.blogs}
              width="3"
            />

            <EventCard
              iconColor="purple"
              date={"26 Mar 2019"}
              email="louise@uk.ibm.com"
              summary="Introduction to JFrog for DevOps"
              summaryFooter={g.RESOURCE_SUMMARY_FOOTER_LINK}
              data={this.props.resourceLinks}
              width="3"
            />
          </div>
        </div> */}
      </div>
    );
  }
}

/**
 * Type checking
 */
CommunityPage.propTypes = {
  data: PropTypes.object,
  shortname: PropTypes.string,
  title: PropTypes.string,
  quote: PropTypes.string,
  whatisTitle: PropTypes.string,
  whatisSummary: PropTypes.string,
  resourceLinks: PropTypes.object,
  offeringSummary: PropTypes.string,
  offerings: PropTypes.object,
  sodaLink: PropTypes.object,
}
/**
* Default values
*/
CommunityPage.defaultProps = {
  data: {},
  shortname: '',
  title: 'PAGE TITLE',
  quote: '',
  whatisTitle: 'What is...',
  whatisSummary: 'summary here',
  resourceLinks: {},
  offeringSummary: '',
  offerings: {},
  sodaLink: { link: 'https://soda.w3ibm.mybluemix.net/', label: "SODA" }
}

export default withRouter(CommunityPage);
