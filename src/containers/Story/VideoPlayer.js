import React, { Component } from 'react'

class YouTube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMaximized: false,
    }
    this.videoURL = ''
  }

  render() {
    this.videoURL = "https://www.youtube.com/embed/" +
    this.props.video + "?autoplay=" +
    this.props.autoplay + "&rel=" +
    this.props.rel + "&modestbranding=" +
    this.props.modest

    if (this.state.isMaximized) {
      return (
        <div className="container">
          <iframe
            className="player"
            type="text/html"
            width="100%"
            height="100%"
            src={this.videoURL}
            frameBorder="0"
          />
        </div>
      )
    }
    return (
      <div className="container">
        <h2></h2>
        {/* <iframe
          className="player"
          type="text/html"
          width="100%"
          height="100%"
          src={this.videoURL}
          frameBorder="0"
        /> */}
      </div>
    )
  }
}

export default YouTube
