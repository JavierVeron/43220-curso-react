import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const productos = [
        {id:1, nombre:"Coca Cola", precio:700, imagen:"https://inspiravinoteca.com/web/image/product.template/4676/image_1024?unique=0764b2f"},
        {id:2, nombre:"Pepsi", precio:650, imagen:"https://cdn.shopify.com/s/files/1/0555/3038/9604/products/GaseosaPepsi1litro.jpg?v=1655221827"},
        {id:3, nombre:"Manaos", precio:350, imagen:"https://plataforma.supersimple.com.ar/Panelcontenidos/Contenidos/1629311981-0-0.jpg"},
    ];

    const totalProductos = () => {
        return productos.length;
    }

    const sumaTotal = () => {
        return productos.reduce((acmulador, item) => acmulador += item.precio, 0);
    }

    return (
        <CartContext.Provider value={{productos, totalProductos, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;