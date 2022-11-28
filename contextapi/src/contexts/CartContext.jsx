import { createContext, useState } from "react";

export const CartContext = createContext(); //type

export const CartContextProvider = ({ children }) => {  // context provider
    const [cart, setCart] = useState(10);

    const handelCartUpdate = (value) => {
        setCart(cart + value)
    };
    return ( 
        <CartContext.Provider value={{ cart, handelCartUpdate }}>
            { children }
        </CartContext.Provider>
    );
};