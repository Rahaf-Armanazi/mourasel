import Header from "../components/Header/Header";
import PricingPlan from "../components/PricingPlan/PricingPlan";
import PRicing from "../components/PRicing/Pricing";
import ChooseSection from "../components/ChooseSection/ChooseSection";
import Footer from "../components/footer/Footer"
const Pricing = () => {
  return (
    <>
      <Header />
      <PricingPlan />
      <PRicing />
      <ChooseSection />
      <div className="tp-support__area pt-120 pb-120 grey-bg p-relative">
        <div className="tp-support__title-box text-center mb-70">
          <h3 className="sub" style={{"padding":" 4% 30px 10%"}} >  🎧هل تحتاج إلى دعم؟ </h3>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Pricing;
