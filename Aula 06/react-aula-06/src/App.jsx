import { useContext, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { ThemeContext } from "./context/ThemeContext"
function App() {
  const {theme} = useContext(ThemeContext)
 
  return (
    <div className={`flex flex-col items-center justify-center ${theme === "light"? "bg-slate-50" : "bg-slate-800 text-white"}`}>
    <Header />
    <Main  />
    </div>
  )
}

export default App
