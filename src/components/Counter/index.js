import { Button } from "antd";
import React, { useEffect, useState } from "react";

const Counter = ({ countValue }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prev) => prev + 1);
    countValue(count);
  };
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else setCount((prev) => prev - 1);
    countValue(count);
  };

  return (
    <div className="counter">
      <Button onClick={decrement}>-</Button> <span> </span>
      {count}
      <span> </span>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default Counter;
