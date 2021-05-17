import { useSelector, useDispatch } from 'react-redux';
import { addApples, addOranges, reduceApples, reduceOranges } from './Redux';
import { State } from './Redux/types';

function App() {
  const apples: Number = useSelector((state: State) => state.apples);
  const oranges: Number = useSelector((state: State) => state.oranges);
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
          <th>Item</th>
          <th>Add</th>
          <th>Reduce</th>
        </thead>
        <tbody>
          <tr>
            <td>Apples:{apples}</td>
            <td>
              <button onClick={() => increment('apples')}>Add</button>
            </td>
            <td>
              <button onClick={() => decrement('apples')} disabled={apples === 0}>
                Reduce
              </button>
            </td>
          </tr>
          <tr>
            <td>Oranges:{oranges}</td>
            <td>
              <button onClick={() => increment('oranges')}>Add</button>
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
