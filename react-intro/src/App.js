import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["wake up" , "in", "Morning"];
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
        arr.map((e)=>(
          <Todos num={e}/>
        ))
      }

      {Todos()}
      
      <Todos/>
      <Todos/>
    </div>
  );
}

function Todos(num){
  return <h1> Todo :  </h1>
}

//for loop is a decleraction 
// in react { it accepts only expression}

export default App;
