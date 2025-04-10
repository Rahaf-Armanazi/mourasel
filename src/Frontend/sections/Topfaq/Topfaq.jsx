import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FaqItem from './FaqItem';
import './faq.css'; // إذا بدك نضيف تنسيق

const FaqSection = () => {
  const [faqData, setFaqData] = useState({
    title: '',
    description: '',
    faqs: [],
  });

  useEffect(() => {
    axios.get('/api/home') // غيري الرابط حسب باك إند Laravel
      .then(res => {
        const home = res.data.home;
        const faqs = res.data.faqs.filter(faq => faq.slug === 'top');
        setFaqData({
          title: home.top_faq?.title || '',
          description: home.top_faq?.description || '',
          faqs,
        });
      });
  }, []);

  return (
    <div className="tp-faq__area grey-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-faq__wrapper-box">
              <div className="tp-faq__title-box">
                <h3 className="tp-section-title">{faqData.title}</h3>
                <p>{faqData.description}</p>
              </div>
              <div className="tp-custom-accordio accordion" id="accordionExample">
                {faqData.faqs.map((faq, index) => (
                  <FaqItem key={faq.id} faq={faq} index={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-faq__thumb text-center">
              <img src="https://ik.imagekit.io/gupshup/revamp/assets/v3/images/home/v5-casual-life.png?ik-sdk-version=react-1.1.1" alt="faq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
