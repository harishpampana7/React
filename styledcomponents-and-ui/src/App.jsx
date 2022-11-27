import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Button, Div, Form, Para } from "./styled/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <Div>
        <div className="box1">Harish</div>
        <Para>
          {/* <h1>name</h1> */}
          <p>Pampana</p>
        </Para>
      </Div>
      <Button
        theme={theme}
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Click me
      </Button>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle them
      </button>
      <Form>
        <input type="text" placeholder="name" />
      </Form>
    </div>
  );
}

export default App;
