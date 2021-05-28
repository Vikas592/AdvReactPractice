import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApples, addOranges, reduceApples, reduceOranges } from './Redux';
import { State } from './Redux/types';
import { Add, Remove, TableCell, Table, TableHeadCell, ErrorBoundary } from './components';
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
            <TableCell>Apples:{apples}</TableCell>
            <TableCell>
              <Add className='button-primary' onClick={() => increment(APPLES)}>
                Add
              </Add>
            </TableCell>
            <TableCell>
              <Remove onClick={() => decrement(APPLES)} disabled={apples === 0}>
                Reduce
              </Remove>
            </TableCell>
          </tr>
          <tr>
            <TableCell noBorder={true}>Oranges:{oranges}</TableCell>
            <TableCell noBorder={true}>
              <Add className='button-primary' onClick={() => increment(ORANGES)}>
                Add
              </Add>
            </TableCell>
            <TableCell noBorder={true}>
              <Remove onClick={() => decrement(ORANGES)} disabled={oranges === 0}>
                Reduce
              </Remove>
            </TableCell>
          </tr>
        </tbody>
      </Table>
</ErrorBoundary>
    </div>
  );
}

export default App;
