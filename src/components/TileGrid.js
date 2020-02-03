import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from '../components/basic/Tile';
import IconTitleSummary from './basic/IconTitleSummary';

const sf = require('./SharedFunctions');

/**
 * Display grid of tiles
 *
 * @visibleName TileGrid
 */
class TileGrid extends Component {

  render() {
    var tiles = sf.filterDataByTag(this.props.data, this.props.tag);
    console.log(tiles);
    return (
      <div className={"cols-" + this.props.width + " panel tile-container-padding-right"}>
        <IconTitleSummary {...this.props} />
        <div className="tile-container padding-top justify-center">
          {tiles.map((t, index) => {
            return (
              <Tile
                key={"tile_" + index}
                title={t.link.label}
                url={t.link.url}
                imageCss={t.imageCss}
                description={t.description}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

/**
 * Type checking
 */
TileGrid.propTypes = {
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
TileGrid.defaultProps = {
  summary: '',
  data: [],
  width: "6",
  tag: '',
}

export default TileGrid;
