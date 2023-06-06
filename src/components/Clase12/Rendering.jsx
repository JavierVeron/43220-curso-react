import { useEffect } from "react";
import { useState } from "react";

const Espera = () => {
    return (
        <div className="text-start">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

const Rendering = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div>
            <h1>Técnicas de Rendering</h1>
            {loading ? <Espera /> : <h2 className="text-success">Cargado!</h2>}
        </div>
    )
}

export default Rendering;