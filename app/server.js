import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import qs from 'qs'
import { renderToString } from 'react-dom/server'
import App from './js/components/App'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Read the counter from the request, if provided
  const params = qs.parse(req.query)
  const counter = parseInt(params.counter, 10) || 0

  // Compile an initial state
  let preloadedState = { counter }

  // Create a new Redux store instance
  const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Links to reset, bootstrap, font-awesome and my custom css sheets. -->
        <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="./css/mystyles.css">
        
        <!-- Title displayed on tab. -->
        <title>Molecular Weight Calculator</title>
      </head>
      <body>
        <div id="app">${html}</div>

        <script src="./js/jquery-3.1.1.min.js"></script>
        <script src="./js/bootstrap.min.js"></script> 

        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>

        <script src="/static/dist/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port)