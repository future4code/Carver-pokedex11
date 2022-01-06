import React from 'react'
import Router from './route/Router'
import GlobalState from './context/GlobalContext/GlobalState';
const App = () => {
  return (
    <GlobalState>
    <Router />
    </GlobalState>
  );
}

export default App;
