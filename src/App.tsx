import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApples, addOranges, reduceApples, reduceOranges } from './Redux';
import { State } from './Redux/types';
import { Button, TableCell, Table, TableHeadCell, ErrorBoundary } from './components';
import { APPLES, ORANGES } from './Constants';

interface AppProps {
  className?: string;
}

function App({ className }: AppProps) {
  const apples: Number = useSelector((state: State) => {
    return state.apples.apples;
  });
  const oranges: Number = useSelector((state: State) => state.oranges.oranges);
  const dispatch: Function = useDispatch();

  const increment = (item: string) => {
    if (item === APPLES) dispatch(addApples());
    if (item === ORANGES) dispatch(addOranges());
  };

  const decrement = (item: string) => {
    if (item === APPLES) dispatch(reduceApples());
    if (item === ORANGES) dispatch(reduceOranges());
  };

  return (
    <div className={className}>
      <h2>Practice Project</h2>
      <ErrorBoundary>
        <Table>
          <thead>
            <tr>
              <TableHeadCell>Item</TableHeadCell>
              <TableHeadCell>Add</TableHeadCell>
              <TableHeadCell>Reduce</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Apples: {apples}</TableCell>
              <TableCell>
                <Button variant='add' onClick={() => increment(APPLES)}>
                  Add
                </Button>
              </TableCell>
              <TableCell>
                <Button variant='reduce' onClick={() => decrement(APPLES)} disabled={apples === 0}>
                  Reduce
                </Button>
              </TableCell>
            </tr>
            <tr>
              <TableCell noBorder={true}>Oranges: {oranges}</TableCell>
              <TableCell noBorder={true}>
                <Button variant='add' onClick={() => increment(ORANGES)}>
                  Add
                </Button>
              </TableCell>
              <TableCell noBorder={true}>
                <Button variant='reduce' onClick={() => decrement(ORANGES)} disabled={oranges === 0}>
                  Reduce
                </Button>
              </TableCell>
            </tr>
          </tbody>
        </Table>
      </ErrorBoundary>
    </div>
  );
}

export default App;
