import "./Part1.css";
// import mainImage from "../../assets/main-image.png"; // تأكد من مسار الصورة
// import icon1 from "../../assets/icon1.png";
// import icon2 from "../../assets/icon2.png";
// import ctaImage from "../../assets/cta-image.png";

const Part1 = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">عزز تسويقك مع مُرسل</h2>
        <p className="hero-description">
          ابدأ حملاتك الإعلانية وحوّل السلات المتروكة إلى مبيعات بنقرة واحدة مع مُرسل
        </p>
      </div>
      <div className="hero-images">
        {/* <img src={mainImage} alt="Main" className="main-image" /> */}
        {/* <img src={icon1} alt="Icon 1" className="icon icon1" />
        <img src={icon2} alt="Icon 2" className="icon icon2" /> */}
      </div>

      <div className="cta-section">
        {/* <img src={ctaImage} alt="CTA" className="cta-image" /> */}
        <h3 className="cta-text">حوّل السلات المتروكة إلى مبيعات 🚀</h3>
      </div>
    </div>
  );
};

export default Part1;
