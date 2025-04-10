import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginCom.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
        remember,
      });

      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error("خطأ غير متوقع:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-thumb login-space sky-bg d-flex justify-content-center">
                <img src="/assets/frontend/img/contact/login.jpg" alt="Login" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper login-space d-flex justify-content-center">
                <div id="login" className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">تسجيل الدخول إلى حسابك</h3>
                  </div>
                  <div className="tplogin__form">
                    <form onSubmit={handleSubmit}>
                      <div className="tp-mail">
                        <label htmlFor="email">عنوان البريد الإلكتروني</label>
                        <input
                          id="email"
                          type="email"
                          className={errors.email ? "is-invalid" : ""}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoComplete="email"
                          autoFocus
                        />
                        {errors.email && (
                          <span className="invalid-feedback" role="alert">
                            <strong>{errors.email}</strong>
                          </span>
                        )}
                      </div>
                      <div className="tp-password">
                        <label htmlFor="password">كلمة المرور</label>
                        <input
                          id="password"
                          type="password"
                          className={errors.password ? "is-invalid" : ""}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          autoComplete="current-password"
                        />
                        {errors.password && (
                          <span className="invalid-feedback" role="alert">
                            <strong>{errors.password}</strong>
                          </span>
                        )}
                      </div>
                      <div className="tp-forgot-password d-flex justify-content-between">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            id="Remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                          />
                          <label htmlFor="Remember">تذكرني</label>
                        </div>
                        <div className="forgot">
                          <a href="/resetpassword">نسيت كلمة المرور؟</a>
                        </div>
                      </div>
                      <div className="tp-login-button">
                        <button
                          className="tp-btn-blue-square w-100"
                          type="submit"
                          disabled={loading}
                        >
                          <span>{loading ? "جاري الدخول..." : "تسجيل الدخول"}</span>
                        </button>
                      </div>
                      <div className="tp-signup d-flex justify-content-between">
                        <div className="account">
                          <a href="/pricing">ليس لديك حساب؟</a>
                        </div>
                        <div className="signin">
                          <a href="/pricing">سجل الآن</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
