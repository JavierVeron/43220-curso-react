import { useEffect, useState } from "react";

const Efectos = () => {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");
    
    const Incrementar = () => {
        setContador(contador + 1);
    }

    // Definimos nuestro Efecto con useEffect
    useEffect(() => {
        console.log("2- Estoy dentro del UseEffect!");
        //console.log("El valor del contador es: " + contador);
        setMensaje("El valor del Contador por 2 es : " + (contador * 2));

        return () => {
            console.log("3- Desmontaje de mi Componente");
        }
    }, [contador]);

    console.log("1- Montaje del componente!");

    return (
        <div>
            <h1>Efectos</h1>
            <p>Contador: {contador}</p>
            <p><button onClick={Incrementar} className="btn btn-primary">Incrementar Contador</button></p>
            <p>{mensaje}</p>
        </div>
    )
}

export default Efectos;