import React, { lazy, Suspense, useState, useReducer } from 'react';
import './App.css';

// // 2 Options here: 1 is conventional, 2 is lazy loading
// import RiverInformation from './components/RiverInformation/RiverInformation';
const RiverInformation = lazy(() => import(/* webpackChunkName: "RiverInformation" */ './components/RiverInformation/RiverInformation'));

function App() {
  const [river, setRiver] = useState('nile');
  const [show, toggle] = useReducer(state => !state, false);

  return (
    <div className='wrapper'>
      <h1>World's Longest Rivers</h1>
      <div><button onClick={toggle}>Toggle Details</button></div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <p>NOTE: Use throttling in dev tools to simulate slow network to see Suspense fallback</p>
      <Suspense fallback={<div>Loading...</div>}>
        {show && <RiverInformation name={river}/>}
      </Suspense>
    </div>
  );
}

export default App;
