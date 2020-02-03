import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Separator from './basic/Separator';
const sf = require('./SharedFunctions');
/**
 * Display Resource card 
 *
 * @visibleName Resource
 */
class BlogCard extends Component {

  render() {
    console.log(this.props);
    return (
      <div className={"cols-" + this.props.width}>
        <div className="panel panel-border">
          <h4 className="display-flex">
            <span className={"display-block " + sf.getIconCSS(this.props.imageCss, this.props.iconColor)}></span>
            <span className="title-padding">{this.props.title}</span>
          </h4>
          <Separator />
          <p className=" panel-text-small">
            {this.props.summary}
          </p>
          <h5 className="">Learn</h5>
          <ul className="panel-text-small">
            {this.props.data.blogs.map((d, index) => {
              return (
                <li key={"blog_" + index} className="ds-pad-l-0">
                  <a href={d.link.url} target="_blank" rel="noopener noreferrer"
                    className="ds-text-neutral-8 ds-font-weight-light" alt={d.link.label}>
                    {d.link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
/**
 * Type checking
 */
BlogCard.propTypes = {
  title: PropTypes.string,
  iconCss: PropTypes.string,
  iconColor: PropTypes.string,
  data: PropTypes.object,
  width: PropTypes.string,
  summary: PropTypes.string,
  summaryFooter: PropTypes.object,
  progressIndex: PropTypes.number,
}
/**
* Default values
*/
BlogCard.defaultProps = {
  title: '',
  iconCss: '',
  iconColor: 'green',
  data: {},
  width: 4,
  summary: '',
  summaryFooter: {},
  progressIndex: -1,
}

export default BlogCard;
