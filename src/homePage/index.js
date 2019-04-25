import React, { Component } from 'react';
import './index.css';

import Intro from './components/intro';
import DerechoEvent from './components/derechoEvent';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.derechoSection = React.createRef();
  }

  scrollTo() {
    window.scrollTo(0, this.derechoSection.current.offsetTop);
  }

  render() {
    return (
      <div className="main">
        <Intro scrollTo={this.scrollTo} />

        <div ref={this.derechoSection}>
          <DerechoEvent />
        </div>
      </div>
    );
  }
}

export default HomePage;
