import React, { useState } from 'react';

interface ShowCountProps {
  count: number;
  incCount: React.MouseEventHandler<HTMLButtonElement>;
  decCount: React.MouseEventHandler<HTMLButtonElement>;
}

function withCounter(WrappedComponent: (props: ShowCountProps) => JSX.Element) {
  const WithCounter = (props: any) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
    const decrementCount = () => {
      setCount((prevCount) => prevCount - 1);
    };
    return <WrappedComponent count={count} incCount={incrementCount} decCount={decrementCount} {...props} />;
  };
  return WithCounter;
}

export default withCounter;
