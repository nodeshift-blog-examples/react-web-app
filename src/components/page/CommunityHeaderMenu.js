import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
// import { Button } from 'carbon-components-react';
import FeedbackButton from './FeedbackButton';
// import axios from 'axios';

const sf = require('../SharedFunctions');


// const menuItems = [
//     { label: "CSMO", link: "csmo" },
//     { label: "DevOps", link: "devops" },
//     { label: "Traditional IT", link: "tradit" }
// ];

/**
 * Display HeaderMenu page
 *
 * @visibleName HeaderMenu
 */
class CommunityHeaderMenu extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    addMenuButton(index, href, label) {
        const buttonCss = "ds-button ds-flat tray-nav-close ds-mar-b-0 header-menu-button";
        var button = this.props.selectedIndex === index ? buttonCss + " ds-current" : buttonCss;
        console.log('button: ', button);
        return (
            <div className="ds-col-lg-2 ds-hide ds-display-lg-inline-block ds-no-gutter">
                <NavLink className={button} to={href}>{label}</NavLink>
            </div>
        );
    }

    // handleClick(e) {
    //     e.preventDefault();
    //     console.log('louise feedback', e);
    //     axios.post(`https://hooks.slack.com/services/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`,{headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'content-type': 'application/json'
    //       }}, {"text": "Hello, world."})
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })    
    // }

    // addDropDownMenu(menuItemLabel) {
    //     const section = menuItemLabel === "HOME" ? "" : menuItemLabel.toLowerCase() + "/";
    //     return (
    //         <div className="ds-col-lg-2 ds-hide ds-display-lg-inline-block">
    //             <div className="ds-dropdown ds-flat ds-mar-b-0 header-menu-button" tabIndex="0" onClick={(e) => this.handleClick}>
    //                 <div className="ds-title">{menuItemLabel}</div>
    //                 <div className="ds-options communitymenudropdown " aria-hidden="true">
    //                     {menuItems.map((item, index) => {
    //                         return (
    //                             <NavLink key={index}
    //                                 exact to={"/" + section + item.link}
    //                                 className="no-link"
    //                             >
    //                                 <div className="ds-option" >
    //                                     {item.label}
    //                                 </div>
    //                             </NavLink>
    //                         )
    //                     })}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        console.log('CommunityHeaderMenu', this.props, this.state);
        return (
            <header>
                <nav>
                    <div className="ds-col-xs-8 ds-col-lg-8">
                        <div className="header-menu-tab">
                            {this.addMenuButton(0, "/", "HOME")}
                            {this.addMenuButton(2, "/events", "EVENTS")}                            
                            {this.addMenuButton(3, "/channel", "WATCH")}
                            {this.addMenuButton(1, "/tools", "TOOLS")}                            
                            {this.addMenuButton(4, "/blogs", "BLOGS")}
                        </div>
                    </div>
                </nav>
                <div className="ds-col-xs-1 ds-col-lg-1 feedback-button">
                        <FeedbackButton buttonLabel={this.props.buttonLabel} />
                    </div>

                <div className="header-signin">

                    <Link to="/about">
                        <span className={"fixed-right display-block " + sf.getIconCSS("icon-info", "white")}></span>
                    </Link>

                    {/* <span id="user"></span>
                    <a href="/login">Sign In</a>
                    <span className="ds-icon-profile"></span>
                    <img _ngcontent-c2="" alt="user avatar" className="account__icon ng-tns-c2-1 ng-star-inserted" onError={this.src='./assets/icon/icon-profile.svg'} src="https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/LOUISE@uk.ibm.com"></img>  */}
                </div>
            </header >

        );

    }
}

/**
 * Type checking
 */
CommunityHeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

/**
 * Default values
 */
CommunityHeaderMenu.defaultProps = {
    title: '',
    subTitle: 'Hybrid DevOps and Service Management community',    
}


export default CommunityHeaderMenu;
