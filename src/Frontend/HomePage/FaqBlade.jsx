import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import PricingPlan from "../../components/PricingPlan/PricingPlan";
import Footer from "../../components/footer/Footer" 

const FaqBlade = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from the backend
    axios.get('/api/faqs') // Adjust the URL to your API endpoint
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  return (
    <main>
        <Header/>
        <PricingPlan/>
        Breadcrumb Area
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg">
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#faq">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{'Ask Question'}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'Faq'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Area */}
      <div className="tp-support__area tp-support__bg-2 pt-120 pb-120 p-relative">
        <div className="tp-support__bg tp-support__bg-2">
          <img src="/assets/frontend/img/faq/faq-bg-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-support__title-box text-center mb-70">
                <h3 className="tp-section-title">{'Need A Support?'} 🎧</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-support__faq">
                <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample-2">
                    {faqs.map((faq, index) => (
                      <div key={index} className="accordion-items">
                        <h2 className="accordion-header" id={`heading-${index + 1}`}>
                          <button
                            className={`accordion-buttons ${index > 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index + 1}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse-${index + 1}`}
                          >
                            {faq.title}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${index + 1}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading-${index + 1}`}
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            {faq.excerpt?.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default FaqBlade;
