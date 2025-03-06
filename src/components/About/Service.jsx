import './Service.css';
const features = [
    { id: 1, title: "Feature 1", excerpt: "This is a short description of feature 1.", icon: "icon1.png" },
    { id: 2, title: "Feature 2", excerpt: "This is a short description of feature 2.", icon: "icon2.png" },
    // Add more features as needed
  ];
  
  const counters = [
    { id: 1, value: 84, label: "Years of Experience", icon: "counter-7.png" },
    { id: 2, value: 21, label: "Active Customers", icon: "counter-6.png" },
    { id: 3, value: 102, label: "Positive Reviews", icon: "counter-5.png" },
    { id: 4, value: 0, label: "Satisfied customers", icon: "counter-8.png" },
  ];
  
  function Service() {
    return (
      <div className="App">
        <div className="service-area grey-bg">
          <div className="container">
            <div className="service-header">
              <h3>Our Features</h3>
              <a href="/features" className="see-all-btn">See All Features</a>
            </div>
            <div className="features-grid">
              {features.map((feature) => (
                <div className="feature-item" key={feature.id}>
                  <img src={feature.icon} alt={feature.title} className="feature-icon" />
                  <h4><a href={`/feature/${feature.id}`}>{feature.title}</a></h4>
                  <p>{feature.excerpt}</p>
                  <a href={`/feature/${feature.id}`} className="feature-link">
                    <svg width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="counter-area grey-bg">
          <div className="container">
            <div className="counters-grid">
              {counters.map((counter) => (
                <div className="counter-item" key={counter.id}>
                  <img src={counter.icon} alt={counter.label} className="counter-icon" />
                  <div className="counter-content">
                    <h4>{counter.value}+</h4>
                    <span>{counter.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Service;