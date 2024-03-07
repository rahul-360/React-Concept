import './App.css';
import React, { useState } from "react";
import ClearUp from './Components/StateHook/ClearUp';
import StateEffect from './Components/StateHook/StateHook';
import UseStateEffect from './Components/StateHook/UseState';
// import UseContext from './Components/StateHook/UseContext';

import UseEffect from './Components/EffectHook/UseEffect';
import EffectHook from './Components/EffectHook/EffectHook';

import Props from './Components/Props/UseProps';

function App() {
  return (
    <div className="App">
      <Props name="2.0" />

      {/* <UseEffect /> */}

      {/* <ClearUp /> */}
      {/* <StateEffect /> */}
      {/* <UseStateEffect /> */}
      {/* <UseContext /> */}

      {/* <UseEffect /> */}
      {/* <EffectHook /> */}
    </div>
  );
}

export default App;
