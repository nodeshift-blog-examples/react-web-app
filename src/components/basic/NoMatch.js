import React, { Component } from 'react';
import '../../style/404.css';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <div className="notfound">
                    <div className="notfound-code">4<span>0</span>4</div>
                    <p>SORRY, THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAS BEEN REMOVED, NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
                </div>
            </div>
        );
    }
}

export default NoMatch;