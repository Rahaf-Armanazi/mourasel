import Header from "../components/Header/Header";
import PricingPlan from "../components/PricingPlan/PricingPlan";
import Footer from "../components/footer/Footer" 

const Faq=()=>{
    return (
        <>
        <Header/>
        <PricingPlan/>
        <div className="tp-support__area pt-120 pb-120 grey-bg p-relative">
        <div className="tp-support__title-box text-center mb-70">
          <h3 className="sub" style={{"padding":" 4% 30px 10%"}} >  🎧هل تحتاج إلى دعم؟ </h3>
        </div>
    </div>
        <Footer/>
        </>
    )
}
export default Faq;