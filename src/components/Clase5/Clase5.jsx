/* const Saludo = () => {
    return (
        <h3>Curso de <Curso nombre={"React JS"} /></h3>
    )
}

const Curso = ({nombre}) => {
    return (
        <span className="text-decoration-underline">{nombre}</span>
    )
} */

import { useRef } from "react";

const Clase5 = () => {
    const valorRef = useRef(null);
    
    const modificarValor = () => {
        valorRef.current.innerHTML = "Este es el nuevo contenido!";
        valorRef.current.title = "Esto es un título";
        valorRef.current.onclick = saludar;
    }

    const saludar = () => {
        alert("Hola Coders!");
    }

    return (
        <div>
            <h1 onClick={modificarValor}>Clase 5</h1>
            {/* <Saludo /> */}
            <div ref={valorRef}>Contenido Original...</div>
        </div>
    )
}

export default Clase5;