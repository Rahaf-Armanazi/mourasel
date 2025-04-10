const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcrumb__area breadcrumb-height p-relative grey-bg">
      <div className="breadcrumb__scroll-bottom smooth">
        <a href="#blog">
          <i className="far fa-arrow-down"></i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center">
              <h3 className="breadcrumb__title">{title}</h3>
              <div className="breadcrumb__list">
                <span><a href="/">Home</a></span>
                <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;