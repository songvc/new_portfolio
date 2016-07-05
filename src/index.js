import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

//orginal
import FrontPage from './components/MainPages/FrontPage';
import BlogPage from './components/MainPages/BlogPage';
import LabPage from './components/MainPages/LabPage';
import PortfolioPage from './components/MainPages/PortfolioPage';
import AdminPage from './components/MainPages/AdminPage';

const rootStyle = {
  "height": "inherit"
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={FrontPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/lab" component={LabPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/admin" component={AdminPage} />
    </Router>
  </Provider>, document.querySelector('.container'));
