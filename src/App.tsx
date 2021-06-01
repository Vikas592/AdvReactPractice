import React from 'react';
import { FruitsCounter } from './components';
import ShowCount from './components/ShowCount';
import RandomCounter from './components/RandomCounter';

interface AppProps {
  className?: string;
}

function App({ className }: AppProps) {
  return (
    <div className={className}>
      <div>
        <h2>Practice Project</h2>
        <h4>Redux, Error Boundary and Styled Components</h4>
        <FruitsCounter />
      </div>
      <div>
        <h4>HOC</h4>
        <ShowCount />
      </div>
      <div>
        <h4>HOC</h4>
        <RandomCounter />
      </div>
    </div>
  );
}

export default App;
