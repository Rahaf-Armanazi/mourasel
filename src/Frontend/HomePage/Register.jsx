import { useState } from 'react';
import axios from 'axios';

const Register = ({ plan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/register-plan/${plan.id}`, formData)
      .then(response => {
        // Handle successful registration
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <main>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg"
        style={{ backgroundImage: `url('/assets/frontend/img/breadcrumb/breadcrumb.jpg')` }}>
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#login">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{`Register with ${plan.title}`}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'Lets work together'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Area */}
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
                    <h3 className="tp-login-title">{'Register your Account'}</h3>
                  </div>
                  <div className="tplogin__form">
                    <form onSubmit={handleSubmit}>
                      <div className="tp-mail">
                        <label htmlFor="name">{'Your Name'}</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={errors.name ? 'is-invalid' : ''}
                        />
                        {errors.name && <span className="invalid-feedback" role="alert"><strong>{errors.name}</strong></span>}
                      </div>
                      <div className="tp-mail">
                        <label htmlFor="email">{'Email Address'}</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={errors.email ? 'is-invalid' : ''}
                        />
                        {errors.email && <span className="invalid-feedback" role="alert"><strong>{errors.email}</strong></span>}
                      </div>
                      <div className="tp-password">
                        <label htmlFor="password">{'Password'}</label>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className={errors.password ? 'is-invalid' : ''}
                        />
                        {errors.password && <span className="invalid-feedback" role="alert"><strong>{errors.password}</strong></span>}
                      </div>
                      <div className="tp-login-button">
                        <button className="tp-btn-blue-square w-100" type="submit"><span>{'Sign Up'}</span></button>
                      </div>
                      <div className="tp-signup d-flex justify-content-between">
                        <div className="account">
                          <a href="/login">{'have an account?'}</a>
                        </div>
                        <div className="signin">
                          <a href="/login">{'Sign in now'}</a>
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

export default Register;
