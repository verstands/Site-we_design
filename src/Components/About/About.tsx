


const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                    <div className="col-lg-6 video-box">
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                        <a href="https://www.youtube.com/watch?v=lZG_TzT9FQU&pp=ygUMcGFwaWVyIHBlaW50" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                        <div className="section-title">
                            <h2 style={{color : "#D2691E"}}>A propos</h2>
                            <p>
                                WE DESIGN, est une entreprise
                                proposant des services en design
                                intérieur.
                                Notre but est d’apporter de
                                l’innovation au sein des habitats et
                                espaces de travail dans la ville de
                                Kinshasa et bien partout ailleurs.
                                Nous évoluons sous un concept
                                moderne de l’architecture
                                intérieurs, en réunissant une équipe
                                complète de corps de métier,
                                architecte d’intérieur, peintre
                                professionnels au plombier, etc.
                                Pour garantir l’aboutissement
                                complet du projet.
                            </p>
                        </div>

                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>

                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title"><a href="">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About