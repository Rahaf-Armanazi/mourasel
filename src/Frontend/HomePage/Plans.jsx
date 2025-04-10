import { useEffect, useState } from 'react';
import axios from 'axios';

const Plans = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch FAQs data from the backend
    axios.get('/api/faqs') // Adjust the URL based on your backend's API endpoint
      .then(response => {
        setFaqs(response.data.faqs);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  return (
    <main>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg"
        style={{ backgroundImage: `url('/assets/frontend/img/breadcrumb/breadcrumb.jpg')` }}>
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#price">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{'Pricing Plan'}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'Pricing'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Area */}
      {/* Replace with your Pricing component */}
      {/* <Pricing /> */}

      {/* Why Choose Us Area */}
      {/* Replace with your WhyChoose component */}
      {/* <WhyChoose /> */}

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
                      faq.slug !== 'top' && (
                        <div className="accordion-items" key={key}>
                          <h2 className="accordion-header" id={`heading-${key + 1}`}>
                            <button className={`accordion-buttons ${key > 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                              data-bs-target={`#collapse-${key + 1}`} aria-expanded={key === 0} aria-controls={`collapse-${key + 1}`}>
                              {faq.title}
                            </button>
                          </h2>
                          <div id={`collapse-${key + 1}`} className={`accordion-collapse collapse ${key === 0 ? 'show' : ''}`} aria-labelledby={`heading-${key + 1}`}
                            data-bs-parent="#accordionExample-2">
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

export default Plans;
