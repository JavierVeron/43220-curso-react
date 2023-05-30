import { useState } from "react";
import Eventos from "./Clase10/Eventos";
//import Intercambiabilidad from "./Clase10/Intercambiabilidad";
//import Abstraccion1 from "./Clase10/Abstraccion1";
import Abstraccion2 from "./Clase10/Abstraccion2";

const Main = () => {
    const [visible, setVisible] = useState(true);

    const quitarComponente = () => {
        setVisible(false);
    }

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {visible ? <Eventos /> : "Componente Eliminado!"}
                    <button onClick={quitarComponente}>Quitar Componente</button>
                    {/* <Intercambiabilidad item={"Hola"} inputType={"input"} /> */}
                    {/* <Abstraccion1 /> */}
                    <Abstraccion2 />
                </div>
            </div>
        </div>
    )
}

export default Main;