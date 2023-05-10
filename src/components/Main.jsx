//import { useState } from "react";
//import Efectos from "./Clase5/Efectos";
import Efectos2 from "./Clase5/Efectos2";

const Main = () => {
    /* const [visible, setVisible] = useState(true);

    const monstrarMensaje = () => {
        setVisible(false);
    } */

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {/* <button onClick={monstrarMensaje}>Mostrar Mensaje</button>
                    {visible ? <Efectos /> : <p>Se ocultó el componente Efectos!</p>} */}
                    <Efectos2 />
                </div>
            </div>
        </div>
    )
}

export default Main;