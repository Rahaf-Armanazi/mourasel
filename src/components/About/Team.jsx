import './Team.css';

const teamMembers = [
  { id: 1, name: "Rhonda Ortiz", role: "Founder & CO", image: "rhonda.png" },
  { id: 2, name: "Eleanor Pena", role: "Head of Design", image: "eleanor.png" },
  { id: 3, name: "Bessie Cooper", role: "VP People", image: "bessie.png" },
  { id: 4, name: "Darlene Robertson", role: "Product Manager", image: "darlene.png" },
];

function Team() {
  return (
    <div className="App">
      <div className="tp-team__area p-relative">
        <div className="tp-team__grey-bg grey-bg"></div>
        <div className="tp-team__ml-mr theme-bg-3 pt-120 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-team__section-box d-flex justify-content-between">
                  <h3 className="tp-section-title-md text-white">Meet with our <br /> team</h3>
                  <div className="tp-team__btn">
                    <a className="tp-btn-pink mb-15" href="/team"><span>All Team Member</span></a>
                    <a className="tp-btn-sky-sm mb-15 ml-15" href="/contact"><span>Join our Team</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {teamMembers.map((member) => (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-70" key={member.id}>
                  <div className="tp-team__item text-center">
                    <div className="tp-team__img fix">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="tp-team__content">
                      <h4 className="tp-team__title"><a href="javascript:void(0)">{member.name}</a></h4>
                      <span>{member.role}</span>
                    </div>
                    <div className="tp-team__social">
                      <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a href="https://linkedin.com/"><i className="fab fa-linkedin"></i></a>
                      <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;