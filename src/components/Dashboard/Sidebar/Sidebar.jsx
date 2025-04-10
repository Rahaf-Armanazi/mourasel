import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
        <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scroll-wrapper scrollbar-inner" style="position: relative;"><div class="scrollbar-inner scroll-content scroll-scrolly_visible" style="height: auto; margin-bottom: 0px; margin-right: 0px; max-height: 721.6px;">
        {/* <!-- Brand --> */}
        <div class="sidenav-header d-flex align-items-center">
            <a class="navbar-brand" href="http://127.0.0.1:8000/login">
                <img src="http://127.0.0.1:8000/uploads/23/04/16809883098PkELjA7CZYT8XyFgvaU.png" class="navbar-brand-img" alt="..."/>
            </a>
            <div class="ml-auto">
                {/* <!-- Sidenav toggler --> */}
                <div class="sidenav-toggler d-none d-xl-block active" data-action="sidenav-unpin" data-target="#sidenav-main">
                    <div class="sidenav-toggler-inner">
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-inner">
            {/* <!-- Collapse --> */}
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                {/* <!-- Nav items --> */}
 <ul class="navbar-nav">
         <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/dashboard">
     <i class="fi fi-rs-dashboard"></i>
      <span class="nav-link-text">لوحة التحكم</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/device">
     <i class="fi-rs-sensor-on"></i>
      <span class="nav-link-text">أجهزتي</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/template">
     <i class="fi  fi-rs-template-alt"></i>
      <span class="nav-link-text">القوالب</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/sent-text-message">
     <i class="fi fi-rs-paper-plane"></i>
      <span class="nav-link-text">إرسال فردي</span>
    </a>
  </li>
      
      <li class="nav-item">
      <a class="nav-link " href="http://127.0.0.1:8000/user/autoresponder">
        <i class="fi fi-rs-reply-all"></i>
        <span class="nav-link-text">الرد التلقائي</span>
      </a>
    </li>
      <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/chatbot">
     <i class="fas fa-robot"></i>
      <span class="nav-link-text">روبوت المحادثة (الدردشة الآلية)</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/apps">
     <i class="fas fa-cube"></i>
      <span class="nav-link-text">تطبيقاتي</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/contact">
     <i class="fi  fi-rs-address-book"></i>
      <span class="nav-link-text">قائمة جهات الاتصال</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/bulk-message">
     <i class="fi fi-rs-rocket-lunch"></i>
      <span class="nav-link-text">إرسال رسائل جماعية</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/schedule-message">
     <i class="ni ni-calendar-grid-58"></i>
      <span class="nav-link-text">الحملات</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/logs">
     <i class="ni ni-ui-04"></i>
      <span class="nav-link-text">سجل الرسائل</span>
    </a>
  </li>
        <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/webhooks">
     <i class="fi fi-rs-chart-connected"></i>
      <span class="nav-link-text">سجلات webhook</span>
    </a>
  </li>
  </ul>

  {/* <!-- Navigation --> */}
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link " href="http://127.0.0.1:8000/user/linked-apps">
        <i class="fi fi-rs-devices"></i>
        <span class="nav-link-text">التطبيقات المرتبطة</span>
      </a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link " href="http://127.0.0.1:8000/user/customers">
        <i class="fi fi-rs-users"></i>
        <span class="nav-link-text">العملاء</span>
      </a>
    </li>
     
    <li class="nav-item">
      <a class="nav-link " href="http://127.0.0.1:8000/user/abandoned-carts">
        <i class="fi fi-rs-shopping-cart"></i>
        <span class="nav-link-text">السلات المتروكة</span>
      </a>
    </li>
    <li class="nav-item">
        <a class="nav-link " href="http://127.0.0.1:8000/user/application-logs/orders">
          <i class="fi fi-rs-copy"></i>
          <span class="nav-link-text">سجلات التطبيقات</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="http://127.0.0.1:8000/user/services">
          <i class="fi fi-rs-megaphone"></i>
          <span class="nav-link-text">الخدمات التسويقية</span>
        </a>
      </li>
    </ul>
      {/* <!-- Divider --> */}
      <hr class="my-3 mt-6">
      {/* <!-- Heading --> */}
      <h6 class="navbar-heading p-0 text-muted">الإعدادات</h6>
      {/* <!-- Navigation --> */}
<ul class="navbar-nav mb-md-3">
  <li class="nav-item">
    <a class="nav-link active" href="http://127.0.0.1:8000/user/subscription">
      <i class="ni ni-spaceship"></i>
      <span class="nav-link-text">الاشتراك</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/support">
      <i class="fas fa-headset"></i>
      <span class="nav-link-text">الدعم والمساعدة</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="http://127.0.0.1:8000/user/profile">
      <i class="ni ni-settings-gear-65"></i>
      <span class="nav-link-text">إعدادات الملف الشخصي</span>
    </a>
  </li>
   <li class="nav-item">
    <a class="nav-link " href="http://127.0.0.1:8000/user/auth-key">
      <i class="ni ni-key-25"></i>
      <span class="nav-link-text">مفتاح المصادقة</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link logout-button" href="#">
      <i class="ni ni-button-power"></i>
      <span class="nav-link-text">تسجيل الخروج</span>
    </a>
  </li>
</ul>
</hr>
</div>
        </div>
    </div>
    <div class="scroll-element scroll-x scroll-scrolly_visible">
        <div class="scroll-element_outer">
            <div class="scroll-element_size"></div>
            <div class="scroll-element_track"></div>
            <div class="scroll-bar" style="width: 0px; left: 0px;"></div>
        </div>
    </div>
    <div class="scroll-element scroll-y scroll-scrolly_visible">
        <div class="scroll-element_outer">
            <div class="scroll-element_size"></div>
            <div class="scroll-element_track"></div>
            <div class="scroll-bar" style="height: 565px; top: 0px;"></div>
        </div>
    </div>
    </div>
</nav>
     </div>
     </div>F


  );
};

export default Dashboard;
