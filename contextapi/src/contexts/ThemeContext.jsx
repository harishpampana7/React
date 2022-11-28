import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme : "", toogleTheme : () => {} }); //type

export const ThemeContextProvider = ({ children }) => {  // context provider
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };
    return ( 
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}; 