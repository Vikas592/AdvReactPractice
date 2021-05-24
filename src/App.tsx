import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApples, addOranges, reduceApples, reduceOranges } from './Redux';
import { State } from './Redux/types';
import { Add, Remove, TableCell, Table, TableHeadCell } from './components';

function App() {
  const apples: Number = useSelector((state: State) => {
    return state.apples.apples;
  });
  const oranges: Number = useSelector((state: State) => state.oranges.oranges);
  const dispatch: Function = useDispatch();

  const increment = (item: string) => {
    if (item === 'apples') dispatch(addApples());
    if (item === 'oranges') dispatch(addOranges());
  };

  const decrement = (item: string) => {
    if (item === 'apples') dispatch(reduceApples());
    if (item === 'oranges') dispatch(reduceOranges());
  };

  return (
    <div className='container'>
      <Table>
        <thead>
          <tr>
            <TableHeadCell>Item</TableHeadCell>
            <TableHeadCell>Add</TableHeadCell>
            <TableHeadCell>Reduce</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          <tr className='u-full-width'>
            <TableCell>Apples:{apples}</TableCell>
            <TableCell>
              <Add className='button-primary' onClick={() => increment('apples')}>
                Add
              </Add>
            </TableCell>
            <TableCell>
              <Remove onClick={() => decrement('apples')} disabled={apples === 0}>
                Reduce
              </Remove>
            </TableCell>
          </tr>
          <tr className='u-full-width'>
            <TableCell>Oranges:{oranges}</TableCell>
            <TableCell>
              <Add className='button-primary' onClick={() => increment('oranges')}>
                Add
              </Add>
            </TableCell>
            <TableCell>
              <Remove onClick={() => decrement('oranges')} disabled={oranges === 0}>
                Reduce
              </Remove>
            </TableCell>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
