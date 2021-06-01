import React from 'react';
import { Button } from './';
import withCounter from '../HOC/withCounter';

interface ShowCountProps {
  count: number;
  incCount: React.MouseEventHandler<HTMLButtonElement>;
  decCount: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowCount = (props: ShowCountProps) => {
  return (
    <div>
      <h4>ShowCount Component</h4>
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

export default withCounter(ShowCount);
