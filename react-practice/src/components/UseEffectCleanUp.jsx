import React, { useEffect, useState } from "react";

function UseEffectCleanUp() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcount(prev=> prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default UseEffectCleanUp;
