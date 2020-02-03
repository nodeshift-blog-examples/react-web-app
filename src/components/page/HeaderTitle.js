import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logoSlack from "../../images/icon-slack.svg";

/**
 * Display HeaderTitle page
 *
 * @visibleName HeaderTitle
 */
class HeaderTitle extends Component {

    render() {
        return (
            <div className="display-flex">
                <div className="display-block community-page-footer-left community-page-header">
                    <h4 className="community-page-header-text-small">
                        {this.props.title}
                    </h4>
                </div>
                <div className="display-block ">
                    <h4 className="community-page-header-text-small header-float-right">                    
                        <a target="_blank" rel="noopener noreferrer" href="https://ibm-cloud.slack.com/archives/C6D6WHDGX" className=" no-link tdsm-font-white">
                            <img src={logoSlack} className="footer-icon" alt="slack channel"></img>                    
                            Connect - Communicate - Collaborate
                        </a>
                    </h4>
                </div>
            </div>
        );
    }
}

/**
 * Type checking
 */
HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

/**
 * Default values
 */
HeaderTitle.defaultProps = {
    title: '',
    subTitle: '',
}


export default HeaderTitle;
