import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import IconLabelLink from '../basic/IconLabelLink';
import { Accordion, AccordionItem } from "carbon-components-react";

/**
 * ServiceOfferingAccordion component contains a header and progress indicator with tooltip hover for more details
 *
 * @visibleName ServiceOfferingAccordion
 */
class ServiceOfferingAccordion extends Component {

    log(caller) {
        console.log('caller:', caller);
    }

    render() {
        return (
            <div className="panel panel-border">
                <Overview
                    title={this.props.title}
                    description={this.props.summary}
                    color={this.props.color}
                    icon="app"
                />
                <Accordion className="scroll accordion-panel-max-content panel-text-small">
                    {this.props.data.offering.map((o, index) => {
                        return <AccordionItem
                            className="overflow-none"
                            title={o.name}
                            onClick={this.log('onClick AccordionItem')}
                            onHeadingClick={this.log('onHeadingClick')}
                            children={
                                <div>
                                    {o.description}
                                    <div className="display-flex padding-top">
                                        <div className="col-half">
                                            <IconLabelLink className="padding-top" link={o.link.url} icon="arrow-right" label="Learn More" />
                                        </div>
                                        {o.id ? <span className="col-float-right">({o.id})</span> : ""}
                                    </div>
                                </div>}>
                        </AccordionItem>
                    })}
                </Accordion>
            </div>
        );
    }
}

// {/* <ProgressIndicator currentIndex={this.props.progressIndex}>
//     {this.addAllProgressSteps()}
// </ProgressIndicator>
// <p class='padding-all panel-text-small'>
//     Visit <a target="_blank" rel="noopener noreferrer" href={this.props.summaryFooter.url}>{this.props.summaryFooter.label}</a> to browse all {this.props.title}.
// </p> */}

/**
 * Type checking
 */
ServiceOfferingAccordion.propTypes = {
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
ServiceOfferingAccordion.defaultProps = {
    title: '',
    iconCss: '',
    iconColor: 'green',
    data: {},
    summary: '',
    summaryFooter: {},
    progressIndex: -1,
}

export default ServiceOfferingAccordion;
