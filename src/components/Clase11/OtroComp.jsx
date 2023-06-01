import { useContext } from "react";
import { AppContext } from "./Contexto";

const OtroComp = () => {
    const {productos} = useContext(AppContext);

    return (
        <div>
            <h3>Bebidas Preferidas</h3>
            <ul>
                {productos.map(item => <li>{item.nombre + " $" + item.precio}</li>)}
            </ul>
        </div>
    )
}

export default OtroComp;