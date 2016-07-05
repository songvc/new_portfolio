import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import normalize from 'normalize.css';
import { StyleRoot } from 'radium';

import FrontPage from '../components/MainPages/FrontPage';
import BlogPage from '../components/MainPages/BlogPage';
import LabPage from '../components/MainPages/LabPage';
import PortfolioPage from '../components/MainPages/PortfolioPage';

const rootStyle = {
  "height": "inherit"
}

const route = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/lab" component={LabPage} />
    <Route path="/portfolio" component={PortfolioPage} />
    <Route path="/admin" component={Admin} />
  </Router>
);

export default route;
