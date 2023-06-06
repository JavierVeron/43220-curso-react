/* const Curso = ({color}) => {
    return (
        <h2 style={{color: color ? "red" : "black"}} >Curso de React JS</h2>
    )
} */

/* const Curso2 = ({condicion1}) => {
    return (
        <h2 className={condicion1 ? "text-danger" : "text-dark"}>Curso de JavaScript</h2>
    )
} */

/* const Curso3 = ({condicion1, condicion2}) => {
    return (
        <h2 className={`${condicion1 ? "text-danger" : "text-dark"} ${condicion2 ? "text-decoration-underline" : ""}`}>Curso de JavaScript</h2>
    )
} */

const Curso4 = ({condicion1, condicion2}) => {
    const config = condicion1 ? {
        className:`text-danger ${condicion2 || ""}`,
        title:"Este es el Curso de JavaScript!"
    } : "";

    return (
        <h2 {...config}>Curso de JavaScript</h2>
    )
}

const Rendering2 = ({mostrar}) => {
    return (
        <div>
            <h1>Técnicas de Rendering #2</h1>
            {mostrar && <h2>Curso de React JS!</h2>}
            <Curso4 condicion1={true} condicion2={"text-decoration-underline"} />
        </div>
    )
}

export default Rendering2;