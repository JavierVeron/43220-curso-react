import Clase4 from "./Clase4/Clase4";

const Main = () => {
    const cursos = ["Desarrollo Web", "JavaScript", "React JS"];
    let alumnos = 100;

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Clase 4</h1>
                    <Clase4 cursos={cursos} academia={"Coderhouse"} carrera={"FrontEnd React"} alumnos={alumnos}  />
                </div>
            </div>
        </div>
    )
}

export default Main;