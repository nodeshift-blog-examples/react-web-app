import React, { Component } from 'react';
import IconLabelLink from './IconLabelLink';
import PropTypes from 'prop-types';

/**
 * Display a list of links (URLs) prefixed with icon 
 *
 * @visibleName URLList
 */
class URLList extends Component {

    render() {
        return (
            this.props.links && this.props.links.length > 0 ?
                <div className="display-flex panel-text-small justify-left">
                    <ul className="panel-text-small">
                        {this.props.links.map((d, index) =>
                            <li key={"link_" + index} className="panel-text-li">
                                <IconLabelLink link={d.link.url} icon={d.link.icon ? d.link.icon : this.props.icon} color={d.link.color ? d.link.color : this.props.color} label={d.link.label} />
                            </li>
                        )}
                    </ul>
                </div>
                : <div className="panel-text-small">
                    No links yet...
                </div>
        )
    }
}

/**
 * Type checking
 */
URLList.propTypes = {
    links: PropTypes.array,
    icon: PropTypes.string
}
/**
* Default values
*/
URLList.defaultProps = {
    links: [],
    icon: "arrow-right"
}

export default URLList;