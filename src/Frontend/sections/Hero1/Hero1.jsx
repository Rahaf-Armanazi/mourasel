import { useEffect, useState } from "react";
import axios from "axios";
import "./Hero1.css"; // ملف التنسيق الخاص به

const HeroSection = () => {
  const [home, setHome] = useState({});
  const [heading, setHeading] = useState("");

  useEffect(() => {
    axios.get("/api/home")
      .then(res => {
        setHome(res.data);
        setHeading(res.data.heading);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="tp-hero__area tp-hero__bg p-relative" style={{ backgroundImage: `url(/assets/frontend/img/hero/hero-bg.png)` }}>
      <div className="scroll-down smooth d-none d-xl-block">
        <a href="#feature-area">
          <div className="scroll-dots d-flex justify-content-center flex-column align-items-center">
            <span className="rotate-text">Scroll Down</span>
            <span className="circle-1"></span>
            <span className="circle-2"></span>
            <span className="circle-3"></span>
            <button className="scroll-mouse"><i className="fal fa-mouse"></i></button>
          </div>
        </a>
      </div>

      {/* روابط التواصل الاجتماعي */}
      <div className="tp-hero__social d-none d-xl-flex">
        {home?.socials?.twitter && (
          <a className="p-relative" href={home.socials.twitter}><i className="fab fa-twitter"></i>
            <div className="social-icon"><span><i className="fab fa-twitter"></i> Twitter</span></div>
          </a>
        )}
        {home?.socials?.facebook && (
          <a className="p-relative" href={home.socials.facebook}><i className="fab fa-facebook-f"></i>
            <div className="social-icon facebook"><span><i className="fab fa-facebook-f"></i> Facebook</span></div>
          </a>
        )}
        {home?.socials?.instagram && (
          <a className="p-relative" href={home.socials.instagram}><i className="fab fa-instagram"></i>
            <div className="social-icon instagram"><span><i className="fab fa-instagram"></i> Instagram</span></div>
          </a>
        )}
        {home?.socials?.linkedin && (
          <a className="p-relative" href={home.socials.linkedin}><i className="fab fa-linkedin"></i>
            <div className="social-icon dribbble"><span><i className="fab fa-linkedin"></i> LinkedIn</span></div>
          </a>
        )}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-12">
            <div className="tp-hero__wrapper">
              <div className="tp-hero__content pb-70 text-center">
                <h2 className="tp-hero__title">{heading}</h2>
              </div>

              <div className="tp-hero__thumb text-xl-block text-lg-center p-relative">
                <img src={home.hero_image} alt="" />

                <div className="tp-hero__thumb-icon">
                  {home.hero_left_image && (
                    <span className="hero-icon-1 tp-pulse-border z-index d-none d-md-block"><img src={home.hero_left_image} alt="" /></span>
                  )}
                  {home.hero_right_image && (
                    <span className="hero-icon-2 tp-pulse-border z-index d-none d-md-block"><img src={home.hero_right_image} alt="" /></span>
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

export default HeroSection;
