import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ "height": "100vh" }}>
        <video autoPlay muted loop id="myVideo">
          <source src="media/introVideo.mp4" type="video/mp4" />
        </video>

        <div className="overlay">

          <div className="content">
            <h1 style={{ "letterSpacing": "3px" }}>The Derecho</h1>
            <h1>Storm of 2012</h1>
            <div className="botBorder"></div>
            <p id="introP">Revisit the Ohio Valley/Mid-Atlantic Derecho of 2012, the terrible storm that devastated
            the Midwest and the mid-Atlantic.</p>
          </div>

          <img onClick={() => {this.props.scrollTo()}} src="media/downArrow.png" width="50px" height="50px" id="arrow" />
        </div>
      </div>
    );
  }

}

export default Intro;
