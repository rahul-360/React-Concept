import React, { useState, useEffect } from 'react';

export default function EffectHook() {
  const [value, setValue] = useState(0);
  useEffect(() => { document.title = value },[value])
  return (
    <div>
      <h1>Effect Hook</h1>
      {/* <button onClick={() => { setValue(value - 1) }}>-</button>
      <h1>{value}</h1>
      <button onClick={() => { setValue(value + 1) }}>+</button> */}
      <button onClick={() => (value === 0) ? setValue(0) : setValue(value - 1)}>-</button>
      <h1>{value}</h1>
      <button onClick={() =>setValue(value + 1)}>+</button>
      <hr />
    </div>
  )
}
