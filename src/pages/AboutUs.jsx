import Header from "../components/Header/Header";
import PricingPlan from "../components/PricingPlan/PricingPlan";
import AboutComp from "../components/About/AboutComp";
import Service from "../components/About/Service";
import PRicing from "../components/PRicing/Pricing";
import Team from "../components/About/Team";
import MoreQuestion from "../components/morequestions/MoreQuestions"
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
    <Header/>
    <PricingPlan/>
    <AboutComp/>
    <Service/>
    <PRicing/>
    <Team/>
    <MoreQuestion/>
    <Footer/>
    </>
  );
};
export default AboutUs;