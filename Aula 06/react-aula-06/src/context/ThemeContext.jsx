import { createContext, useState } from "react";

export const ThemeContext = createContext([])

export default function ThemeProvider({children}) {
    const[theme, setTheme] = useState(localStorage.getItem("theme")|| "light")
    console.log(theme)
   return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
   ) 
}