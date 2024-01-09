

const Slider = () => {
    return (
        <section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">


                        <div className="carousel-item active" style={{ backgroundImage: "url('logo.jpeg')" }}>
                            <div className="carousel-container">
                                <div className="carousel-content container">
                                    <h2  className="animated fadeInDown">Bienvenue chez <span>WE DESIGN</span></h2>
                                    <p className="animated fadeInUp" style={{fontWeight : "bold"}}>Vous accompagne dans vos projets d'architecture en vous proposant une variété des papiers peints de qualité et design unique..</p>
                                    <a href="#about" className="btn-get-started animated fadeInUp scrollto" style={{background : "#D2691E", fontWeight : "bold"}}>En savoir plus</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{ backgroundImage: "url('z.jpeg')" }}>
                            <div className="carousel-container">
                                <div className="carousel-content container">
                                    <h2 className="animated fadeInDown">WE DESIGN</h2>
                                    <p className="animated fadeInUp" style={{fontWeight : "bold"}}>
                                        En effet les couleurs et le design d’une
                                        maison doivent être le reflet des personnes
                                        qui y vivent.
                                        Cela se tient également pour tous types
                                        d’espace, de travail et public, le but est le
                                        confort maximum de la société. En
                                        agrémentant les conditions de vie et de
                                        travail de cette dernières.
                                    </p>
                                    <a href="#about" className="btn-get-started animated fadeInUp scrollto" style={{background : "#D2691E", fontWeight : "bold"}}>En savoir plus</a>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" style={{ backgroundImage: "url('i.jpeg')" }}>
                            <div className="carousel-container">
                                <div className="carousel-content container">
                                    <h2 className="animated fadeInDown">WE DESIGN</h2>
                                    <p className="animated fadeInUp" style={{fontWeight : "bold"}}>
                                    Ce but est atteint grâce au services des
personnes qualifiés, d’architectes
d’intérieur que nous sommes
                                    </p>
                                    <a href="#about" className="btn-get-started animated fadeInUp scrollto" style={{background : "#D2691E", fontWeight : "bold"}}>En savoir plus</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div >
        </section >
    )
}

export default Slider