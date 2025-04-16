import "./FaqArea.css";

const FaqArea = () => {
  return (
    <div className="faq-area">
      <div className="faq-container">
        <div className="faq-box">
          <div className="faq-icon">
            <a href="#">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9542 23.9764L0 29V0H30V23.9764H5.9542Z"
                  fill="#017EFA"
                ></path>
              </svg>
            </a>
          </div>
          <div className="faq-content">
            <h4 className="faq-title">هل لديك المزيد من الأسئلة؟</h4>
            <p className="faq-text">
              مدفوعات شاملة وإدارة مالية في حل واحد. تعرّف على المنصة المناسبة
              لمساعدتك على تحقيق ذلك.
            </p>
            <a className="faq-btn" href="https://murseell.com/contact">
              أرسل بريدًا مباشرًا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
