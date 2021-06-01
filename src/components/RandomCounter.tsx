import React from 'react';
import { Button } from './';
import withCounter from '../HOC/withCounter';

interface RandomCounterProps {
  count: number;
  incCount: React.MouseEventHandler<HTMLButtonElement>;
  decCount: React.MouseEventHandler<HTMLButtonElement>;
}

const RandomCounter = (props: RandomCounterProps) => {
  return (
    <div>
      <h4>RandomCounter Component</h4>
      <h5>{props.count}</h5>
      <Button variant='add' onClick={props.incCount}>
        Inc
      </Button>
      <Button variant='reduce' onClick={props.decCount}>
        Dec
      </Button>
    </div>
  );
};

export default withCounter(RandomCounter);
