import { useEffect, useState } from "react";

const Efectos2 = () => {
    const [vueltas, setVueltas] = useState(1);
    const [segundos, setSegundos] = useState(0);
    const [salida, setSalida] = useState("");

    const finalizarVuelta = () => {
        setSalida(salida + `Vuelta: ${vueltas} en ${segundos} segundos`);
        setVueltas(vueltas + 1);
        setSegundos(0);
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos(segundos + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
        }
    }, [vueltas, segundos]);

    return (
        <div>
            <h1>Efectos 2</h1>
            <p>Vueltas: <b>{vueltas}</b></p>
            <p>Tiempo: <b>{segundos} segundos</b></p>
            <p><button onClick={finalizarVuelta} className="btn btn-primary">Finalizar Vuelta</button></p>
            <div>{salida}</div>
        </div>
    )
}

export default Efectos2;