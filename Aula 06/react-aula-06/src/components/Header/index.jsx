import { useContext, useEffect } from "react"
import Carrinho from "../Carrinho"
import { ThemeContext } from "../../context/ThemeContext"


export default function Header() {

    const {setTheme, theme} = useContext(ThemeContext)

    function handleTheme(){ 
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)

    }, [theme])
 


    return (
        <header className="flex px-16 items-center text-2xl bg-fuchsia-700 text-white w-screen py-6 mb-8">
            <h1 className="flex-1 text-center font-semibold">IREDE Food</h1>
            <Carrinho />
            <button onClick={handleTheme}>Mudar Tema</button>
        </header>
        

    )
}