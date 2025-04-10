import { useEffect, useState } from 'react';
import axios from 'axios';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch pricing plans data from the backend
    axios.get('/api/plans') // Adjust the URL based on your backend's API endpoint
      .then(response => {
        setPlans(response.data.plans);
      })
      .catch(error => {
        console.error('Error fetching pricing plans:', error);
      });
  }, []);

  return (
    <div id="price" className="tp-price__area tp-price__border pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-10">
            <div className="tp-price__section text-center pb-60">
              <h3 className="tp-section-title-sm pb-20">{'Pricing to suite all size of business'}</h3>
              <span>{'*We help companies of all sizes'}</span>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-end align-items-lg-center">
          {plans.map((plan, index) => (
            <div className="plan col-xl-4 col-lg-4 col-md-6 mb-30" key={index}>
              <div className={`tp-price__item ${plan.is_recommended ? 'tp-price__active' : ''} z-index`} style={{
                backgroundColor: plan.is_recommended ? '#017EFA' : '',
                color: plan.is_recommended ? 'white' : '',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '0.5px solid var(--tp-common-sky)'
              }}>
                <div className="tp-price__icon d-flex justify-content-between align-items-center" style={{ marginBottom: '17px', width: '100%' }}>
                  <span style={{ color: plan.is_recommended ? 'white' : '', fontSize: '18px' }}>{plan.title}</span>
                  {plan.is_recommended && (
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', color: '#017EFA', padding: '8px' }}>الاكثر طلباً</div>
                  )}
                </div>
                <h3 className="tp-price__title" style={{ color: plan.is_recommended ? 'white' : '', textAlign: 'right' }}>
                  {plan.price} <small className="tp-price__small_title">{'/' + (plan.days === 30 ? 'month' : 'year')}</small>
                </h3>
                <div className={`tp-price__list ${plan.is_recommended ? 'plan-active' : ''}`}>
                  <ul>
                    {plan.data.map((data, key) => (
                      <li key={key} className={data.value === false && data.is_bool ? 'd-none' : ''}>
                        <img style={{ width: '25px', height: '25px', color: 'white' }} src="/assets/img/check-icon.svg" alt="check icon" />
                        {data.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`tp-price__btn ${plan.is_recommended ? 'plan-active' : ''}`}>
                  <a className="tp-btn-border" href={`/register/${plan.id}`}>
                    <span>{plan.is_trial ? `Free ${plan.trial_days} days trial` : 'Sign Up Now'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
