import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressIndicator, ProgressStep, Tooltip } from 'carbon-components-react';
import Overview from './Overview';


/**
 * ServiceOfferingProgressCard component contains a header and progress indicator with tooltip hover for more details
 *
 * @visibleName ServiceOfferingProgressCard
 */
class ServiceOfferingProgressCard extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addProgressStep = this.addProgressStep.bind(this);
        this.addAllProgressSteps = this.addAllProgressSteps.bind(this);
    }

    addAllProgressSteps() {
        return this.props.data.offering.map((o, index) => {
            return this.addProgressStep(o.name, o.id, o.description, index, o.link);
        });
    }


    addProgressStep(title, id, description, index, link) {
        return (<ProgressStep key={"step_" + index} label={title} description={title}
            renderLabel={() => (
                <Tooltip
                    direction="bottom"
                    showIcon={false}
                    triggerClassName="bx--progress-label"
                    triggerText={title}
                    tooltipId={"tooltipId-"+index}
                >
                    <p>{description}</p>
                    <div className={`${index}--tooltip__footer`}>
                        <a href={link.url ? link.url : "/"} target="_blank" rel="noopener noreferrer" className={`${index}--link`}>
                            Learn More
                        </a>
                        {id}
                    </div>
                </Tooltip>
            )}
        />);
    }

    render() {
        return (
            <div className="panel panel-border height-half">
                <Overview
                    title={this.props.title}
                    description={this.props.summary}
                    color={this.props.color}
                    icon="app"
                />
                <p class="padding-all panel-text-small">Click on the buttons below to find out more about an offering...</p>
                <ProgressIndicator currentIndex={this.props.progressIndex}>
                    {this.addAllProgressSteps()}
                </ProgressIndicator>
                <p class='padding-all panel-text-small'>
                    Visit <a target="_blank" rel="noopener noreferrer" href={this.props.summaryFooter.url}>{this.props.summaryFooter.label}</a> to browse all {this.props.title}.
                </p>

            </div>
        );
    }
}


/**
 * Type checking
 */
ServiceOfferingProgressCard.propTypes = {
    title: PropTypes.string,
    iconCss: PropTypes.string,
    iconColor: PropTypes.string,
    data: PropTypes.object,
    summary: PropTypes.string,
    summaryFooter: PropTypes.object,
    progressIndex: PropTypes.number,
}
/**
 * Default values
 */
ServiceOfferingProgressCard.defaultProps = {
    title: '',
    iconCss: '',
    iconColor: 'green',
    data: {},
    summary: '',
    summaryFooter: {},
    progressIndex: -1,
}

export default ServiceOfferingProgressCard;
