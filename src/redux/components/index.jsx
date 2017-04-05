import React from 'react';
import {
  MassPanel,
  CalculationPanel,
  SearchElements,
  ElementsPanel,
} from '../containers';

const App = () => (
  <div id='topApp' className='container'>
    <div className='row'>
      <h1>Heading Component Soon</h1>
    </div>

    <div className='row'>
      <div className='col-sm-8'>
        <MassPanel />
        <CalculationPanel />
      </div>
      <div className='col-sm-4'>
        <SearchElements />
        <ElementsPanel />
      </div>
    </div>
  </div>
);

export default App;
