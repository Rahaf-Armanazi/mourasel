import { useEffect, useState } from 'react';
import axios from 'axios';

const AboutAppSection = () => {
  const [home, setHome] = useState(null);

  useEffect(() => {
    axios.get('/api/home') // عدلي حسب مسارك الفعلي
      .then(res => setHome(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!home) return null;

  const footerOptions = home.footerOptions || {}; // تأكدي إذا هالمعلومة بترجع من نفس API

  return (
    <div className="tp-app__area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          {/* الصورة */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-app__thumb">
              <img src={home.about_cover} alt="" />
            </div>
          </div>

          {/* النص والأزرار */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-app__wrapper">
              <div className="tp-app__content">
                <h3 className="tp-section-title mb-30">{home.about?.title}</h3>
                <p className="text-dark">{home.about?.description}</p>
              </div>

              <div className="tp-app__download">
                <h4 className="tp-app__title-sm">{home.about?.action_area_title}</h4>
                <div className="tp-app__thumb-sm d-flex">
                  {footerOptions.footer_button_image && (
                    <div className="tp-app__thumb-sm-1">
                      <a href={footerOptions.footer?.right_image_link || '#'}>
                        <img src={footerOptions.footer_button_image} alt="" />
                      </a>
                    </div>
                  )}
                  {footerOptions.footer_left_button_image && (
                    <div className="tp-app__thumb-sm-2">
                      <a href={footerOptions.footer?.right_image_link || '#'}>
                        <img src={footerOptions.footer_left_button_image} alt="" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutAppSection;