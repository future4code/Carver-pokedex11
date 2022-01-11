import React from 'react'
import Router from './route/Router'
import GlobalState from './context/GlobalContext/GlobalState';
import StyletronContext from "./context/StyletronContext"
import { StyleReset } from 'atomize';

const App = () => {
  return (

    <GlobalState>
      <StyletronContext>
        <StyleReset />
        <Router />
      </StyletronContext>
    </GlobalState>

  );
}

export default App;
