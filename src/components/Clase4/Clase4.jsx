import { useState } from "react";

const Clase4 = ({cursos, academia, carrera, alumnos}) => {
    const [nombreBoton, setNombreBoton] = useState("Haga click AQUÍ!");
    const [tema, setTema] = useState("Props!");
    const [botonVisible, setBotonVisible] = useState(false);
    const [colorBoton, setColorBoton] = useState("warning");

    const modificarEstados = () => {
        setNombreBoton("Hiciste CLICK!");
        setTema("useStates!");
        setBotonVisible(true);
    }

    const Titulo = ({texto}) => {
        return (
            <h2>{texto}...</h2>
        )
    }

    const Item = ({valor}) => {
        return (
            <li>{valor}</li>
        )
    }

    const MostrarCotizacionDolar = ({valor}) => {
        if (valor >= 300 && valor <= 399) {
            setColorBoton("warning") 
        } else if (valor >= 400 && valor <= 499) {
            setColorBoton("danger")
        } else {
            setColorBoton("dark");
        }

        return (
            <button className={"btn btn-" + colorBoton}>${valor}</button>
        )
    }


    return (
        <>
            <Titulo texto={academia} />
            <p>Estamos realizando el Curso de <b>{cursos[1]}</b></p>
            <p>Perteneciente a la Carrera: <b>{carrera}</b></p>
            <p>Alumnos: <b>{alumnos * 1.2}</b></p>
            <button className="btn btn-primary" onClick={() => {modificarEstados()}}>{nombreBoton}</button>
            <p>Observación: Estamos viendo <b>{tema}</b></p>
            {botonVisible ? <button className="btn btn-danger">Aceptar</button> : ""}
            <ul>
                <Item valor="Té" />
                <Item valor="Café" />
                <Item valor="Capuccino" />
                <Item valor="Mate" />
            </ul>
            <MostrarCotizacionDolar valor={500} />
        </>
    )
}

export default Clase4;