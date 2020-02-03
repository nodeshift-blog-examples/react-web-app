import React, { Component } from 'react';
import Overview from '../components/ui/Overview';

const m = require('../data/members');
const sf = require('../components/SharedFunctions');

/**
 * Display About page
 *
 * @visibleName About
 */
class About extends Component {
  render() {
    const leaders = sf.filterDataByTag(m.JSON_MEMBERS, "owner");
    const users = sf.filterDataByTag(m.JSON_MEMBERS, "team");
    return (
      <div className="display-flex">
        <div className="cols-4">
          <Overview
            title="Community Owners"
            description="Contact Andrea or David if you'd like to present or get involved."
            icon="team"
            users={leaders}
          />
        </div>
        <div className="cols-4">
          <Overview
            title="The Team"
            description="Post a message on slack <a href='https://ibm-cloud.slack.com/archives/C6D6WHDGX' target='_blank' rel='noopener noreferrer' > #tech-devops-svcmgmt</a> or contact the team if you'd like to find out more about a topic or solution."
            icon="team"
            users={users}
          />
        </div>
        <div className="cols-4">
          <Overview
            title="The Members"
            description="Collaborate with Cloud DevOps and Service Management experts from Services, Support, Technical Sales and Product development  on slack <a href='https://ibm-cloud.slack.com/archives/C6D6WHDGX' target='_blank' rel='noopener noreferrer' > #tech-devops-svcmgmt</a>  ."
            icon="team"
          />
          <Overview
            title="Community Archive"
            description="Miss <a href='http://tinyurl.com/y7sj5sv9' target='_blank' rel='noopener noreferrer' > the old community</a>? - please let us know if we've not migrated your favourite page."
            icon="wiki"
          />
          <Overview
            title="Our Journey"
            description="Find out  <a href='https://pages.github.ibm.com/tech-devops-svcmgmt/tdsm-community/' >how we have transitioned</a> from the old to new community hub and contact us if you'd like to get involved..."
            icon="bee"
          />

        </div>

      </div>
    );
  }
}

export default About;
