import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from '../components/basic/Tile';
import IconTitleSummary from './basic/IconTitleSummary';

const sf = require('./SharedFunctions');

/**
 * Display grid of tiles
 *
 * @visibleName TileTabs
 */
class TileTabs extends Component {

  render() {
    var tiles = sf.filterDataByTag(this.props.data, this.props.tag);
    
    return (
      <div className={"cols-" + this.props.width + " tile-container-padding-right"}>
        <IconTitleSummary {...this.props} />
        <div className="tile-container padding-left justify-left">
          {tiles.map((t, index) => {
            return (
              <div>
                <Tile
                  key={"tile_" + index}
                  title={t.link.label}
                  url={this.props.selected ? "/tools-" + t.link.url.substr(1, t.link.url.length) : t.link.url}
                  tooltipUrl={t.link.url}
                  imageCss={Number(this.props.selected) === index ? t.imageCss : t.imageCss + "-disabled"}
                  description={t.description}
                  selected={index === Number(this.props.selected) ? true : false}
                />
              </div>
            )
          })}
          <div className="header-menu-separator"></div>
        </div>
      </div>
    );
  }
}

/**
 * Type checking
 */
TileTabs.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  summary: PropTypes.string,
  data: PropTypes.array.isRequired,
  tag: PropTypes.string,
  width: PropTypes.string,
}
/**
* Default values
*/
TileTabs.defaultProps = {
  summary: '',
  data: [],
  width: "6",
  tag: '',
}

export default TileTabs;
