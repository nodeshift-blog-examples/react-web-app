import React, { Component } from 'react';
import TileTabs from '../components/TileTabs';
import TileGrid from '../components/TileGrid';
import NoticeBoard from '../components/ui/NoticeBoard';

const g = require('../data/General');
const json = require('../data/json');
const sf = require('../components/SharedFunctions');

/**
 * Display Resources page
 *
 * @visibleName Resources
 */
class Resources extends Component {

  handleClick() {
    console.log('clicked');
  }

  getTabContent() {
    var data, color;
    switch (Number(this.props.selectedTab)) {
      case 0:
        data = json.JSON_DEVOPS;
        color = "blue";
        break;
      case 1:
        data = json.JSON_MCM;
        color = "green";
        break;
      case 2:
        data = json.JSON_CLOUDPAK_SYSTEM;
        color = "mid-blue";
        break;
      case 3:
        data = json.JSON_CSMO;
        color = "red";
        break;
      case 4:
        data = json.JSON_TRADITIONAL_IT;
        color = "yellow";
        break;
      default:
        break;
    }
    return (
      <div className="display-flex">
        <div className="cols-4">
          <NoticeBoard
            color={color}
            resources={sf.filterDataByTag(data.resources, "general")}
            withTabs
          />
        </div>
        <div className="cols-4">
          <NoticeBoard
            color={color}
            products={data.products}
            withTabs
          />
        </div>
        <div className="cols-4">
          <NoticeBoard
            color={color}
            learn={sf.filterDataByTag(data.resources, "learn")}
            withTabs
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="display-flex">
        <TileGrid
          title="Popular Tools"
          color="yellow"
          icon="tool"
          summary={["Use to configure solutions for learning, sharing and demonstration."]}
          width="3"
          data={g.COMMUNITY_LINKS}
          tag="tool"
        />
        <div className="display-flex flex-col cols-9">
          <div className="cols-12 display-contents">
            <TileTabs
              noSeparator
              width="12"
              data={g.COMMUNITY_LINKS}
              tag="theme"
              selected={this.props.selectedTab}
            />
          </div>
          {this.getTabContent()}
        </div>
      </div>);
  }
}

export default Resources;
