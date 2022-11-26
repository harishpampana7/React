import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Button, Div, Form} from './styled/Button';
import { useState } from 'react';



function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <Div>
        <div>
          Harish
        </div>
        <p>
          Pampana
        </p>
      </Div>
      <Button 
        theme={theme}
        onClick={() => {
          console.log("clicked!")
        }}
        >
          Click me
        </Button>
        <button 
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}>
          Toggle them
          </button>
        <Form >
          <input type="text" placeholder='name' />
        </Form>

    </div>
  );
}

export default App;
