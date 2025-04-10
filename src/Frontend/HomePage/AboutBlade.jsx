import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/TopHeader'

const AboutBlade = () => {
  const [aboutData, setAboutData] = useState({});
  const [descriptions, setDescriptions] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [teams, setTeams] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [counter, setCounter] = useState({});

  useEffect(() => {
    // Fetch data from the backend
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/about`)    
    .then(response => {
        const data = response.data;
        setAboutData(data.about);
        setDescriptions(data.descriptions);
        setFacilities(data.facilities);
        setFeatures(data.features);
        setTeams(data.teams);
        setFaqs(data.faqs);
        setCounter(data.counter);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main>
      <Header/>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg">
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#tp-service__area">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{aboutData.breadcrumb_title}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'About us'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Area */}
      <div id="about-inner__area" className="about-inner__area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="about-inner__section-box mb-70 text-center">
                <span className="about-inner__subtitle">{'About Company'}</span>
                <h3 className="tp-section-title-md">{aboutData.section_title}</h3>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-xl-7 col-lg-7">
              <div className="about-inner__wrapper">
                <div className="row gx-10">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="about-inner__thumb w-img">
                      <img src={aboutData.about_image_1} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about-inner__content-item mb-10 d-flex align-items-center">
                      <span>{aboutData.experience}</span>
                      <p>{aboutData.experience_title}</p>
                    </div>
                    <div className="about-inner__thumb-2 w-img mb-20">
                      <img src={aboutData.about_image_2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="about-inner__right">
                <div className="about-inner__content">
                  {descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
                <div className="about-inner__list">
                  <ul>
                    {facilities.map((facility, index) => (
                      <li key={index}><i className="far fa-check"></i> {facility}</li>
                    ))}
                  </ul>
                </div>
                <div className="about-inner__btn d-flex align-items-center">
                  {aboutData.button_title && (
                    <a className="tp-btn-blue-square mr-20" href={aboutData.button_link}>
                      <span>{aboutData.button_title}</span>
                    </a>
                  )}
                  {aboutData.introducing_video && (
                    <a className="about-inner__play-btn popup-video" href={aboutData.introducing_video}>
                      <i className="fas fa-play"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div id="tp-service__area" className="tp-service__area tp-service__space service-inner grey-bg pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-service__section-wrapper service-inner d-flex justify-content-between">
                <div className="tp-service__title-box ml-40">
                  <h3 className="tp-service__title">{'Our Features'}</h3>
                </div>
                <div className="tp-service__inner-btn">
                  <a className="tp-btn-blue-square" href="/features"><span>{'See All Features'}</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-service__slider-wrapper service-inner">
            <div className="tp-service__slider-active">
              {features.map((feature, index) => (
                <div key={index} className="tp-service__item">
                  <div className="tp-service__icon">
                    <img src={feature.preview?.value} alt="" />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">
                      <a href={`/feature/${feature.slug}`}>{feature.title}</a>
                    </h4>
                    <p>{feature.excerpt?.value}</p>
                  </div>
                  <div className="tp-service__link">
                    <a href={`/feature/${feature.slug}`}>
                      <svg width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Counter Area */}
      <div className="tp-counter-2__area tp-counter-2__space counter-inner grey-bg pb-100">
        <div className="container">
          <div className="tp-counter-2__wrapper pt-65">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-counter-2__item d-flex align-items-center justify-content-sm-start justify-content-center">
                  <div className="tp-counter-2__icon">
                    <img src="/assets/frontend/img/counter/counter-7.png" alt="" />
                  </div>
                  <div className="tp-counter-2__content">
                    <h4><span className="counter">{counter.experience}</span>+</h4>
                    <span>{'Years of Experience'}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-counter-2__item d-flex align-items-center justify-content-sm-start justify-content-center">
                  <div className="tp-counter-2__icon">
                    <img src="/assets/frontend/img/counter/counter-6.png" alt="" />
                  </div>
                  <div className="tp-counter-2__content">
                    <h4><span className="counter">{counter.active_customers}</span>+</h4>
                    <span>{'Active Customers'}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-counter-2__item d-flex align-items-center justify-content-sm-start justify-content-center">
                  <div className="tp-counter-2__icon">
                    <img src="/assets/frontend/img/counter/counter-5.png" alt="" />
                  </div>
                  <div className="tp-counter-2__content">
                    <h4><span className="counter">{counter.positive_reviews}</span>+</h4>
                    <span>{'Positive Reviews'}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-counter-2__item d-flex align-items-center justify-content-sm-start justify-content-center">
                  <div className="tp-counter-2__icon">
                    <img src="/assets/frontend/img/counter/counter-8.png" alt="" />
                  </div>
                  <div className="tp-counter-2__content">
                    <h4><span className="counter">{counter.satisfied_customers}</span>+</h4>
                    <span>{'Satisfied customers'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area */}
      <div className="tp-team__area p-relative">
        <div className="tp-team__grey-bg grey-bg"></div>
        <div className="tp-team__ml-mr theme-bg-3 pt-120 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-team__section-box d-flex justify-content-between">
                  <h3 className="tp-section-title-md text-white">{'Meet with our'} <br /> {'team'}</h3>
                  <div className="tp-team__btn">
                    <a className="tp-btn-pink mb-15" href="/team"><span>{'All Team Member'}</span></a>
                    <a className="tp-btn-sky-sm mb-15 ml-15" href="/contact"><span>{'Join our Team'}</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {teams.map((team, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-70">
                  <div className="tp-team__item text-center">
                    <div className="tp-team__img fix">
                      <img src={team.avatar} alt="" />
                    </div>
                    <div className="tp-team__content">
                      <h4 className="tp-team__title"><a href="javascript:void(0)">{team.name}</a></h4>
                      <span>{team.position}</span>
                    </div>
                    <div className="tp-team__social">
                      {team.socials?.facebook && <a href={team.socials.facebook}><i className="fab fa-facebook-f"></i></a>}
                      {team.socials?.twitter && <a href={team.socials.twitter}><i className="fab fa-twitter"></i></a>}
                      {team.socials?.linkedin && <a href={team.socials.linkedin}><i className="fab fa-linkedin"></i></a>}
                      {team.socials?.instagram && <a href={team.socials.instagram}><i className="fab fa-instagram"></i></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Area */}
      <div className="tp-faq__area pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="tp-custom-accordio-3">
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, index) => (
                    faq.slug !== 'top' && (
                      <div key={index} className="accordion-items">
                        <h2 className="accordion-header" id={`heading-${index + 1}`}>
                          <button className={`accordion-buttons ${index > 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index + 1}`} aria-expanded={index === 0} aria-controls={`collapse-${index + 1}`}>
                            {faq.title}
                          </button>
                        </h2>
                        <div id={`collapse-${index + 1}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading-${index + 1}`}
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {faq.excerpt?.value}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="tp-faq__right-side text-center">
                <div className="tp-faq__icon">
                  <a href="#">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.9542 23.9764L0 29V0H30V23.9764H5.9542Z" fill="#017EFA"/>
                    </svg>
                  </a>
                </div>
                <div className="tp-faq__content">
                  <h4 className="tp-faq__faq-sm-title">{'Do you have more questions?'}</h4>
                  <p>{'faq_description'}</p>
                  <a href="/contact">{'Shoot a Direct Mail'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBlade;
