import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-Thunk';

//Main Top-Level Components
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

// Configure Redux Store
import rootReducer from './reducers';

// Create stores with middlewares & reduxDevTools
const store = createStore(rootReducer, {}, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : undefined
));

// Configure routes
const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage}/>
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

        </Route>
      </Route>
    </Router>
  </Provider>
);



ReactDOM.render(routes ,document.querySelector('.container'));
