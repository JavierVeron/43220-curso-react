import { useState } from "react";
import { useEffect } from "react";

const Promesas = () => {
    const [objeto, setObjeto] = useState({});
    const [error, setError] = useState(false);

    // Declara una Promesa
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            //resolve({id:1, nombre:"Coca Cola", precio:700});
            reject("Error! No se pudo cargar el Mensaje...!");
        });
        console.log(promesa);
        promesa.then(pepito => {
            setObjeto(pepito);
        }).catch(errorPromesa => {
            setError(true);
            setObjeto(errorPromesa);
            console.log(errorPromesa);
        }).then(() => {
            console.log("Estoy en el segundo método THEN!");
        }).then(() => {
            console.log("Estoy en el tercer método THEN!");
        }).finally(() => {
            console.log("Fin del proceso!!!");
        });
    }, []);

    return (
        <div>
            <h1>Promesas</h1>
            {error ? <p>{objeto}</p> : <p>{`ID: ${objeto.id} - Producto: ${objeto.nombre} - Precio: $${objeto.precio}`}</p>}
        </div>
    )
}

export default Promesas;