import React, { Component } from 'react';
import '../style/404.css';
import { Tile } from 'carbon-components-react';

const sf = require('../components/SharedFunctions');

var iconColors = ["red", "yellow", "green", "blue", "mid-blue", "light-grey"];
var icons = ["cloud", "team", "tag", "alert", "bee", "app", "recommend", "tool", "video", "help", "info", "star-filled", "document", "blog", "event", "wiki", "at", "chat", "launch", "download", "arrow-right", "link", "user", "slack"];

class Palette extends Component {
    render() {
        icons.sort(function (a, b) {
            if (a < b) { return -1; }
            if (a > b) { return 1; }
            return 0;
        });
        return (
            <div>
                <div className="tile-container">
                    <div className="cols-2 tdsm-color-palette-tile">
                        <Tile className="tdsm-light-grey"><p>light-grey</p><p>#f1f0ee</p></Tile>
                        <Tile className="tdsm-dark-blue"><p>dark-blue</p><p>#000912</p></Tile>
                    </div>
                    <div className="cols-2 tdsm-color-palette-tile">
                        <Tile className="tdsm-red"><p>red</p><p>#dd2113</p></Tile>
                        <Tile className="tdsm-yellow"><p>yellow</p><p>#f9dc66</p></Tile>
                        <Tile className="tdsm-green"><p>green</p><p>#32af76</p></Tile>
                        <Tile className="tdsm-blue"><p>blue</p><p>#0370b0</p></Tile>
                        <Tile className="tdsm-mid-blue"><p>mid-blue</p><p>#012f59</p></Tile>
                    </div>

                    <div className="cols-2 tdsm-color-palette-tile tdsm-icon-tile-wrap">
                        {icons.map((icon) => (
                            <Tile key={"icon_" + icon} className="">
                                <p>{icon}</p>
                                {iconColors.map((col) => (
                                    <span key={"color_" + col} className={"tdsm-icon-palette-tile " + sf.getIconCSS("icon-" + icon, col)}></span>
                                ))}
                            </Tile>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Palette;