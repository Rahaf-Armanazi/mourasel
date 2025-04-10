// TestimonialSection.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Index1testimonial.css'; // لو عندك CSS خاص

const Index1testimonial = () => {
// Testimonials.jsx

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('/api/testimonials') // غيري المسار حسب باك إندك
      .then(res => setTestimonials(res.data))
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

  return (
    <div className="tp-testimonial__area grey-bg pt-110 pb-120 fix">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-12">
            <div className="tp-testimonial__section text-center pb-50">
              <h3 className="tp-section-title">Testimonials</h3>
            </div>
          </div>
        </div>

        <div className="tp-testimonial__section">
          <div className="tp-testimonial__active">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="tp-testimonial__slider-item d-flex align-items-center p-relative"
              >
                <div className="tp-testimonial__slider-content">
                  <p>{testimonial.excerpt?.value?.slice(0, 200) || ''}</p>
                  <h4 className="tp-testimonial__slider-title">
                    - {testimonial.title || ''}, {testimonial.slug || ''}
                  </h4>
                </div>
                <div className="tp-testimonial__slider-img">
                  <img src={testimonial.preview?.value || ''} alt="" />
                </div>
                <div className="tp-testimonial__slider-quote">
                  <i className="fas fa-quote-left"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index1testimonial;
