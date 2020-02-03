import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/**
 * Display FeedbackButton page
 *
 * @visibleName FeedbackButton
 */
class FeedbackButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        var mail = document.createElement("a");
        mail.href = "mailto:louise@uk.ibm.com";
        mail.click();
        console.log('louise FeedbackButton', e);
    }

    render() {
        const { match } = this.props;
        return (
            match.params.pageId !== "feedback" ?
                <div className="text-align-center padding-all">
                    <a className="no-link curved-edge community-action-button padding-all" href="mailto:louise@uk.ibm.com,david@uk.ibm.com?subject=CoP Site Feedback" target="_blank" rel="noopener noreferrer" ><strong>Feedback</strong></a>
                </div>
                : ""
        );
    }
}


// onClick={(e) => this.handleClick(e)}

/**
 * Type checking
 */
FeedbackButton.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
    buttonLabel: PropTypes.string
}

/**
 * Default values
 */
FeedbackButton.defaultProps = {
    title: '',
    subTitle: '',
    icon: 'chat',
    buttonLabel: 'Feedback'
}


export default withRouter(FeedbackButton);
