import { useEffect, useState } from "react";
import axios from "axios";
import "./Features.css"; // إذا عندك تنسيقات مخصصة

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/features?limit=3") // غيري الرابط حسب مشروعك
      .then((res) => setFeatures(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      {features.map((feature, index) => (
        <div
          key={index}
          className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".5s"
        >
          <div className="tp-service__item tp-service__inner-item service-inner mb-20">
            <div className="tp-service__icon">
              <img
                src={feature.preview?.value || ""}
                alt=""
              />
            </div>
            <div className="tp-service__content">
              <h4 className="tp-service__title-sm">
                <a href={`/feature/${feature.slug}`}>
                  {feature.title?.slice(0, 20)}
                </a>
              </h4>
              <p>{feature.excerpt?.value?.slice(0, 100)}</p>
            </div>
            <div className="tp-service__link">
              <a href={`/feature/${feature.slug}`}>
                <svg width="39" height="16" viewBox="0 0 39 16" fill="none">
                  <path
                    d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
