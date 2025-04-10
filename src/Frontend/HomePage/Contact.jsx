import { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState([]);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Fetch contact data from the backend
    axios.get('/api/contact') // Adjust the URL to your API endpoint
      .then(response => {
        setContactData(response.data);
      })
      .catch(error => {
        console.error('Error fetching contact data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/send-mail', formData) // Adjust the URL to your form submission endpoint
      .then(response => {
        setFormSuccess('Message sent successfully!');
        setFormErrors([]);
        setFormError('');
      })
      .catch(error => {
        if (error.response && error.response.data.errors) {
          setFormErrors(error.response.data.errors);
        } else {
          setFormError('An error occurred while sending the message.');
        }
        setFormSuccess('');
      });
  };

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
                <h3 className="breadcrumb__title">{'Contact us'}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{'Contact us'}</span>
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
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                <h4>{'Visit Us Daily'}</h4>
                <span>
                  <a href={contactData.map_link} target="_blank" rel="noopener noreferrer">
                    {contactData.address}<br />{contactData.country}
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon"><i className="fas fa-phone-volume"></i></span>
                <h4>{'Contact Us'}</h4>
                <span>
                  <a href={`tel:${contactData.contact1}`}>{contactData.contact1}<br />{contactData.contact2}</a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                <h4>{'Email Us'}</h4>
                <span>
                  <a href={`mailto:${contactData.email1}`}>{contactData.email1}</a><br />
                  <a href={`mailto:${contactData.email2}`}>{contactData.email2}</a>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div id="contact" className="contact-form-box pt-60">
                <div className="contact-form-box text-center">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <h4 className="contact-title">{'Send us a Message :'}</h4>
                    </div>
                  </div>
                  {formErrors.length > 0 && (
                    <div className="alert alert-danger">
                      <ul>
                        {formErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {formSuccess && (
                    <div className="alert alert-success" role="alert">
                      {formSuccess}
                    </div>
                  )}
                  {formError && (
                    <div className="alert alert-danger" role="alert">
                      {formError}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your Name"
                            required
                            maxLength="20"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your Mail"
                            required
                            maxLength="40"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your Number"
                            required
                            maxLength="15"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            required
                            maxLength="100"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tp-contact-input">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Type your Message"
                            required
                            maxLength="500"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="tp-submit-button">
                          <button type="submit" className="tp-btn-blue-square">
                            <span>{'Send Message'}</span>
                          </button>
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

export default Contact;
