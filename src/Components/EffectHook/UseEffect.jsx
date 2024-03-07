import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  });

  return (
    <>
      {/* <h1>I've rendered {count} times!</h1>; */}
    </>
  )
}
export default UseEffect;





// import React, { useEffect, useState } from 'react'

// export default function UseEffect() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("React UseEffect");
//   })

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div >
//   )
// }
