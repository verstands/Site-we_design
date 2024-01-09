

import { Link } from "react-router-dom"
const Service = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">

          <div className="section-title">
            <h2 style={{ color: "#D2691E" }}>Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i style={{ color: "#D2691E" }} className="icofont-computer"></i></div>
              <h4 className="title"><a href="" data-toggle="modal" data-target=".bd-example-modal-lg">Service de design intérieur et de rénovation</a></h4>
              <p className="description">Nous vous accompagnons dans vos travaux de design intérieur...</p>
              <Link to="" data-toggle="modal" data-target=".bd-example-modal-lg" className="btn btn-primary" style={{ background: "#D2691E" }}> En savoir plus </Link>

            </div>
            <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i style={{ color: "#D2691E" }} className="icofont-home"></i></div>
              <h4 className="title"><a href="" data-toggle="modal" data-target=".service">Service de conseil pour un cadre de vie idéal</a></h4>
              <p className="description">Nous offrons aussi également un service conseil pour...</p>
              <Link to="" data-toggle="modal" data-target=".service" className="btn btn-primary" style={{ background: "#D2691E" }}> En savoir plus </Link>
            </div>
          </div>

        </div>
      </section>

      <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <p className="m-5">
              <section id="services" className="services">
                <div className="container">
                  <div className="section-title">
                    <div className="icon"><i style={{ color: "#D2691E" }} className="icofont-computer"></i></div>
                    <h2 style={{ color: "#D2691E" }}>Service de design intérieur et de rénovation</h2>
                  </div>
                  <p className="description">
                    <p style={{ fontFamily: "Bodini" }}>
                      Aussi facile à poser, qu’à déposer et à remplacer ! C’est ça, la magie du papier peint. Vous avez peur que votre papier peint vous lasse au bout de plusieurs années, ou vous vous imaginez déjà tous les travaux nécessaires pour remplacer le papier peint que vous avez envie de poser. N’ayez crainte. Le papier peint, quand il est choisit de bonne qualité et intissé, s’enlèvera très facilement.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img src="e.jpeg" className="rounded" width="100%" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="z.jpeg" className="rounded" alt="" width="100%" />
                      </div>
                    </div>
                    <p className="mt-3">
                      Les meubles durables sont fabriqués à partir des ressources naturelles qui ont été traitées et produites dans des conditions respectueuses de l’environnement. Ils sont meilleurs pour la santé parce qu’ils ne sont ni vernissés, ni cirés par des produits toxiques. Opter pour des meubles durables, c’est faire le choix de réduire son impact environnemental. Le prix peut vous sembler élevé au départ, il suffit de répartir ce prix sur une longue durée pour le comparer avec des meubles moins durables.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img src="r.jpeg" className="rounded" width="100%" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="t.jpeg" className="rounded" alt="" width="100%" />
                      </div>
                    </div>
                    <p className="mt-3">
                      Les meubles durables sont fabriqués à partir des ressources naturelles qui ont été traitées et produites dans des conditions respectueuses de l’environnement. Ils sont meilleurs pour la santé parce qu’ils ne sont ni vernissés, ni cirés par des produits toxiques. Opter pour des meubles durables, c’est faire le choix de réduire son impact environnemental. Le prix peut vous sembler élevé au départ, il suffit de répartir ce prix sur une longue durée pour le comparer avec des meubles moins durables.

                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img src="u.jpeg" className="rounded" width="100%" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="y.jpeg" className="rounded" alt="" width="100%" />
                      </div>
                    </div>
                  </p>

                </div>
              </section>
            </p>
          </div>
        </div>
      </div>


      <div className="modal fade service" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <p className="m-5">
              <section id="services" className="services">
                <div className="container">
                  <div className="section-title">
                    <div className="icon"><i style={{ color: "#D2691E" }} className="icofont-home"></i></div>

                    <h2 style={{ color: "#D2691E" }}>Service de conseil pour un cadre de vie idéal</h2>
                  </div>
                  <p>
                    Quelles sont ces raisons qui devraient nous pousser à réaliser la
                    rénovation de notre maison? Pourquoi l'achat d'un bien immobilier ancien en vaut-il la
                    peine ? Quels sont les travaux de rénovation
                    les plus rentables ? Nos spécialistes vous guident pour mener à bien votre projet !
                  </p>
                  <h5 style={{ color: "#D2691E", fontWeight: "bold" }}>PAPIER PEINT</h5>
                  <p>
                    En quelques heures seulement, votre pièce peut être métamorphosée, alors qu’il faut souvent plusieurs jours pour obtenir un résultat similaire avec de la peinture. Aussi, le papier peint est un produit qui permet de gagner un temps considérable, notamment pour la décoration des maisons anciennes. Il est en effet capable de camoufler les petits défauts du mur ; c’est par exemple le cas du papier peint intissé, quand la peinture viendrait au contraire souligner ces imperfections.
                    La facilité d’entretien du papier peint
                    Enfin, le papier peint de qualité est lavable, ce qui vous permet de l’entretenir et de le conserver pendant au moins 15 ans dans votre chambre, votre salon ou votre espace bureau. Ce revêtement se lave à l’aide d’une éponge ou d’un chiffon humide. La toile supporte l’ajout d’eau savonneuse sur l’éponge pour les tâches les plus tenaces.
                  </p>
                  <h5 style={{ color: "#D2691E", fontWeight: "bold" }}>Ameublement </h5>
                  <p>
                    on seulement appréciés pour leur esthétique, les meubles et aménagements intérieurs en bois améliorent l'impact environnemental, le bien-être et le confort de l'habitant et de l'usager. Un intérieur en bois véhicule une atmosphère à la fois contemporaine et chaleureuse.
                  </p>
                  <h5 style={{ color: "#D2691E", fontWeight: "bold" }}>FAUX PLAFOND ET LUMIÈRES </h5>
                  <p>Un plafond en Gyproc® offre une foule d'avantages. Nos systèmes de plafonds permettent en effet de camoufler facilement tuyaux, câbles et autres éléments techniques, mais certains contribuent en outre à optimiser l'isolation thermique, ainsi que l'isolation ou l'absorption acoustique</p>
                  <img src="i.jpeg"  className="rounded" alt="" />
                </div>
              </section>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Service