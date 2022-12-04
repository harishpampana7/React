import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {

    // setCount(count + value);

    setCount((prev) => {
      if(prev === 10){
        return 0;
      }
      return prev + value;
    });

  };

  //conditional rendering.

  if(count > 10){
    return <div>Counter Reached max value</div>
  }

  return (
    <div className="App">
      <h3>Counter: {count}</h3>

      {/* // disable buttions */}

      {/* {count < 10 && (
        <div>
          <button onClick={() => changeCount(1)}>Add 1</button>
          <button onClick={() => changeCount(-1)}>sub 1</button>
        </div>
      )} */}

        <div>
          <button onClick={() => changeCount(1)}>Add 1</button>
          <button onClick={() => changeCount(-1)}>sub 1</button>
          {/* // show even r odd */}
          <div> Counter is {count % 2 === 0 ? "Even" : "Odd"}</div>

        </div>
    </div>
  );
}

export default App;
