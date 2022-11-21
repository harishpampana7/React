import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo';

function App() {
  const arr = ["Wake up" , "Have Tea", "Attend Class"];
  return (
    <div className="App">
      {/* <h1 style={{
        color:"red",
        fontSize:"40px",
        background:"blue",
      }}
      >Harish Pampana</h1>
      <h1>
        <img alt='test' src={logo} width={500}/>
      </h1>
      <input placeholder='test' /> */}

      {
        arr.map((e) => (
          <Todos num = {e}>
            <h1>test</h1>
          </Todos>
        ))
      }
    </div>
  );
}


//for loop is a decleraction 
// in react { it accepts only expression}

export default App;
