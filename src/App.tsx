import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApples, addOranges, reduceApples, reduceOranges } from './Redux';
import { State } from './Redux/types';

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
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Add</th>
            <th>Reduce</th>
          </tr>
        </thead>
        <tbody>
          <tr className='u-full-width'>
            <td>Apples:{apples}</td>
            <td>
              <button className='button-primary' onClick={() => increment('apples')}>
                Add
              </button>
            </td>
            <td>
              <button onClick={() => decrement('apples')} disabled={apples === 0}>
                Reduce
              </button>
            </td>
          </tr>
          <tr className='u-full-width'>
            <td>Oranges:{oranges}</td>
            <td>
              <button className='button-primary' onClick={() => increment('oranges')}>
                Add
              </button>
            </td>
            <td>
              <button onClick={() => decrement('oranges')} disabled={oranges === 0}>
                Reduce
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
