import React from "react";

const Main = () => {
    //Sugar Sintax
    /* let i = 1;
    i+= 1;
    console.log(i);
    i++;
    console.log(i); */

    // Código original
    /* const condition = true;
    let result = null
    
    if (condition) {
        result = "Correcto!";
    } else {
        result = "Incorrecto!";
    }

    console.log(`El resultado es ${result}`); */

    // Código utilizando sugar syntax
    /* const condition = false;
    console.log(`El resultado es: ${condition ? "Correcto!" : "Incorrecto!"}`); */

    // Operador Spread
    // Operador Spread para desparramr objetos de un Array
    /* const productos = [
        {id:1, nombre:"Coca Cola", precio:700},
        {id:2, nombre:"Pepsi", precio:650}
    ];
    const productosActualizados = [...productos, {id:3, nombre:"Manaos", precio:500}];
    console.log(productosActualizados); */

    // Operador Spread para desparramar las propiedades de un Objeto a un nuevo Objeto
    /* const persona = {dni:1112233, nombre:"Juan Perez"};
    const nuevaPersona = {...persona, nombre:"John Perez", sexo:"Masculino", redesSociales:["IG", "FB", "TW"]};
    console.log(nuevaPersona); */

    // Método Find
    /* const productos = [
        {id:1, nombre:"Coca Cola", precio:700},
        {id:2, nombre:"Pepsi", precio:650},
        {id:3, nombre:"Manaos", precio:500}
    ]; */
    //let producto = productos.find(item => item.id === 2);
    //console.log(producto);
    /* let valorBuscado = 3;

    for (let i=0; i<productos.length; i++) {
        if (productos[i].id === valorBuscado) {
            console.log(productos[i]);
            break;
        }
    }

    for (let producto of productos) {
        if (producto.id === valorBuscado) {
            console.log(producto);
            break;
        }
    } */


    // JSX
    // Representación de un elemento HTML
    //{React.createElement("div", {className:"textoDestacado"}, "Hola Coders!")}

    let estilos = {
        color:"white",
        backgroundColor:"#336699",
        padding:"5px"
    }

    const codigo = <div style={estilos}>Hola a Todos #3</div>

    const saludar = () => {
        alert("Hola a Todos!");
    }

    let modoNoche = {
        color:"white",
        backgroundColor:"black"
    };

    let modoDia = {
        color:"black",
        backgroundColor:"white"
    };

    let esDeDia = false;
    let valor = 100;

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Clase 3</h1>
                    {React.createElement("div", {className:"textoDestacado"}, "Hola Coders!")}
                    <div style={estilos}>Hola a Todos #2</div>
                    {codigo}
                    <div style={{color:"white", backgroundColor:"#6699CC", padding:"5px"}}>Hola a Todos #4</div>
                    <div style={{color:"white", backgroundColor:"#6699CC", padding:"5px"}}>Hola a Todos #4</div>
                    <div style={esDeDia ? modoDia : modoNoche}>¿Es de Día?</div>
                    <div style={estilos}><p>El Valor es: {valor * 2}</p></div>
                    <div>
                        <img src={"https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"} alt={"Hamburguesa Casera"} width={180} />
                    </div>
                    <div>
                        <input type="button" name="nombre" className="btn btn-warning" value="Enviar" onClick={saludar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;