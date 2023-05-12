import { useEffect } from "react";

const EjemploPromesa = () => {
    useEffect(() => {
        const arrayProductos = [
            {id:1, nombre:"Celular Samsung Galaxy A23 128gb + 4gb Ram Black", descripcion:'Pantalla: 6.6", 1080 x 2408 pixels - Procesador: Snapdragon 680 2.4GHz - RAM: 4GB/6GB/8GB - Almacenamiento: 64GB/128GB - Expansión: microSD - Cámara: Cuádruple, 50MP+5MP +2MP+2MP - Batería: 5000 mAh - OS: Android 12 - Perfil: 8.4 mm - Peso: 195 g', precio:95.869, imagen:"https://garbarinoar.vtexassets.com/arquivos/ids/180687-1200-auto?v=637974954426500000&width=1200&height=auto&aspect=true", stock:10},
            {id:2, nombre:"Moto G22 128 Gb Cosmic Black 4 Gb Ram", descripcion:"CELULAR SMARTPHONE 6,5 pulgadas MOTOROLA MOTO G22 ANDROID 12 4GB / 128GB / 50MPx PAU50000AR (Negro cósmico)", precio:59.999, imagen:"https://garbarinoar.vtexassets.com/arquivos/ids/205402-1200-auto?v=638073150969030000&width=1200&height=auto&aspect=true", stock:9},
            {id:3, nombre:"Celular Samsung Galaxy A13 128gb + 4gb Ram Black", descripcion:"Memoria RAM (GB): 4 - Memoria ROM (GB): 128 - Tamaño de pantalla: 6.4 pulgadas - Resolucion: 1080x2408 (FHD+) - Cámara Trasera - Resolución: 50.0 MP + 5.0 MP + 2.0 MP + 2.0 MP - Cámara Frontal - Resolution: 8 MP - Color: Negro - Bateria: 5000 mAh", precio:71.409, imagen:"https://garbarinoar.vtexassets.com/arquivos/ids/168123-1200-auto?v=637868784059930000&width=1200&height=auto&aspect=true", stock:8}
        ];

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 5000);
        });

        promesa.then(respuesta => {
            console.log(respuesta);
        }).finally(() => {
            console.log("Se terminó de cargar el Array de Productos!");
        });
    }, [productos, disponible]);

    /* useEffect(() => {
        const users = [
            {id:1, nombre:"Juan Perez"},
            {id:2, nombre:"Laura García"}
        ];

        console.log(users.map(pepe => ({idEstudiante:pepe.id, nombreEstudiante:pepe.nombre})));
    }, []); */
    const users = [
        {id:1, nombre:"Juan Perez"},
        {id:2, nombre:"Laura García"}
    ];

    return (
        <div className="row">
            <h1>Ejemplo de Promesa con Array</h1>
            <ul>
                {users.map(item => (<li key={item.id}>{item.id} - {item.nombre}</li>))}
            </ul>
        </div>
    )
}

export default EjemploPromesa;