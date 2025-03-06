import Header from "../components/Header/Header"
import Part1 from "../components/Part1/Part1";
import WhatsApp from "../components/WhatsApp/WhatsApp";
import PRicing from "../components/PRicing/Pricing";
import YSOTB from "../components/YourStoreOnTheBasket/YSOTB";
import MoreQuestion from "../components/morequestions/MoreQuestions";
import Footer from "../components/footer/Footer";
// import { WhatsApp } from "@mui/icons-material";
const Home = () => {
  // Simulating `$features_area` variable
  
  return (
    <>
      <Header/>
      <Part1 />
      <WhatsApp />
      <PRicing />
      <YSOTB />
      <MoreQuestion />
      <Footer />
    </>
  );
};

export default Home;


{/* <Hero /> */}
// {featuresArea === "active" && (
//   <div id="feature-area" className="tp-feature__area">
    // <div className="container">
      {/* <div className="row"> */}
      {/* <div className="col-12">
                          <div className="tp-feature__section-box text-center">
                              <h3 className="tp-section-title">{home.features.title}</h3>
                          </div>
                      </div> */}
      {/* </div> */}
//       <div className="row w-100 m-0">
//                       <Features limit={9} />
//                   </div>
//     </div>
//   </div>
// )}