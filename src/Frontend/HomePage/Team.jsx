import { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch teams and FAQs data
    const fetchData = async () => {
      try {
        const [teamsResponse, faqsResponse] = await Promise.all([
          axios.get('/api/teams'),
          axios.get('/api/faqs')
        ]);
        setTeams(teamsResponse.data.teams);
        setFaqs(faqsResponse.data.faqs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg"
        style={{ backgroundImage: `url('/assets/frontend/img/breadcrumb/breadcrumb.jpg')` }}>
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#team">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{'Team'}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'Our Team'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area */}
      <div id="team" className="tp-team__area tp-team__inner p-relative pt-130 pb-70">
        <div className="container">
          <div className="row">
            {teams.map((team, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 mb-70" key={index}>
                <div className="tp-team__item text-center">
                  <div className="tp-team__img fix">
                    <img src={team.avatar} alt={team.name} />
                  </div>
                  <div className="tp-team__content">
                    <h4 className="tp-team__title"><a href="#">{team.name}</a></h4>
                    <span>{team.position}</span>
                  </div>
                  <div className="tp-team__social">
                    {team.socials?.facebook && (
                      <a href={team.socials.facebook}><i className="fab fa-facebook-f"></i></a>
                    )}
                    {team.socials?.twitter && (
                      <a href={team.socials.twitter}><i className="fab fa-twitter"></i></a>
                    )}
                    {team.socials?.linkedin && (
                      <a href={team.socials.linkedin}><i className="fab fa-linkedin"></i></a>
                    )}
                    {team.socials?.instagram && (
                      <a href={team.socials.instagram}><i className="fab fa-instagram"></i></a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Area */}
      <div className="tp-support__area pt-120 pb-120 grey-bg p-relative">
        <div className="tp-support__bg">
          <img src="/assets/frontend/img/faq/faq-bg-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-support__title-box text-center mb-70">
                <h3 className="tp-section-title">{'Frequently asked questions'} 📣</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-support__faq">
                <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample-2">
                    {faqs.map((faq, key) => (
                      faq.slug === 'bottom' && (
                        <div className="accordion-items" key={key}>
                          <h2 className="accordion-header" id={`heading-${key + 1}`}>
                            <button 
                              className={`accordion-buttons ${key > 0 ? 'collapsed' : ''}`} 
                              type="button" 
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse-${key + 1}`} 
                              aria-expanded={key === 0} 
                              aria-controls={`collapse-${key + 1}`}
                            >
                              {faq.title}
                            </button>
                          </h2>
                          <div 
                            id={`collapse-${key + 1}`} 
                            className={`accordion-collapse collapse ${key === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading-${key + 1}`}
                            data-bs-parent="#accordionExample-2"
                          >
                            <div className="accordion-body">
                              {faq.excerpt?.value || ''}
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
