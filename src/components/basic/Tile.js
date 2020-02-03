import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'carbon-components-react';
import LinkURL from './LinkURL';

/**
 * Display Tile 
 *
 * @visibleName Tile
 */
class Tile extends Component {

  render() {
    var tileCss = this.props.selected ? "display-block tile-icon tile-icon-selected " : "display-block tile-icon " 
    return (
      <div className="tile">
        <LinkURL iconCss={tileCss + this.props.imageCss} link={this.props.url} />
        {this.props.title ?
          <div className="tile display-flex ">
            <span className="tile-title display-block">
              <Tooltip clickToOpen triggerText={this.props.title} tabIndex={0}>
                <p className="tile-title">
                  {this.props.description}
                </p>
                <div className="bx--tooltip__footer">
                  <a href={this.props.tooltipUrl ? this.props.tooltipUrl : this.props.url} className="bx--link">
                    Learn More
                </a>
                </div>
              </Tooltip>
            </span>
          </div>
          : ""}
      </div>
    );
  }
}

/**
 * Type checking
 */
Tile.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  tooltipUrl: PropTypes.string,
  description: PropTypes.string,
  imageCss: PropTypes.string,
  selected: PropTypes.bool
}
/**
* Default values
*/
Tile.defaultProps = {
  title: '',
  url: '',
  description: '',
  imageCss: ''
}

export default Tile;
