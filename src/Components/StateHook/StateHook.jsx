import React, { useState } from "react";
export default function StateEffect() {
  const [name, setName] = useState(0)

  return (
    <div>
      <h1>State Hook</h1>
      <button if onClick={() => { setName(name - 1) }}>-</button>
      <h1>{name}</h1>
      <button onClick={() => { setName(name + 1) }}>+</button>
      <hr />
    </div>
  )
}





