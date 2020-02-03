import React, { Component } from 'react';
import Image from '../components/basic/Image';
import Overview from '../components/ui/Overview';
import URLList from '../components/basic/URLList';

const videos = [
  {
    link:
    {
      label: "CSMO playlist",
      url: "https://secure.video.ibm.com/channel/23645120/playlist/518837",
      icon: "video"
    }
  },
  {
    link: {
      label: "DevOps playlist",
      url: "https://secure.video.ibm.com/channel/23645120/playlist/518678",
      icon: "video"
    },
  },
  {
    link: {
      label: "Traditional IT playlist",
      url: "https://secure.video.ibm.com/channel/23645120/playlist/519110",
      icon: "video"
    },
  },
  {
    link: {
      label: "MCM playlist",
      url: "https://secure.video.ibm.com/channel/23645120/playlist/500457",
      icon: "video"
    },
  },
]

/**
 * Display Channel page
 *
 * @visibleName Channel
 */
class Channel extends Component {
  render() {
    const color = this.props.color ? this.props.color : "red"
    return (
      <div className="display-flex">
        <div className="cols-3">
          <Overview
            title="Community Video"
            description="<p class='panel-text-small'>We are using IBM Watson Media Enterprise Portal to broadcast live sessions and publish video replays from the Hybrid DevOps and Service Management series.</p><br/><p class='panel-text-small'>Watch the main channel from within this community page or watch videos from our playlists:</p>"
            color={color}
            icon="video"
          />
          <div className="padding-left">
            <URLList links={videos} color={color} />
          </div>
          <div className="padding-left padding-right">
            <p className="panel-text-small">
              <strong>Can't see the video?</strong> - Watch directly on <a href="https://sme.video.ibm.com/channel/23645120" target="_blank" rel="noopener noreferrer" ><strong>Watson Media</strong>
                <Image filename='CloudVid.png' />
              </a>
            </p>
          </div>
          <div className="padding-top">
            <Overview
              title="Download presentations"
              icon="download"
              link="https://apps.na.collabserv.com/files/app#/folder/f80ee945-2ee6-45f5-9e35-fe0663d7bf0d"
              color={color}
              description="Download presentations and other resources associated with the videos."
            />
          </div>
        </div>

        <div className="container-col-9 scroll">
          <span className="click-detector ">
            <span className="click-detector click-reporter ">
              <span className="html-injector-target ">
                <iframe
                  className="channel"
                  title="community channel"
                  src="https://video.ibm.com/internal/combined-embed/23645120?videos=gallery&html5ui&autoplay=false"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-pointer-lock" >
                </iframe>
              </span>
            </span>
          </span>
        </div >
      </div >
    );
  }
}

export default Channel;
