import { Link } from "react-router-dom";
import "./Header.css"; // استيراد التنسيقات

const Header = ({isAuthenticated}) => {
  return (
    <header className="tp-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* اللوجو */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="tp-header__logo">
              <a href="https://murseell.com">
                <img
                  src="https://murseell.com/uploads/24/10/1729805275MOvQIrbC3G0oVC9E2FYl.png"
                  alt="Mursel Logo"
                />
              </a>
            </div>
          </div>

          {/* القائمة */}
          <div className="col-xl-7 col-lg-7 d-none d-lg-block">
            <nav className="tp-header__main-menu">
              <ul>
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/pricing">التسعير</Link>
                </li>
                <li>
                  <Link to="/aboutus">من نحن</Link>
                </li>
                <li>
                  <Link to="/features">الميزات</Link>
                </li>
                <li>
                  <Link to="/blogs">المدونات</Link>
                </li>
                <li>
                  <Link to="/contactus">اتصل بنا</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* الزر */}
          {/* <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex justify-content-end">
            <a
              className="tp-btn-blue d-none d-md-block"
              href="https://murseell.com/login"
            >
              لوحة التحكم
            </a>
            <button className="tp-menu-bar d-lg-none">
              <i className="far fa-bars"></i>
            </button>
          </div> */
          <div className="col-xl-3 col-lg-3 col-md-6 col-5 d-flex align-items-center justify-content-end">
          {!isAuthenticated && (
            <a className="tp-btn-blue-square d-none d-lg-block" href="/login">
              <span>تسجيل الدخول</span>
            </a>
          )}
          <a
            className="tp-btn-blue-square d-none d-md-block"
            href={isAuthenticated ? "/dashboard" : "/pricing"}
          >
            <span>{isAuthenticated ? "لوحة التحكم" : "ابدأ الآن"}</span>
          </a>
          <button className="tp-header__bars tp-menu-bar d-lg-none">
            <i className="far fa-bars"></i>
          </button>
        </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
