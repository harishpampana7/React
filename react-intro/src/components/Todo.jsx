import { Children } from "react";
import "./todo.css";

function Todos({ num, Children }) {
    return ( 
        <div className="heading"> 
            {num} {Children}
        </div>
    );
} 

export default Todos;
