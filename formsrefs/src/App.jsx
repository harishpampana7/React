import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import { Form } from './components/Form';
import './components/Scroll'
import {Scroll} from './components/Scroll';


function App() {
  
  // {current : null}
  return (
    <div className="App">
      <Form />
      <Scroll />

    </div>
    
  );
}

export default App;
