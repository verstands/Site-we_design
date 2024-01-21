
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="icofont-envelope" style={{color : "black"}}></i>
                        <a href="mailto:info@Wedesign.com" style={{color : "black"}}>info@Wedesign.com</a>
                        <i className="icofont-phone" style={{color : "black"}}></i> +243 815330186
                    </div>
                    <div className="social-links float-right">
                        <a href="#" style={{color : "#D2691E"}} className="twitter">
                            <i className="icofont-twitter"></i>
                        </a>
                        <a href="#" style={{color : "#D2691E"}} className="facebook">
                            <i className="icofont-facebook"></i>
                        </a>
                        <a href="#" style={{color : "#D2691E"}} className="instagram">
                            <i className="icofont-instagram"></i>
                        </a>
                        <a href="#" style={{color : "#D2691E"}} className="skype">
                            <i className="icofont-skype"></i>
                        </a>
                        <a href="#" style={{color : "#D2691E"}} className="linkedin">
                            <i className="icofont-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>

            <header id="header">
                <div className="container">
                    <div className="logo float-left">
                        <h1 className="text-light">
                            <Link to="/">
                                <span style={{ color: "#D2691E", fontWeight: 'bold' }}>WE DESIGN</span>
                            </Link>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
                    </div>

                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul >
                            <li className="active">
                                <a href="#header" style={{color : "#D2691E"}}>Accueil</a>
                            </li>
                            <li>
                                <a href="#about" style={{color : "#D2691E"}} >A propos</a>
                            </li>
                            <li>
                                <a href="#services" style={{color : "#D2691E"}}>Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" style={{color : "#D2691E"}}>Categorie</a>
                            </li>
                            <li>
                                <a href="#team" style={{color : "#D2691E"}}>Equipe</a>
                            </li>
                            <li>
                                <a href="#contact" style={{color : "#D2691E"}}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    {/* .nav-menu */}
                </div>
            </header>

            <Outlet />
            <footer id="footer" style={{background : "#D2691E"}}>
                <div style={{background : "#D2691E"}} className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>WE DESIGN</h3>
                                <p>
                                5B3 ; Ancienne Galerie Présidentielle <br />
                                  Kinhsasa<br /><br />
                                    <strong>Phone:</strong> +243 815330186<br />  +243 815330186 <br />
                                    <strong>Email:</strong> info@Wedesign.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#"  className="twitter"><i  className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-whatsapp"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Liens utiles</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#header">Accueil</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">Apropos</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Categories</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#team">Equipe</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Notre services</h4>
                                <ul>
                                    <li><i  className="bx bx-chevron-right"></i> <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">Service de design intérieur et de rénovation</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#" data-toggle="modal" data-target=".service">Service de conseil pour un cadre de vie idéal</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Notre newsletter</h4>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="S'abonner" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} <strong><a href='https://portofoliorabby.netlify.app/'>verstands</a></strong>.tous droits réservés
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top" style={{background : "#D2691E"}}><i className="icofont-simple-up"></i></a>
        </>
    );
};

export default Layout;