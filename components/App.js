import React from 'react'
import SearchForElements from '../containers/SearchForElements'
import DisplayElements from '../containers/DisplayElements'
import DisplayCalcElements from '../containers/DisplayCalcElements'

const App = () => (
  <div id="topApp" className="container">
    <div className="row">
      <h1>Heading Component Soon</h1>
    </div>

    <div className="row">
      <div className="col-sm-8">
        <h1>Calc Panel Coming Soon</h1>
        <DisplayCalcElements />
      </div>
      <div className="col-sm-4">
        <SearchForElements />
        <DisplayElements />
      </div>
    </div>
  </div>
)

export default App