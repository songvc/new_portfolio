import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import normalize from 'normalize.css';

import FrontPage from '../components/FrontPage';
import Blog from '../components/blog';
import Lab from '../components/lab';
import Mixin from '../components/mixin';
import Portfolio from '../components/portfolio';


const route = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage} />
    <Route path="/blog" component={Blog} />
    <Route path="/lab" component={Lab} />
    <Route path="/mixin" component={Mixin} />
    <Route path="/Portfolio" component={Portfolio} />
  </Router>
);

export default route;
