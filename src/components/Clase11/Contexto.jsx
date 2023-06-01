import { useState, useContext, createContext } from "react";
import OtroComp from "./OtroComp";

// Sin Contexto
/* const Componente1 = ({isDarkMode}) => {
    return (
        <Componente2 isDarkMode={isDarkMode} />
    )
}

const Componente2 = ({isDarkMode}) => {
    return (
        <p>Está en Modo Oscuro? {isDarkMode}</p>
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState("Sí");

    return (
        <div>
            <Componente1 isDarkMode={isDarkMode} />
        </div>
    )
} */


// Con Contexto
export const AppContext = createContext();

const Componente1 = () => {
    return (
        <Componente2 />
    )
}

const Componente2 = () => {
    const {isDarkMode, tePortasteMal, productos, saludar} = useContext(AppContext);

    return (
        <div>
            <p>Está en Modo Oscuro? <b>{isDarkMode}</b></p>
            <p>{tePortasteMal ? "Serás castigada!" : "Todo piola!"}</p>
            <button className="btn btn-primary" onClick={saludar}>Saludar</button>
        </div>
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState("No tengo idea!");
    const [tePortasteMal, setPortasteMal] = useState(false);
    const productos = [
        {id:1, nombre:"Coca Cola", precio:700},
        {id:2, nombre:"Pepsi", precio:650}
    ]

    const saludar = () => {
        alert("Hola!")
    }

    return (
        <div>
            <AppContext.Provider value={{isDarkMode, tePortasteMal, productos, saludar}}>
                <Componente2 />
                <OtroComp />
            </AppContext.Provider>
        </div>
    )
}

export default Contexto;