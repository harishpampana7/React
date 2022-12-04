import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';


function App() {

  return (
    <div className="App">
      <Todo />
    </div>
  );
}


export default App;



// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {

//   const [data , setData] = useState("");

//   const handelData = (name) => {
//     console.log("patrent received:", name );
//     setData(name);
//   }
  
//   return (
//     <div className="App">
//       <h3>Child Received</h3>
//       <Child1 handelData={handelData} />
//       <Child2 data={data} />
//     </div>
//   );
// }

// function Child1({handelData}){
//   const data = "Masai School";
//   handelData(data)
//   return <h3>Child Received: {data}</h3>

// }

// function Child2({data}){
//   return <div>Child2 Received: {data}</div>
  
// }

// export default App;

