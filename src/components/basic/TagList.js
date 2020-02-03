import React, { Component } from 'react';
import { Tag } from 'carbon-components-react';
import PropTypes from 'prop-types';

/**
 * Display a list of tags
 *
 * @visibleName TagList
 */
class TagList extends Component {

    constructor(props) {
        super(props);
        this.getTagColor = this.getTagColor.bind(this);
    }

    getTagColor(tag) {
        switch (tag) {
            case "devops":
            case "urbancode":
            case "rational":
            case "deploy":
            case "develop":
                return "blue";
            case "csmo":
            case "log-analysis":
            case "monitor":
            case "manage":
            case "noi":
                return "red";
            default:
                return "green"
        }
    }
    render() {
        var tags;
        var body;

        tags = this.props.sample.tags ?
            this.props.sample.tags.map((tag, index) => {
                return <Tag key={index} className="margin-right" type={this.getTagColor(tag)} disabled={false}>
                    {tag}
                </Tag>
            })
            : ""

        body = this.props.prefix === true ?
            <div className="display-flex panel-text-small justify-left">
                <p className="panel-text-small display-flow margin-right align-center">
                    Tags:
                    {tags}
                </p>
            </div >
            : <div className={"justify-" + this.props.justify + " display-flow panel-text-small"}>
                {tags}
            </div >

        return (
            <div>
                {body}
            </div>

        )
    }
}

/**
 * Type checking
 */
TagList.propTypes = {
    sample: PropTypes.object,
    prefix: PropTypes.bool,
    justify: PropTypes.string
}
/**
* Default values
*/
TagList.defaultProps = {
    sample: {},
    prefix: true,
    justify: "right"
}

export default TagList;