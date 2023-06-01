import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Bebidas = () => {
    const {productos, totalProductos, sumaTotal} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <h1>Bebidas</h1>
                <p>Total de Productos: <b>{totalProductos()}</b></p>
                {productos.map(producto => 
                    <div key={producto.id} className="col-md-4 text-center">
                        <img src={producto.imagen} alt={producto.nombre} style={{maxHeight:"160px"}} />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </div>)
                }
                <p>Suma Total: <b>{sumaTotal()}</b></p>
            </div>
        </div>
    )
}

export default Bebidas;