import "./Pricing.css"; // استيراد ملف التنسيقات

const Pricing = () => {
  const plans = [
    {
      title: "باقة البداية",
      price: "SAR27.00",
      period: "/ شهري",
      features: [
        "عدد الرسائل (50000)",
        "عدد جهات الاتصال (لامحدود)",
        "عدد الاجهزة (1)",
        "عدد القوالب (20)",
        "عدد التطبيقات (1)",
        "بوت الرد الالي",
        "الرسائل الجماعية",
        "الرسائل المجدولة",
        "قائمة الدردشة",
        "قائمة المجموعات او القروبات",
      ],
      link: "https://murseell.com/register/1",
    },
    {
      title: "باقة الأعمال شهري",
      price: "SAR99.00",
      period: "/ شهري",
      popular: true,
      features: [
        "عدد الرسائل (لامحدود)",
        "عدد جهات الاتصال (لامحدود)",
        "عدد الاجهزة (2)",
        "عدد القوالب (لامحدود)",
        "عدد التطبيقات (لامحدود)",
        "بوت الرد الالي",
        "الرسائل الجماعية",
        "الرسائل المجدولة",
        "قائمة الدردشة",
        "قائمة المجموعات او القروبات",
      ],
      link: "https://murseell.com/register/2",
    },
    {
      title: "الباقة الأساسية",
      price: "SAR59.00",
      period: "/ شهري",
      features: [
        "عدد الرسائل (100000)",
        "عدد جهات الاتصال (لامحدود)",
        "عدد الاجهزة (1)",
        "عدد القوالب (لامحدود)",
        "عدد التطبيقات (لامحدود)",
        "بوت الرد الالي",
        "الرسائل الجماعية",
        "الرسائل المجدولة",
        "قائمة الدردشة",
        "قائمة المجموعات او القروبات",
      ],
      link: "https://murseell.com/register/3",
    },
  ];

  return (
    <div className="pricing-container">
      <h3 className="pricing-title">التسعير ليتناسب مع جميع أحجام الأعمال</h3>
      <span className="pricing-subtitle">*نساعد الشركات من جميع الأحجام</span>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
            <div className="pricing-header">
              <span>{plan.title}</span>
              {plan.popular && <div className="popular-badge">الأكثر طلباً</div>}
            </div>
            <h3 className="pricing-price">{plan.price} <small>{plan.period}</small></h3>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.link} className="pricing-btn">اشترك الآن</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;