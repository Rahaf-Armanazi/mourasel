import { useEffect, useState } from "react";
import axios from "axios";
import './Hero2.css';

const HeroSection = () => {
  const [homeData, setHomeData] = useState(null);

  // استخدام useEffect لجلب البيانات من الخادم عند تحميل المكون
  useEffect(() => {
    axios.get('/api/home')  // هنا نقوم بجلب البيانات من API (تأكد من المسار)
      .then((response) => {
        setHomeData(response.data);  // تعيين البيانات التي تم جلبها
      })
      .catch((error) => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;  // عرض رسالة تحميل أثناء جلب البيانات
  }

  return (
    <div className="tp-header-bg">
      <img src={homeData.heroBgImage || '/assets/frontend/img/hero/hero-bg-2.png'} alt="Hero Background" />
      
      <div className="tp-hero__area tp-hero__bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-12">
              <div className="tp-hero__wrapper text-center">
                <div className="tp-hero__content text-center">
                  <h2 className="tp-hero__title-lg pb-40 theme-color wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                    {homeData.heading ? homeData.heading : 'Default Heading'}  {/* التأكد من وجود البيانات قبل استخدامها */}
                  </h2>
                </div>

                <div className="tp-hero__contact pb-70 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <p style={{ fontSize: '25px', color: 'black' }}>
                    ابدأ حملاتك الإعلانية وحوّل السلات المتروكة إلى مبيعات بنقرة واحدة مع مُرسل
                  </p>
                </div>

                <div className="tp-hero__thumb-2 p-relative special-m">
                  <img className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s" src={homeData.heroImage || '/assets/frontend/img/hero/default-hero.png'} alt="Hero Image" />
                  
                  <div className="tp-hero__img-1 d-none d-lg-block">
                    <img src={homeData.heroLeftImage || '/assets/frontend/img/hero/default-left-image.png'} alt="Left Image" />
                  </div>
                  <div className="tp-hero__img-2 d-none d-lg-block">
                    <img src={homeData.heroRightImage || '/assets/frontend/img/hero/default-right-image.png'} alt="Right Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
