import { useState } from 'react';
import Header from "../Header/Header";
import TopHeader from "../Header/TopHeader";
import Footer from "../footer/Footer";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus(null);
      setError(null);
  
      try {
        const response = await fetch("http://127.0.0.1:8000/password/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          setStatus("تم إرسال رابط إعادة تعيين كلمة المرور بنجاح!");
        } else {
          setError("حدث خطأ أثناء إرسال الطلب. تأكد من صحة البريد الإلكتروني.");
        }
      } catch (error) {
        setError("تعذر الاتصال بالخادم. حاول مجددًا لاحقًا.");
      }
    };
  
  

  return (
    <main>
        <TopHeader/>
        <Header/>
      {/* <div className="breadcrumb__area breadcrumb-height p-relative grey-bg">
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#login">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">Reset Password</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">Home</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>Reset Password</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
 
    <div className="tp-login-area">
      <div className="container-fluid p-0">
        <div className="row gx-0 align-items-center">
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="tp-login-thumb login-space sky-bg d-flex justify-content-center">
              <img src="http://127.0.0.1:8000/frontend/img/contact/login.jpg" alt="Login" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="tp-login-wrapper login-space d-flex justify-content-center">
              <div id="login" className="tplogin">
                <div className="tplogin__title">
                  <h3 className="tp-login-title">تغيير كلمة المرور</h3>
                </div>
                <div className="tplogin__form">
                  {status && <div className="alert alert-success">{status}</div>}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="tp-mail">
                      <label htmlFor="email">عنوان البريد الإلكتروني</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        autoFocus
                      />
                    </div>
                    <div className="tp-login-button">
                      <button className="tp-btn-blue-square w-100" type="submit">
                        <span>إرسال رابط إعادة تعيين كلمة المرور</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </main>
  );
};

export default ResetPassword;
