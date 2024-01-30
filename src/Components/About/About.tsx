


const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                    <div className="col-lg-6 video-box">
                        <img src="CACHE.jpg" className="img-fluid" alt="" />
                        <a href="https://youtu.be/PYvZ5jHQTbM?si=2jVNX1aMbXUeynq3" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                        <div className="section-title">
                            <h2 style={{color : "#D2691E"}}>A propos</h2>
                            <p className="text-justify">
                                WE DESIGN, est une entreprise
                                proposant des services en design
                                intérieur.
                                Notre but est d’apporter de
                                l’innovation au sein des habitats et
                                espaces de travail dans la ville de
                                Kinshasa et bien partout ailleurs.
                                Nous évoluons sous un concept
                                moderne de l’architecture
                                intérieur en réunissant une équipe
                                complète de corps de métier,
                                architecte d’intérieur, peintre
                                professionnels au plombier, etc.
                                Pour garantir l’aboutissement
                                complet du projet.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About