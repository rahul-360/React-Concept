import React, { useEffect, useState } from 'react'

export default function ClearUp() {
    const [WindCount, setWindCount] = useState(window.screen.width);

    const CurrentScreenWidth = () => { setWindCount(() => window.innerWidth) }

    useEffect(() => { window.addEventListener("resize", CurrentScreenWidth) })
    return (
        <div>
            <h1>Hello Clear Up</h1>
            <h1>This is size of window <span>{WindCount}</span></h1>
            <hr />
        </div>
    )
}
