import './UserNavbar.css';

const UserNavbar = ({ user, locale = 'ar', expireDate = '2025-03-16' }) => {
  const languages = [
    { key: 'ar', name: 'Arabic' },
    { key: 'en', name: 'English' }
  ];

  const flags = {
    ar: 'sa',
    en: 'us'
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-secondary border-bottom user-navbar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <span>
                للتواصل مع الدعم الفني إضغط <a href="https://wa.me/966501007844">هنا</a>
              </span>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/user/subscription">
                <span>
                  ينتهي اشتراكك بتاريخ: <strong>{expireDate}</strong>
                </span>
              </a>
            </li>

            <li className="nav-item">
              {languages.map(lang => {
                const flag = flags[lang.key];
                return (
                  lang.key !== locale && (
                    <a
                      key={lang.key}
                      href={`/local/${lang.key}`}
                      className="nav-link"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${flag}.png`}
                        alt={lang.name}
                        style={{ width: '20px' }}
                      />
                    </a>
                  )
                );
              })}
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="Avatar"
                      src={
                        user.avatar ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
                      }
                    />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">{user.name}</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">مرحباً!</h6>
                </div>
                <a href="/user/profile" className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>الملف الشخصي</span>
                </a>
                <a href="/user/subscription" className="dropdown-item">
                  <i className="ni ni-settings-gear-65" />
                  <span>الاشتراك</span>
                </a>
                <a href="/user/auth-key" className="dropdown-item">
                  <i className="fas fa-code" />
                  <span>مفتاح المصادقة</span>
                </a>
                <a href="/user/support" className="dropdown-item">
                  <i className="ni ni-support-16" />
                  <span>الدعم</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#logout" className="dropdown-item logout-button">
                  <i className="ni ni-user-run" />
                  <span>تسجيل الخروج</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
