


const Equipe = () => {
  return (
    <section id="team" className="team">
  <div className="container">
    <div className="text-center"> {/* Ajout de la div avec la classe text-center */}
      <div className="section-title">
        <h2 style={{ color: "#D2691E" }}>Equipe</h2>
        <p>
          Découvrez l'équipe exceptionnelle qui compose notre entreprise. Chacun de nos membres est animé par la passion, l'expertise et le dévouement envers notre domaine d'activité
        </p>
      </div>
    </div>
    <div className="row text-cente" style={{ justifyContent : "center", alignItems : "center"}}>
      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
        <div className="member">
          <div className="pic"><img src="a.jpeg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>Safi White</h4>
            <span>Chief Executive Officer</span>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="member">
          <div className="pic"><img src="b.jpeg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="member">
          <div className="pic"><img src="b.jpeg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
            <div className="social">
              <a href=""><i className="icofont-twitter"></i></a>
              <a href=""><i className="icofont-facebook"></i></a>
              <a href=""><i className="icofont-instagram"></i></a>
              <a href=""><i className="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Equipe