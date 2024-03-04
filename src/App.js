import './App.css';
import StateHook from './Components/Hook/stateHook';
import EffectHook from './Components/Hook/effectHook';
import ClearUp from './Components/Hook/clearUp';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <ClearUp/>
      <EffectHook />
      <StateHook />
    </div>
  );
}

export default App;
