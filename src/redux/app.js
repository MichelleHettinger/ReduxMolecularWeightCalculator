/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { render } from 'react-dom';
import DevRoot from './Root.dev';
import ProdRoot from './Root.prod';

// Import Global Sass files
require('../assets/sass/mainstyles.scss');

const rootEl = document.getElementById('app');

let App;

if (__DEVTOOLS__) { // eslint-disable-line no-undef
  App = DevRoot;
} else {
  App = ProdRoot;
}

render(<App />, rootEl);
