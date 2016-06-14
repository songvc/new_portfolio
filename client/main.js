import React, { Componenet } from 'react';
import ReactDOM from 'react-dom';
import Router from './config/routers'


Meteor.startup(() => {
  ReactDOM.render(Router, document.querySelector('.container'));
})
