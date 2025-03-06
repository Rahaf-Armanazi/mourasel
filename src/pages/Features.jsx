import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import ChooseSection from "../components/ChooseSection/ChooseSection";
import PricingPlan from "../components/PricingPlan/PricingPlan";

const Features = () => {
  return (
    <>
    <Header/>
    <PricingPlan/>
    <ChooseSection/>
    <div className="tp-support__area pt-120 pb-120 grey-bg p-relative">
        <div className="tp-support__title-box text-center mb-70">
          <h3 className="sub" style={{"padding":" 4% 30px 10%"}} >  🎧هل تحتاج إلى دعم؟ </h3>
        </div>
    </div>
    <Footer/>
    </>
  );
};
export default Features;