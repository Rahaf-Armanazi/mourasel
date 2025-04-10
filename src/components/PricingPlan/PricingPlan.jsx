import "./PricingPlan.css";
import { Link, useLocation } from "react-router-dom";

const PricingPlan = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname);

  // تحديد العناوين والمسارات بناءً على الصفحة الحالية
  const titles = {
    "/pricing": "خطة التسعير",
    "/aboutus": "About WhatServe",
    "/contactus": "اتصل بنا",
    "/blogs": "Recent Blogs",
    "/features": "مميزاتنا",
    "/faq": "اطرح سؤالاً",
    "/login": "تسجيل الدخول",
    "/resetpassword": "تغيير كلمة المرور",
  };

  const pageTitle = titles[location.pathname.toLowerCase().trim()] || "الصفحة"; // العنوان الافتراضي

  // دالة التمرير التلقائي إلى العنصر المستهدف
  const scrollToPrice = (e) => {
    e.preventDefault();
    const priceSection = document.getElementById("price");
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="breadcrumb__area">
      <div className="breadcrumb__scroll-bottom">
        <a href="#price" onClick={scrollToPrice}>
          <i className="fas fa-arrow-down"></i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center">
              <h3 className="breadcrumb__title">{pageTitle}</h3>
              <div className="breadcrumb__list">
                <span>
                  <Link to="/">الرئيسية</Link>
                </span>
                <span className="dvdr">
                  <i className="fa fa-angle-right"></i>
                </span>
                <span>{pageTitle}</span> {/* اسم الصفحة الديناميكي */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
