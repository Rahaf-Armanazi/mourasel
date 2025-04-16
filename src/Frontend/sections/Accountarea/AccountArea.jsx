import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./AccountArea.css";

const AccountArea = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [visible, setVisible] = useState({ left: false, right: false });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.side]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://murseell.com/api/subscribe", {
        email: email,
      });

      if (response.status === 200) {
        setMessage("تم التسجيل بنجاح 🎉");
        setEmail("");
      } else {
        setMessage("حدث خطأ، حاول مرة أخرى.");
      }
    } catch (error) {
      console.error(error);
      setMessage("حدث خطأ أثناء الإرسال.");
    }
  };

  return (
    <div className="account-area">
      <div className="account-container">
        <div className="account-row">
          <div
            ref={leftRef}
            data-side="left"
            className={`account-left fade-left ${visible.left ? "visible" : ""}`}
          >
            <div className="account-wrapper">
              <div className="account-section-box">
                <h3 className="account-title">سجلي الآن وكوني جزء من مورسيل</h3>
                <span>اشتراك سريع</span>
                <p>أدخلي إيميلك واحصلي على أحدث التحديثات والعروض ✨</p>
              </div>
              <div className="account-form">
                <form onSubmit={handleSubmit}>
                  <div className="account-input">
                    <input
                      type="email"
                      placeholder="example@email.com"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">
                    سجل الآن <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
                {message && <p className="account-message">{message}</p>}
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            data-side="right"
            className={`account-right fade-right ${visible.right ? "visible" : ""}`}
          >
            <div className="account-thumb-wrapper">
              <div className="account-thumb">
                <img
                  src="https://murseell.com/uploads/23/03/1678140032Wxqq2w6cndL4uWiEHf8B.png"
                  alt=""
                />
              </div>
              <div className="account-sm-img-1">
                <img
                  src="https://murseell.com/uploads/23/03/1678039536eRShFlGn3Uw9tN1X14E0.png"
                  alt=""
                />
              </div>
              <div className="account-sm-img-2">
                <img
                  src="https://murseell.com/uploads/23/03/16780395365JXHyeVBXUVAldB1V5Se.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountArea;
