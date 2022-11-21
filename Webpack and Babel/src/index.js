import { add } from "./calc";
import("./index.css");

import React from "react";
import ReactDom from "react-dom";


console.log(add(5,4));

console.log(add(5,2));

// const h1 = document.createElement("h1");
// h1.innerText = "Hello World";
// h1.classList.add("redcolor");

// document.getElementById("root").appendChild(h1);

ReactDom.render(
    // "Hello World"  //what
    // document.getElementById("root") //where

    // React.createElement("h1", {className: "redcolor"},
    // [
    //     "Hello webpack and ",
    //     React.createElement("i",null,"React")
    // ] 
    // ), //what

    <h1 className="redcolor">
        {" "}
        Hello webpack and <i className="test">React </i><b>Bold</b> {" "}
    </h1>,
    document.getElementById("root")  //Where
);


//compiler : converts from high level lang to low level lang

//transpsiler : converts from high level lang to high level lang