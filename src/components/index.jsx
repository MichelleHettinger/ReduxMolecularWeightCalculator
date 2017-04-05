import React from 'react';
import MassPanel from '../containers/MassPanel';
import CalculationPanel from '../containers/CalculationPanel';
import SearchForElements from '../containers/SearchElements';
import ElementsPanel from '../containers/ElementsPanel';

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
        <SearchForElements />
        <ElementsPanel />
      </div>
    </div>
  </div>
);

export default App;
