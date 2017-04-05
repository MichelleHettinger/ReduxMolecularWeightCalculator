import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import MWtCalc from './reducers';
import Root from './components/Root';

const store = createStore(MWtCalc);

render(
  <Root store={ store } />,
  document.getElementById('app'),
);
