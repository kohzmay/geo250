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
          <Route exact path="https://kohzmay.github.io/geo250/" component={HomePage} />
          <Route path="https://kohzmay.github.io/geo250/about-derechos" component={AboutDerechosPage} />
          <Route path="https://kohzmay.github.io/geo250/resources" component={ResourcesPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
