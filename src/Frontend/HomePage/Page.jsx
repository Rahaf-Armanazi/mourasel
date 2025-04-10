import { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    // Fetch page data from the backend
    axios.get('/api/page') // Adjust the URL based on your backend's API endpoint
      .then(response => {
        setPageData(response.data.page);
      })
      .catch(error => {
        console.error('Error fetching page data:', error);
      });
  }, []);

  return (
    <main>
      {/* Breadcrumb Area */}
      <div className="breadcrumb__area breadcrumb-height p-relative grey-bg"
        style={{ backgroundImage: `url(${pageData.breadcrumbImage || '/assets/frontend/img/breadcrumb/breadcrumb.jpg'})` }}>
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#faq">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">{pageData.title}</h3>
                <div className="breadcrumb__list">
                  <span><a href="/">{'Home'}</a></span>
                  <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                  <span>{pageData.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Postbox Area */}
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
              <div id="Blog-Details" className="postbox__wrapper postbox__p-right">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    <h3 className="postbox__title text-center">
                      {pageData.title}
                    </h3>
                    <div className="postbox__thumb2 mb-60">
                      <div className="postbox__text text-justify">
                        <p className="text-justify" dangerouslySetInnerHTML={{ __html: pageData.description?.value || '' }}></p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
