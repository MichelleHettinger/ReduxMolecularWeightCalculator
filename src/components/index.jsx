import React from 'react';
import SearchForElements from './SearchForElements';
import DisplayElements from '../containers/DisplayElements';
import DisplayCalcElements from '../containers/DisplayCalcElements';
import DisplayMass from '../containers/DisplayMass';

const App = () => (
  <div id='topApp' className='container'>
    <div className='row'>
      <h1>Heading Component Soon</h1>
    </div>

    <div className='row'>
      <div className='col-sm-8'>
        <DisplayMass />
        <DisplayCalcElements />
      </div>
      <div className='col-sm-4'>
        <SearchForElements />
        <DisplayElements />
      </div>
    </div>
  </div>
);

export default App;
