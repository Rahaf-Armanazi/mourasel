// import React from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";
// // import { useTranslation } from "react-i18next";
// function Footer() {
//     return();
// }

// export default Footer;

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="hero-section">
          <h1 className="hero-title" style={{ color: "aliceblue" }}>
            جاهز للانطلاق 🚀
          </h1>
          <p className="hero-subtitle">
            أتمتة محادثاتك وتعزيز استراتيجيتك التسويقية الخاصة بك
          </p>
          <div className="buttons">
            <div>
              <a href="/pricing" className="btn btn-primary">
                Try For Free
              </a>
            </div>
            <div>
              <a href="/pricing" className="btn btn-secondary">
                Get Start
              </a>
            </div>
          </div>
        </div>

        <div
          className="tp-footer-bottom__area mt-80 wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".9s"
        >
          <div className="container" style={{ padding: 0 }}>
            <div className="tp-footer-bottom__border-top pt-40">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-6 col-12 order-2 order-lg-1 text-center text-md-start">
                  <div className="tp-footer-bottom__logo">
                    <a href="https://murseell.com">
                      <img
                        src="https://murseell.com/uploads/24/10/1729805275AdYN57oBChJ28fsGriji.png"
                        alt="Murseell Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 col-12 order-1 order-lg-2 d-none d-sm-block">
                  <div className="tp-footer-bottom__menu">
                    <ul>
                      <li>
                        <Link to="/features">Features</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/blogs">News</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 order-2 order-lg-3 text-center text-md-end">
                  <div className="tp-footer-bottom__social">
                    <select className="w-100 text-center language-switch">
                      <option value="ar" selected>
                        ar
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="footer-divider" />
        <div className="footer-nav">
          <select className="language-select">
            <option>Ar</option>
          </select>
          <nav>
            <ul className="nav-links">
              <li>NEWS</li>
              <li>FAQ</li>
              <li>PRICING</li>
              <li>ABOUT US</li>
              <li>FEATURES</li>
            </ul>
          </nav>
        </div>
        <div className="footer-logo">
          <img src="/logo.png" alt="مرسل MURSEL" />
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
