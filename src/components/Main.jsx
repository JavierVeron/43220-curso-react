import Memo from "./Clase12/Memo";

const Main = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Memo item={{id:1, nombre:"Manaos", modifyDate:"08-06-2023"}} />
                </div>
            </div>
        </div>
    )
}

export default Main;