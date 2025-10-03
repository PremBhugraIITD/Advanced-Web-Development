import React, { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setCount] = useState(0);

  const handleReRender = () => {
    setCount(count + 1);
  };

  const x = useRef(0); //If we had declared it as "let x = 0", x would have reset to 0 on every re-render and then incremented to 1. But since we are using useRef, it will persist across re-renders.

  x.current = x.current + 1;

  return (
    <div>
      <p>This component has rendered {x.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
