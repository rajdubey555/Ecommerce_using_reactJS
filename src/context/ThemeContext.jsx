import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
const [Theme, setTheme] = useState('light')

const toggleTheme = ()=> {
    setTheme(prev => prev === "light"? "dark" : "light")
    console.log("jnjun")
}
return(
<ThemeContext.Provider value={{Theme,toggleTheme}}>
    {children}
</ThemeContext.Provider>
 )}