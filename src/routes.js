import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './navbar';
import HomePage from './homePage';
import AboutDerechosPage from './aboutDerechosPage';
import ResourcesPage from './resourcesPage';

class Routes extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-derechos" component={AboutDerechosPage} />
          <Route path="/resources" component={ResourcesPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
