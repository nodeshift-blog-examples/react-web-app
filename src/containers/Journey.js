import React, { Component } from 'react';
import Wheel from '../components/Wheel';
const sf = require('../components/SharedFunctions');

/**
 * Display Journey page
 *
 * @visibleName Journey
 */
class Journey extends Component {
  render() {
    return (
      <div className="display-flex">
        <Wheel />
        <div className="">

          <div className="ds-panel ds-panel-raised">
            <div className="ds-panel-container">
              <h2 className="ds-mar-t-0">
                <span className={"display-block " + sf.getIconCSS("icon-cloud", "blue")}></span>
                <span className="ds-mar-l-1">Links</span>
              </h2>
              <p className="ds- ds-text-small ds-text-align-left ds-mar-t-1">
                {this.props.summary}
              </p>

              <div className="ds-hr"></div>

              <ul class="ds-list-unordered ds-hover">
                <li>
                  <a href="https://orgs.w3ibm.mybluemix.net/#/org/9fb321ca-1b7b-4853-9ca7-f6fbe0349f14" target="_blank" rel="noopener noreferrer" >
                    <span class="ds-icon-dashboard ds-pad-r-2" aria-label="dashboard" ></span>CIO Cloud Services Organization: tech-devops-svcmgmt application
              </a>
                </li>
                <li>
                  <a href="https://console.w3ibm.bluemix.net/" target="_blank" rel="noopener noreferrer" >
                    <span class="ds-icon-cloud ds-pad-r-2" aria-label="dashboard" ></span>Cloud console
              </a>
                </li>
                <li>
                  <a href="https://www.ibm.com/cloud/garage/practices/overview" target="_blank" rel="noopener noreferrer" >
                    <span class="ds-icon-settings ds-pad-r-2" aria-label="dashboard" ></span>Garage practices
                </a>
                </li>
                <li>
                  <a href="https://www.ibm.com/cloud/blog/creating-apps-on-ibm-cloud" target="_blank" rel="noopener noreferrer" >
                    <span class="ds-icon-settings ds-pad-r-2" aria-label="dashboard" ></span>Creating apps on IBM Cloud
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Journey;
