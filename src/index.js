import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//MainPage Components
import FrontPage from './components/MainPages/FrontPage';
import Blog from './components/MainPages/Blog';
import Lab from './components/MainPages/Lab';
import Portfolio from './components/MainPages/Portfolio';
import Admin from './components/MainPages/Admin';


import reducers from './reducers';
import App from './components/MainPages/App';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage}> </IndexRoute>
        <Route path="blog" component={Blog}></Route>
        <Route path="lab" component={Lab}></Route>
        <Route path="portfolio" component={Portfolio}></Route>
        <Route path="admin" component={Admin}></Route>
        
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
