import { useEffect, useRef, useState } from "react";
import "./CtaArea.css";

const CtaArea = () => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="cta-area">
      <div className="cta-grey-bg"></div>
      <div className="cta-white-bg"></div>
      <div className="cta-container">
        <div className="cta-wrapper">
          {/* أشكال */}
          <div className="cta-shape cta-shape-1">
            <img src="https://murseell.com/assets/frontend/img/cta/cta-shape-1.png" alt="" />
          </div>
          <div className="cta-shape cta-shape-2">
            <img src="https://murseell.com/assets/frontend/img/cta/cta-shape-2.png" alt="" />
          </div>
          <div className="cta-shape cta-shape-3">
            <img src="https://murseell.com/assets/frontend/img/cta/cta-shape-3.png" alt="" />
          </div>
          <div className="cta-shape cta-shape-4">
            <img src="https://murseell.com/assets/frontend/img/cta/cta-shape-4.png" alt="" />
          </div>
          <div className="cta-shape cta-shape-5">
            <img src="https://murseell.com/assets/frontend/img/cta/cta-shape-5.png" alt="" />
          </div>

          {/* المحتوى */}
          <div
            ref={contentRef}
            className={`cta-content cta-fade-up ${isVisible ? "visible" : ""}`}
          >
            <h3 className="cta-title">متجرك على سلة ؟</h3>
            <a
              className="cta-btn"
              href="https://apps.salla.sa/ar/app/1483057683?category=all"
            >
              <span>تثبيت التطبيق على سلة</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
