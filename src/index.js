import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Main Top-Level Components
import App from './container/App';
import Layout from './components/Layout';

import FrontPage from './container/FrontPage';
import Blog from './container/Blog';
import Lab from './container/Lab';
import Portfolio from './container/Portfolio';
import Admin from './container/Admin';
import Signin from './components/Admin/Signin';

// Configure Redux Store
import reducers from './reducers';

// Create stores with middlewares & reduxDevTools
const store = createStore(reducers, {},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

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
          <Route path='signin' component={Signin} />
        </Route>
      </Route>
    </Router>
  </Provider>
);



ReactDOM.render(routes ,document.querySelector('.container'));
