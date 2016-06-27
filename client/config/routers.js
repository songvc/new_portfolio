import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import normalize from 'normalize.css';
import { StyleRoot } from 'radium';

import FrontPage from '../components/Pages/FrontPage';
import BlogPage from '../components/Pages/BlogPage';
import LabPage from '../components/Pages/LabPage';
import MixinPage from '../components/Pages/MixinPage';
import PortfolioPage from '../components/Pages/PortfolioPage';

const rootStyle = {
  "height": "inherit"
}

const route = (
  <StyleRoot style={rootStyle}>
    <Router history={browserHistory}>
      <Route path="/" component={FrontPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/lab" component={LabPage} />
      <Route path="/mixin" component={MixinPage} />
      <Route path="/Portfolio" component={PortfolioPage} />
    </Router>
  </StyleRoot>
);

export default route;
