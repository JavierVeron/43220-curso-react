import { useEffect } from "react";
import { useState } from "react";

const Fetch = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=gin&limit=18")
        .then(response => response.json())
        .then(data => {
            setDatos(data.results);
        });
    }, []);

    return (
        <div className="row">
            <h1>Fetch de una URL</h1>
            {
                datos.map(item => <div key={item.id} className="col-md-3 mb-3">
                    <div className="card">
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <p className="card-text"><b>{item.title}</b><br />${item.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Fetch;