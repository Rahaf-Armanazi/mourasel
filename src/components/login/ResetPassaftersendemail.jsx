import { useState } from 'react';
import Header from "../Header/Header";
import TopHeader from "../Header/TopHeader";
import Footer from "../footer/Footer";

const ResetPassaftersendemail = ({ token, email }) => {
  const [formData, setFormData] = useState({
    email: email || '',
    password: '',
    password_confirmation: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
                <img src="/frontend/img/contact/login.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper login-space d-flex justify-content-center">
                <div id="login" className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Reset Password</h3>
                  </div>
                  <div className="tplogin__form">
                    {status && (
                      <div className="alert alert-success" role="alert">
                        {status}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="token" value={token} />
                      <div className="tp-mail">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          className={errors.email ? 'is-invalid' : ''}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
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

                      <div className="tp-mail">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className={errors.password ? 'is-invalid' : ''}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          autoComplete="new-password"
                        />
                        {errors.password && (
                          <span className="invalid-feedback" role="alert">
                            <strong>{errors.password}</strong>
                          </span>
                        )}
                      </div>

                      <div className="tp-mail">
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input
                          id="password-confirm"
                          type="password"
                          className={errors.password_confirmation ? 'is-invalid' : ''}
                          name="password_confirmation"
                          value={formData.password_confirmation}
                          onChange={handleChange}
                          required
                          autoComplete="new-password"
                        />
                        {errors.password_confirmation && (
                          <span className="invalid-feedback" role="alert">
                            <strong>{errors.password_confirmation}</strong>
                          </span>
                        )}
                      </div>

                      <div className="tp-login-button">
                        <button className="tp-btn-blue-square w-100" type="submit">
                          <span>Reset Password</span>
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

export default ResetPassaftersendemail;
