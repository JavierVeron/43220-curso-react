const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={"https://img.asmedia.epimg.net/resizer/dOqXPoqZUAzxA3YGvwUd43BzI9Y=/1472x828/filters:focal(2165x1125:2175x1135)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/2LVRGJQLT27CD4MEE56YFTZIZY.jpg"} alt={"Lionel Messi #1"} className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={"https://www.lavoz.com.ar/resizer/YvO8Q1P2V2WXyWxIABNPUzl039s=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DYYSZ2IZCRCHHLH6RDSEXCS4EI.jpg"} alt={"Lionel Messi #2"} className="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;