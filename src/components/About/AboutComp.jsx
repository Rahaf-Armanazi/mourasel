import "./AboutComp.css";

const AboutComp = ({ about }) => {
  const descriptions = about?.description ? about.description.split("<br>") : [];
  const facilities = about?.facilities ? about.facilities.split(",") : [];

  return (
    <div id="about-inner__area" className="about-inner__area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12 text-center">
            <span className="about-inner__subtitle">About Company</span>
            <h3 className="tp-section-title-md">{about?.section_title || ""}</h3>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xl-7 col-lg-7">
            <div className="about-inner__wrapper wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="row">
                <div className="col-md-6 mb-20">
                  <div className="about-inner__thumb w-img">
                    {about?.about_image_1 && <img src={about.about_image_1} alt="About Image 1" />}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-inner__content-item d-flex align-items-center">
                    <span>{about?.experience || ""}</span>
                    <p>{about?.experience_title || ""}</p>
                  </div>
                  <div className="about-inner__thumb-2 w-img mb-20">
                    {about?.about_image_2 && <img src={about.about_image_2} alt="About Image 2" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
            <div className="about-inner__right">
              <div className="about-inner__content">
                {descriptions.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
              <div className="about-inner__list">
                <ul>
                  {facilities.map((facility, index) => (
                    <li key={index}><i className="far fa-check"></i> {facility}</li>
                  ))}
                </ul>
              </div>
              <div className="about-inner__btn d-flex align-items-center">
                {about?.button_title && (
                  <a className="tp-btn-blue-square mr-20" href={about.button_link}>
                    <span>{about.button_title}</span>
                  </a>
                )}
                {about?.introducing_video && (
                  <a className="about-inner__play-btn popup-video" href={about.introducing_video}>
                    <i className="fas fa-play"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;




// import { Link } from "react-router-dom"; // استخدام React Router
// // بدلاً من Image من next/image، نستخدم العنصر القياسي <img>
// const AboutComp = ({ about, descriptions, facilities, features, counter, teams, faqs }) => {
//   return (
//     <main>
//       {/* Breadcrumb Area */}
//       <div className="breadcrumb-area" style={{ backgroundImage: `url(/assets/frontend/img/breadcrumb/breadcrumb.jpg)` }}>
//         <div className="container text-center">
//           <h3>{about?.breadcrumb_title}</h3>
//           <nav>
//             <Link to="/">Home</Link> <span> / About Us</span>
//           </nav>
//         </div>
//       </div>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="container text-center">
//           <h3>{about?.section_title}</h3>
//           <div className="about-content">
//             <div className="about-images">
//               <img src={about?.about_image_1 || ""} alt="About Image 1" width={300} height={200} />
//               <p>{about?.experience} {about?.experience_title}</p>
//               <img src={about?.about_image_2 || ""} alt="About Image 2" width={300} height={200} />
//             </div>
//             <div className="about-text">
//               {descriptions.map((desc, index) => (
//                 <p key={index}>{desc}</p>
//               ))}
//               <ul>
//                 {facilities.map((facility, index) => (
//                   <li key={index}>{facility}</li>
//                 ))}
//               </ul>
//               {about?.button_title && (
//                 <Link to={about?.button_link} className="btn">{about?.button_title}</Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="container">
//           <h3>Our Features</h3>
//           <div className="features-grid">
//             {features.map((feature, index) => (
//               <div key={index} className="feature-item">
//                 <img src={feature?.preview?.value || ""} alt={feature.title} width={50} height={50} />
//                 <h4>{feature.title}</h4>
//                 <p>{feature?.excerpt?.value}</p>
//                 <Link to={`/feature/${feature.slug}`}>Read More</Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Counter Section */}
//       <section className="counter-section">
//         <div className="container">
//           <div className="counter-grid">
//             <div className="counter-item"><h4>{counter?.experience}+</h4><span>Years of Experience</span></div>
//             <div className="counter-item"><h4>{counter?.active_customers}+</h4><span>Active Customers</span></div>
//             <div className="counter-item"><h4>{counter?.positive_reviews}+</h4><span>Positive Reviews</span></div>
//             <div className="counter-item"><h4>{counter?.satisfied_customers}+</h4><span>Satisfied Customers</span></div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="team-section">
//         <div className="container">
//           <h3>Meet Our Team</h3>
//           <div className="team-grid">
//             {teams.map((team, index) => (
//               <div key={index} className="team-member">
//                 <img src={team.avatar || ""} alt={team.name} width={150} height={150} />
//                 <h4>{team.name}</h4>
//                 <p>{team.position}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq-section">
//         <div className="container">
//           <h3>Frequently Asked Questions</h3>
//           <div className="faq-list">
//             {faqs.map((faq, index) => (
//               <details key={index}>
//                 <summary>{faq.title}</summary>
//                 <p>{faq?.excerpt?.value}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutComp;
