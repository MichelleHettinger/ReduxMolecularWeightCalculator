/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import DevTools from './utils/DevTools';
import configureStore from './store/configureStore.dev';
import App from './components';

const store = configureStore();

const DevRoot = () => (
  <Provider store={ store }>
    <div>
      <Router history={ browserHistory }>
        <Route path='/(:filter)' component={ App } />
      </Router>
      <DevTools />
    </div>
  </Provider>
);

export default DevRoot;
