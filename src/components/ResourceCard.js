import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from '../components/ui/Overview';
/**
 * Display Resource card 
 *
 * @visibleName Resource
 */
class ResourceCard extends Component {

  render() {
    console.log('ResourceCard', this.props);
    return (
      <div className="panel panel-border">
        <Overview {...this.props} />

        <h5 className="">Learn</h5>
        <ul className="panel-text-small">
          {this.props.data.map((d, index) =>
            <li key={"resource_" + index} className="panel-text-li">
              <a href={d.link.url} target="_blank" rel="noopener noreferrer"
                className="ds-text-neutral-8 ds-font-weight-light" alt={d.link.label}>
                {d.link.label}
              </a>
              {d.badge ? (
                <span>
                  <span className="ds-pad-l-1 ds-icon-size-small ds-icon-star-fill ds-text-contextual-green-3"></span>
                  <a href={d.badge.link.url} target="_blank" rel="noopener noreferrer"
                    className="ds-text-neutral-8 ds-font-weight-light" alt={d.badge.link.label}>
                    Get badge
                      </a>
                </span>
              ) : ''}

            </li>
          )}
        </ul>
      </div>


    );
  }
}

//       {/* <IconTitle title={this.props.title} subTitle={this.props.subTitle} icon={this.props.icon} color={this.props.iconColor} />

// <Separator />
// <p className=" panel-text-small">
//   {this.props.summary}
// </p> */}

/**
 * Type checking
 */
ResourceCard.propTypes = {
  title: PropTypes.string,
  iconCss: PropTypes.string,
  iconColor: PropTypes.string,
  data: PropTypes.array,
  width: PropTypes.string,
  summary: PropTypes.string,
  summaryFooter: PropTypes.object,
  progressIndex: PropTypes.number,
}
/**
* Default values
*/
ResourceCard.defaultProps = {
  title: '',
  iconCss: '',
  iconColor: 'green',
  data: [],
  width: 4,
  summary: '',
  summaryFooter: {},
  progressIndex: -1,
}

export default ResourceCard;
