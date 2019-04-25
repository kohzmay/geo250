import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './navbar';
import HomePage from './homePage';
import AboutDerechosPage from './aboutDerechosPage';
import ResourcesPage from './resourcesPage';

import '../css/index.css';
import '../css/homePage.css';
import '../css/navbar.css';
import '../css/aboutDerechosPage.css';
import '../css/resourcesPage.css';

const Routes = () => (
  <Router history={require("history").createBrowserHistory}>
    <Navbar />
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about-derechos" component={AboutDerechosPage} />
      <Route path="/resources" component={ResourcesPage} />
    </div>
  </Router>
);

export default Routes;
