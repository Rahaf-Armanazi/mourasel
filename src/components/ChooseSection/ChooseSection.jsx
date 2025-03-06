import "./ChooseSection.css"; // استيراد ملف التنسيقات
import CountUp from "react-countup"; // استيراد مكتبة العد التزايدي
import { useInView } from "react-intersection-observer"; // استيراد مراقب التمرير

const ChooseSection = () => {
  const counters = [
    {
      icon: "https://murseell.com/uploads/23/03/1678120554hneDbhf9WG6aXvdV0h6q.png",
      number: 1200,
      text: "العملاء النشطون",
    },
    {
      icon: "https://murseell.com/uploads/23/03/1678120554PcP79pqqlziQ71Yf1T70.png",
      number: 390,
      text: "إجمالي العملاء",
    },
    {
      icon: "https://murseell.com/uploads/23/03/1678120554dGH99dtfF4slpDVVHjT1.png",
      number: 600,
      text: "تقييمات إيجابية",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // التأكد من تشغيل التأثير مرة واحدة فقط
    threshold: 0.3, // يبدأ التأثير عندما يكون 30% من العنصر ظاهرًا
  });

  return (
    <>
      <div className="choose-area">
        <div className="container">
          <div className="choose-title-box">
            <h3 className="section-title" > 🎖️ WASender لماذا تختار  </h3>
            <h5 className="choose-subtitle">ابدأ الآن</h5>
          </div>

          <div className="choose-thumb-box">
            <div className="choose-thumb">
              <a href="https://murseell.com/pricing">
                <img
                  src="https://murseell.com/uploads/23/03/1678120554l1bhGUjz28tmiBtCqTK6.png"
                  alt="ميزة 1"
                />
              </a>
            </div>
            <div className="choose-thumb">
              <a href="https://murseell.com/pricing">
                <img
                  src="https://murseell.com/uploads/23/03/1678120554IAVDm9xBLZXYtGAamM0I.png"
                  alt="ميزة 2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" r1" ref={ref}>
        <div className="container">
          <div className="row">
            {counters.map((item, index) => (
              <div className="col-xl-4 col-lg-4" key={index}>
                <div className="counter-item">
                  <div className="counter-icon">
                    <img src={item.icon} alt={item.text} />
                  </div>
                  <div className="counter-content">
                    <span className="counter-number">
                      {inView ? (
                        <CountUp start={0} end={item.number} duration={3} />
                      ) : (
                        "0"
                      )}
                    </span>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseSection;
