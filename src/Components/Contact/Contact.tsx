


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 style={{color : "#D2691E"}}>Contact</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="info-box">
              <i style={{color : "#D2691E"}} className="bx bx-map"></i>
              <h3 style={{color : "#D2691E"}}>Notre adresse</h3>
              <p style={{color : "#D2691E"}}> N°5B3, Anciennes Galeries Présidentielle Kinhsasa</p>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info-box">
              <i style={{color : "#D2691E"}} className="bx bx-envelope"></i>
              <h3 style={{color : "#D2691E"}}>Envoyez-nous un email</h3>
              <p style={{color : "#D2691E"}}>info@Wedesign.com<br /></p>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box ">
              <i style={{color : "#D2691E"}} className="bx bx-phone-call"></i>
              <h3 style={{color : "#D2691E"}}>Appelez-nous</h3>
              <p style={{color : "#D2691E"}}>+243 815330186<br />+243 975 416 729</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact