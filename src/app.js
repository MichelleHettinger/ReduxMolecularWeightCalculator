import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MWtCalc from './reducers'
import App from './components'

let store = createStore(MWtCalc)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)