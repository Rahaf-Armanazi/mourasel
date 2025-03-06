import "./WhatsApp.css";
import phoneImage from "../../assets/whatsapp.png"; // استبدلها بمسار الصورة الصحيح

const WhatsApp = () => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-content">
        <h2 className="whatsapp-title">خدمة إشعارات الواتساب</h2>
        <p className="whatsapp-description">
          يمكنك الآن إرسال إشعارات الطلبات والسلات المتروكة عبر واتساب من خلال
          مرسل بكل سهولة وبشكل فوري خلال لحظات
        </p>
        <button className="whatsapp-button">ابدأ الآن</button>
      </div>
      <div className="whatsapp-image">
        <img src={phoneImage} alt="إشعار واتساب" />
      </div>
    </div>
  );
};

export default WhatsApp;
