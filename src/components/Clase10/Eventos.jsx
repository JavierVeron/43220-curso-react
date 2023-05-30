import { useState } from "react";

const Eventos = () => {
    const [texto, setTexto] = useState("");

    const hacerClick = (event) => {
        console.log(event.nativeEvent);
        console.log("Hiciste click!");
    }

    const capturarTexto = (event) => {
        event.preventDefault();
        console.log(event.nativeEvent);
        setTexto(event.target.value);
    }

    const onResize = () => {
        console.log("Hiciste un Resize en el Navegador!!!");
    }

    // Registro el evento Resize para la función onResize
    window.addEventListener("resize", onResize);

    /* useEffect(() => {
        return (() => {
            console.log("Componente desmontado + Eliminando Eventos");
            // Quito el evento Resize para la función onResize (cuando se desmonte el Componente)
            window.removeEventListener("resize", onResize);
        })
    }) */

    return (
        <div>
            <h1>Eventos</h1>
            <p><button className="btn btn-primary" onClick={(e) => {hacerClick(e)}}>Hacer Click</button></p>
            <p><input type="text" onKeyDown={(e) => {capturarTexto(e)}} /></p>
            <p>{texto}</p>
        </div>
    )
}

export default Eventos;