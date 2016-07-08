import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { AUTH_USER } from './actions/type';

// Routing helper
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { routerMiddleware, push, syncHistoryWithStore } from 'react-router-redux';
import requireAuth from './components/Admin/requireAuth';

// Main Components
import App from './container/App';
import Layout from './components/Layout';

import FrontPage from './container/FrontPage';
import Blog from './container/Blog';
import Lab from './container/Lab';
import Portfolio from './container/Portfolio';

import Admin from './container/Admin';
import AdminIndex from './components/Admin/AdminIndex';
import Signin from './components/Admin/Signin';
import Signout from './components/Admin/Signout';
import Signup from './components/Admin/Signup';
import AdminMain from './components/Admin/AdminMain';

// MiddleWare for async & routing
import reduxThunk from 'redux-Thunk';
const reduxRouter = routerMiddleware(browserHistory);
const middlewares = [ reduxThunk, reduxRouter ];

// CombinedReducers
import rootReducer from './reducers';

// Create stores with middlewares & reduxDevTools & reducers
const store = createStore(rootReducer, {}, compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : undefined
));

// Sync react-router history to redux-router
const history = syncHistoryWithStore(browserHistory, store);

// check user's session token even when page is refreshed
const token = localStorage.getItem('token');
// If users have their token on their browser, authenticate user
if (token) {
  store.dispatch({ type: AUTH_USER });
}

// Configure routes
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route component={Layout}>
          <Route path="blog" component={Blog} />
          <Route path="lab" component={Lab} />
          <Route path="portfolio" component={Portfolio} />
        </Route>
        <Route path="admin" component={Admin}>
          <IndexRoute component={AdminIndex}/>
          <Route path='signin' component={Signin} />
          <Route path='signout' component={Signout} />
          <Route path='signup' component={Signup} />
          <Route path='main' component={requireAuth(AdminMain)} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes ,document.querySelector('.container'));
