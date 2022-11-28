import { useContext } from "react"
import { CartContext } from "../contexts/CartContext";


export const Body = () => {
    const { handelCartUpdate } = useContext(CartContext);
    return (
    <div>
        <button 
            onClick={() =>{
                handelCartUpdate(1);
            }}
        >Buy Laptop
        </button>
    </div>
    );
};