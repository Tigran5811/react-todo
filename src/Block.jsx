import React, { useState } from 'react';
import { Button } from './ui-kit/components/Button/Button';

export const Block = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="block">
      <div>
        <Button onClick={increment} text="pluse" type="button" />
        <Button onClick={decrement} text="minus" type="button" />
      </div>
      <h1>{count}</h1>
    </div>
  );
};
