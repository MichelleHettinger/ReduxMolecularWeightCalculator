import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import MWtCalc from './reducers';
import Root from './Root';

require('../assets/sass/mything.scss');

const store = createStore(MWtCalc);

render(
  <Root store={ store } />,
  document.getElementById('app'),
);
