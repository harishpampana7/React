import { add } from "./calc";
import("./index.css");


console.log(add(5,4));

console.log(add(5,2));

const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.classList.add("redcolor");

document.getElementById("root").appendChild(h1);