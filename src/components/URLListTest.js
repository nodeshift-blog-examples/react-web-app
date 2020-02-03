import React, { Component } from 'react';
import IconTitle from './basic/IconTitle';
import Separator from './basic/Separator';
import URLList from './basic/URLList';

/**
 * Display a list of tags
 *
 * @visibleName URLListTest
 */
class URLListTest extends Component {

    render() {

        const data = this.props.links ? this.props.links : [];//json.JSON_DEVOPS.resources;
        return (
            <div>
                <IconTitle
                    title={this.props.title ? this.props.title : "Related Links"}
                    icon={this.props.icon ? this.props.icon : "document"}
                    color={this.props.iconColor ? this.props.iconColor : "blue"}
                />
                <Separator />
                <URLList links={data} />
            </div>
        )
    }
}

export default URLListTest;