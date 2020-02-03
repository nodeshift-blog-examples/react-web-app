import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import UserProfile from '../basic/UserProfile';
import IconLabelLink from '../basic/IconLabelLink';
/**
 * Notice Board displaying top links for the following headings:
 * - Resources
 * - Success Stories
 * - Collaborate
 * - Blogs
 *
 * @visibleName NoticeBoard
 */
class NoticeBoard extends Component {

  getNotices() {
    return (
      <div className={this.props.banner ? "scroll tdsm-normal-text margin-top event-panel-height" : this.props.withTabs ? "panel panel-border panel-scroll-with-tabs" : "panel panel-border panel-scroll"} >
        {this.props.resources ?
          <div>
            <Overview
              {...this.props}
              title="Resources"
              icon="cloud"
              links={this.props.resources}
            />
            {this.props.linkToAllResources ?
            <div className="panel-text-small padding-left">
              <IconLabelLink link={"/tools-" + this.props.shortName} icon="arrow-right" color={this.props.color} label="more..." />
            </div>
            : "" }
          </div>
          : ""
        }
        {this.props.products ?
          <div>
            <Overview
              {...this.props}
              title="Products"
              icon="app"
              links={this.props.products}
            />
            {this.props.linkToAllResources ?
            <div className="panel-text-small padding-left">
              <IconLabelLink link="/tools" icon="arrow-right" color={this.props.color} label="more..." />
            </div>
            : "" }
          </div>
          : ""
        }

        {this.props.slack ?
          <div>
            <Overview
              {...this.props}
              title="Collaborate"
              description="Use the following Slack channels for questions about offerings or general queries:"
              icon="team"
              links={this.props.slack}
            />
            {this.props.contacts && this.props.contacts.length > 0 ?
              <div className="padding-all">
                <p className="panel-text-small padding-bottom">
                  For more details, contact:
                </p>
                {this.props.contacts.map((contact) =>
                  <UserProfile email={contact.email} />
                )}
              </div>
              : ""
            }
          </div>
          : ""
        }

        {this.props.stories ?
          <div>
            <Overview
              {...this.props}
              title="News"
              icon="star-filled"
              links={this.props.stories}
            />
            <div className="panel-text-small padding-left">
              <IconLabelLink link="https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W6f5f4f328374_49e1_b442_3add463eae15/page/Archived%20News" icon="arrow-right" color={this.props.color} label="more..." />
            </div>
          </div>
          : ""
        }
        {this.props.blogs ?
          <div>
            <Overview
              {...this.props}
              title={this.props.title ? this.props.title : "Blogs"}
              icon="blog"
              links={this.props.blogs}
            />
            {this.props.linkToAllResources ?
            <div className="panel-text-small padding-left">
              <IconLabelLink link="/blogs" icon="arrow-right" color={this.props.color} label="more..." />
            </div>
            : "" }
          </div>
          : ""
        }
        {this.props.tracks ?
          <div>
            <Overview
              {...this.props}
              title="Focus Areas"
              icon="cloud"
              links={this.props.tracks}
            />
          </div>
          : ""
        }
        {this.props.learn ?
          <div>
            <Overview
              {...this.props}
              title="Learn"
              icon="recommend"
              links={this.props.learn}
            />
          </div>
          : ""
        }

      </div>
    );
  }
  render() {
    return this.props.banner ?
      (

        <div className="panel panel-max-content tdsm-blue tdsm-font-white padding-all justify-center" >
          <div className="font-bold">{this.props.banner}</div>
          {(this.getNotices())}
        </div>
      )
      : (<div className="panel">{this.getNotices()}</div>);
  }
}
/**
 * Type checking
 */
NoticeBoard.propTypes = {
  color: PropTypes.string,
  tags: PropTypes.array,
  stories: PropTypes.array,
  blogs: PropTypes.array,
  resources: PropTypes.array,
  products: PropTypes.array,
  contacts: PropTypes.array,
  latest: PropTypes.bool,
  shortName: PropTypes.string
}
/**
* Default values
*/
NoticeBoard.defaultProps = {
  latest: false
}

export default NoticeBoard;
