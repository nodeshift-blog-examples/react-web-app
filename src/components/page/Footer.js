import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoGithub from "../../images/logo-github.svg";
import logoSlack from "../../images/icon-slack.svg";
/**
 * Display Footer page
 *
 * @visibleName Footer
 */
class Footer extends Component {
  render() {
    return (
      <footer className="footer community-page-footer">
        <div className="community-page-footer-padding">
          <div className="bx--row">
            <div className="community-page-footer-left">
              <div className="footer-col">
                <h5 className="community-page-footer-header">Focus Areas</h5>
                <ul className="bx--list-unstyled bx--text-small">
                  <li className="bx--pad-l-0">
                    <Link to="/devops" className="font-weight-light" tabIndex="-1" >DevOps</Link>
                  </li>
                  <li className="bx--pad-l-0">
                    <Link to="/mcm" className="font-weight-light" tabIndex="-1" >MCM</Link>
                  </li>
                  <li className="bx--pad-l-0">
                    <Link to="/csmo" className="font-weight-light" tabIndex="-1" >CSMO</Link>
                  </li>
                  <li className="bx--pad-l-0">
                    <Link to="/system" className="font-weight-light" tabIndex="-1" >Cloud Pak System</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h5 className="community-page-footer-header">Accelerate</h5>
                <ul className="bx--list-unstyled bx--text-small">
                  <li>
                    <a href="https://www.ibm.com/cloud/blog"
                      target="_blank" rel="noopener noreferrer"
                      className="font-weight-light">
                      IBM Cloud Blog</a></li>
                  <li className="bx--pad-l-0">
                    <a href="https://w3.ibm.com/w3publisher/ibmcloud/resources"
                      target="_blank" rel="noopener noreferrer"
                      className="font-weight-light">
                      IBM Cloud Resources</a></li>
                  <li className="bx--pad-l-0">
                    <a href="https://ec.yourlearning.ibm.com/w3/series/10005049?other=All&track=All%20Tracks&layout=grid"
                      target="_blank" rel="noopener noreferrer"
                      className="font-weight-light">
                      Learning Series</a></li>
                  <li className="bx--pad-l-0">
                    <a href="https://www.ibm.com/cloud/garage/architectures"
                      target="_blank" rel="noopener noreferrer" className="font-weight-light">
                      Cloud Garage Architecture </a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h5 className="community-page-footer-header">Top Resources</h5>
                <ul className="bx--list-unstyled bx--text-small">
                  <li className="bx--pad-l-0">
                    <a href="https://ibm.seismic.com/X5/#/doccenter/6978143f-3408-4831-8558-9527b1279d8a/doc/%252FRecent%252Flf447e819c-4a29-49c5-aedd-1eaf15ac774c//?mode=view"
                      target="_blank" rel="noopener noreferrer" className="font-weight-light" alt="Zone for Accelerating Client Success">
                      Sales</a></li>
                  <li className="bx--pad-l-0">
                    <a href="https://soda.w3ibm.mybluemix.net/search?query=*&filters={%22segments%22:[%22Cloud%20Service%20Management%20and%20Operations%20(CSMO)%22,%22Management%20and%20Platform%22]}"
                      target="_blank" rel="noopener noreferrer" className="font-weight-light">
                      Service Offerings</a></li>
                  <li className="bx--pad-l-0">
                    <a target="_blank" rel="noopener noreferrer" href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Wf58c4c538dbf_45b4_b7a7_5003d0ceb79b/page/Client%20successes%20and%20references%20for%20Cloud%20Integration%20Services?section=MAP" className="font-weight-light">
                      Success Stories</a></li>
                  <li className="bx--pad-l-0">
                    <a href="https://developer.ibm.com/technologies/"
                      target="_blank" rel="noopener noreferrer" className="font-weight-light">
                      developerWorks</a></li>

                </ul>
              </div>
            </div>
            <div className="community-page-footer-right">
              <div className="footer-col">
                <ul className="bx--list-unstyled bx--text-small bx--pad-t-xs-1 bx--pad-t-md-2">
                  <li className="community-page-footer-item-padding">
                    <img src={logoGithub} className="footer-icon" alt="github repo" ></img>
                    <span className="bx--heading-4" ></span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.ibm.com/tech-devops-svcmgmt/tdsm-community" className="font-weight-light">
                      <strong>community</strong> on GitHub</a>
                  </li>
                  <li className="community-page-footer-item-padding">
                    <img src={logoGithub} className="footer-icon" alt="github repo" ></img>
                    <span className="bx--heading-4" ></span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.ibm.com/tech-devops-svcmgmt/tdsm-assets" className="font-weight-light">
                      <strong>assets</strong> on GitHub</a>
                  </li>
                  <li className="community-page-footer-item-padding">
                    <img src={logoSlack} className="footer-icon" alt="slack channel"></img>
                    <a target="_blank" rel="noopener noreferrer" href="https://ibm-cloud.slack.com/archives/C6D6WHDGX" className="font-weight-light">
                      <strong>tech-devops-svcmgmt</strong> Slack channel</a>
                  </li>
                  <li className="community-page-footer-item-padding">
                    <img src={logoGithub} className="footer-icon" alt="github repo" ></img>
                    <span className="bx--heading-4" ></span>
                    <a target="_blank" rel="noopener noreferrer" href="https://pages.github.ibm.com/tech-devops-svcmgmt/tdsm-community" className="font-weight-light">
                      <strong>our journey</strong> on GitHub Pages</a>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer >
    );
  }
}

export default Footer;
