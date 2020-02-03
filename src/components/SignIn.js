import React, { Component } from 'react';

/**
 * Display SignIn 
 *
 * @visibleName SignIn
 */
class SignIn extends Component {
    render() {
        console.log("​SignIn -> render -> this.props", this.props)
        return (
            <div aria-label="Sign In Card" role="region" className="panel hp-card sign-in-card ds-mar-b-2 ds-mar-l-1">
                <div className="sign-in-card__right w100">
                    <div className="panel panel-text-small">
                        
                        <span className="sign-in-card__content">Sign in to add comments and create new blog entries.</span>
                    </div>
                    <div className="panel panel-text-small">
                        <button className="ds-button ds-small sign-in-card__button phone-button" onClick={(e) => alert("Sorry... we are still working on it!")}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
