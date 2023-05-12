import { useEffect, useState } from "react";
import arrayProductos from "./productos.json";

const Cargando = () => {
    return (
        <h3>Cargando Productos...</h3>
    )
}

const RenderProductos = ({productos}) => {
    return (
        productos.map(item =>(
            <div key={item.id} className="col-md-4">
                <div className="card" >
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body">
                        <h3>{item.nombre}</h3>
                        <p className="card-text"><b>${item.precio}</b></p>
                    </div>
                </div>
            </div>
        ))
    )
}

const EjemploPromesas2 = () => {
    const [productos, setProductos] = useState([]);
    const [disponible, setDisponible] = useState(false);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 3000);
        });

        promesa.then(respuesta => {
            setDisponible(true);
            setProductos(respuesta);
        })        
    }, []);

    return (
        <div className="row">
            {disponible ? <RenderProductos productos={productos} /> : <Cargando /> }
        </div>
    )
}

export default EjemploPromesas2;