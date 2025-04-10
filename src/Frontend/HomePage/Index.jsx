import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import TopArea from "./components/TopArea";
// import FAQ from "./components/FAQ";
// import Integration from "./components/Integration";
// import Pricing from "./components/Pricing";
// import Feedback from "./components/Feedback";
// import WhyChoose from "./components/WhyChoose";
// import SupportFAQ from "./components/SupportFAQ";

const Index = () => {
  const [homeData, setHomeData] = useState(null);
  const [featuresArea, setFeaturesArea] = useState(false);

  useEffect(() => {
    axios.get("172.16.32.69:3010/index  ")
      .then(response => {
        setHomeData(response.data);
        setFeaturesArea(response.data.features_area === "active");
      })
      .catch(error => console.error("Error fetching home data:", error));
  }, []);

  return (
    <>
      <div className="body-overlay"></div>
      <Header />
      <main>
        {/* <Hero /> */}
        {featuresArea && (
          <div id="feature-area" className="tp-feature__area pt-60 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tp-feature__section-box text-center mb-70">
                    <h3 className="tp-section-title">
                      {homeData?.features?.title || ""}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <Features limit={6} /> */}
              </div>
            </div>
          </div>
        )}
        {/* <TopArea /> */}
        {/* <FAQ /> */}
        {/* <Integration /> */}
        {/* <Pricing /> */}
        {/* <Feedback /> */}
        {/* <WhyChoose /> */}
        {/* <SupportFAQ /> */}
      </main>
    </>
  );
};

export default Index;
