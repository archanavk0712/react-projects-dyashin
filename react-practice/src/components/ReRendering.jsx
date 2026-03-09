import React, { useState } from "react";

function ReRendering() {
  const [count, setcount] = useState(0);
  let val = 0;
  return (
    <div>
      <p>Counter: {count}</p>
      <p>NormalVal: {val}</p>
      <button
        onClick={() => {
          setcount(count + 1);
          val++;
          console.log(val);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ReRendering;
