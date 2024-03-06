import React, { useState } from 'react'

export default function UseStateEffect() {
    const [name, setName] = useState("React 1.0");
    return (
        <div>
            <h1>Hello State Hook</h1>
            <h1>{name}</h1>
            <button onClick={() => { setName("React 2.0") }}>Change</button>


            <hr />
        </div>
    )
}
