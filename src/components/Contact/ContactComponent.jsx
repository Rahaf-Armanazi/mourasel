import "./ContactComponent.css";

const ContactPage = ({ contactPage, errors, successMessage, errorMessage }) => {
    return (
      <main>
        {/* Breadcrumb Area */}
        <div className="breadcrumb__area breadcrumb-height p-relative grey-bg">
          <div className="breadcrumb__scroll-bottom smooth">
            <a href="#contact">
              <i className="far fa-arrow-down"></i>
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content text-center">
                  <h3 className="breadcrumb__title">Contact us</h3>
                  <div className="breadcrumb__list">
                    <span><a href="/">Home</a></span>
                    <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                    <span>Contact us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Contact Area */}
        <div className="tp-conatact-area pt-125 pb-125">
          <div className="container">
            <div className="row">
              {/* Visit Us */}
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="contact-info text-center">
                  <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                  <h4>Visit Us Daily</h4>
                  {contactPage ? (
                    <span>
                      <a href={contactPage?.map_link || "#"} target="_blank" rel="noopener noreferrer">
                        {contactPage?.address || "No address available"}<br />{contactPage?.country || ""}
                      </a>
                    </span>
                  ) : (
                    <p>Loading contact info...</p>
                  )}
                </div>
              </div>
  
              {/* Contact Us */}
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="contact-info text-center">
                  <span className="contact-icon"><i className="fas fa-phone-volume"></i></span>
                  <h4>Contact Us</h4>
                  {contactPage ? (
                    <span>
                      <a href={contactPage?.contact1 ? `tel:${contactPage.contact1}` : "#"}>
                        {contactPage?.contact1 || "No contact info"}<br />{contactPage?.contact2 || ""}
                      </a>
                    </span>
                  ) : (
                    <p>Loading contact info...</p>
                  )}
                </div>
              </div>
  
              {/* Email Us */}
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="contact-info text-center">
                  <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                  <h4>Email Us</h4>
                  {contactPage ? (
                    <span>
                      <a href={`mailto:${contactPage?.email1 || ""}`}>{contactPage?.email1 || "No email available"}</a><br />
                      <a href={`mailto:${contactPage?.email2 || ""}`}>{contactPage?.email2 || ""}</a>
                    </span>
                  ) : (
                    <p>Loading contact info...</p>
                  )}
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="row">
              <div className="col-xl-12">
                <div id="contact" className="contact-form-box pt-60">
                  <div className="contact-form-box text-center">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <h4 className="contact-title">Send us a Message :</h4>
                      </div>
                    </div>
  
                    {/* Error Messages */}
                    {errors && (
                      <div className="alert alert-danger">
                        <ul>
                          {errors.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    )}
  
                    {/* Contact Form */}
                    <form action="/send-mail" method="post">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-contact-input">
                            <input type="text" required name="name" maxLength="20" placeholder="Enter your Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-contact-input">
                            <input type="email" required name="email" maxLength="40" placeholder="Enter your Mail" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-contact-input">
                            <input type="number" required name="phone" maxLength="15" placeholder="Enter your Number" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-contact-input">
                            <input type="text" placeholder="Subject" maxLength="100" required name="subject" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="tp-contact-input">
                            <textarea placeholder="Type your Message" maxLength="500" required name="message"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="tp-submit-button">
                            <button type="submit" className="tp-btn-blue-square"><span>Send Message</span></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default ContactPage;
  