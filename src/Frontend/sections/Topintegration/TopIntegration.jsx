import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntegrationSection = ({ home, brands }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="tp-integration__area tp-integration__bg pt-120">
      <div className="tp-integration__title-box text-center">
        <h3 className="tp-section-title">{home.integration?.title ?? ''}</h3>
      </div>

      <div className="tp-integration__wrapper d-none d-md-block p-relative">
        <div className="tp-integration__border-shape">
          <img src="assets/frontend/img/border/border-shapepng.png" alt="" />
        </div>

        {brands.map((brand, index) => 
          brand.lang === 'integration' && (
            <div
              key={index}
              className={`tp-integration__icon int-icon-${index + 1} wow tpfadeUp`}
              data-wow-duration=".7s"
              data-wow-delay={`.${3 + index}s`}
              data-aos="fade-up"
            >
              <span><img src={brand.slug} alt="" /></span>
            </div>
          )
        )}
      </div>

      <div className="tp-integration__bottom p-relative text-center">
        <div className="tp-integration__big-thumb wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
          <img src={home.integration_cover ?? ''} alt="" />
        </div>

        <div
          className="int-icon-bottom int-icon-8 d-none d-md-block wow tpfadeLeft"
          data-wow-duration=".7s"
          data-wow-delay=".8s"
        >
          <span className="tp-pulse-border z-index">
            <img src={home.integration_left ?? ''} alt="" />
          </span>
        </div>

        <div
          className="int-icon-bottom int-icon-9 d-none d-md-block wow tpfadeRight"
          data-wow-duration=".7s"
          data-wow-delay=".7s"
        >
          <span className="tp-pulse-border z-index">
            <img src={home.integration_right ?? ''} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
