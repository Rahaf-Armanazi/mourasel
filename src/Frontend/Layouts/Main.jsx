import React, { useState } from 'react';
import './App.css'; // استيراد ملف CSS

function Main() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    window.location.href = `/local/${event.target.value}`;
  };

  return (
    <div className="App">
      <header>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset(get_option('primary_data',true)->favicon ?? '') }}" />
        <link rel="stylesheet" href="https://cdn.salla.network/fonts/pingarlt.css?v=0.2" />
        <link rel="stylesheet" href="{{ asset('assets/frontend/css/bootstrap.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/frontend/css/animate.css') }}" />
        {/* إضافة باقي روابط CSS هنا */}
      </header>
      <body>
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="far fa-angle-double-up"></i>
        </button>
        <div className="body-overlay"></div>
        <main>
          {/* محتوى الصفحة */}
        </main>
        <footer>
          {/* تضمين Footer هنا */}
        </footer>
        <script src="{{ asset('assets/frontend/js/jquery.js') }}"></script>
        <script src="{{ asset('assets/frontend/js/waypoints.js') }}"></script>
        {/* إضافة باقي روابط JavaScript هنا */}
        <script type="text/javascript">
          document.querySelector('.language-switch').addEventListener('change', function() {
            window.location.href = `/local/${this.value}`;
          });
        </script>
      </body>
    </div>
  );
}

export default Main;