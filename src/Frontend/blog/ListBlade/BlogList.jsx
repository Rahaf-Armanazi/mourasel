import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div id="blog" className="postbox__wrapper pr-20">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <article key={blog.id} className="postbox__item format-image mb-50 transition-3">
            <div className="postbox__thumb w-img">
              <Link to={`/blog/${blog.slug}`}>
                <img src={blog.preview.value} alt={blog.title} />
              </Link>
            </div>
            <div className="postbox__content">
              <div className="postbox__meta">
                <span><i className="fal fa-user-circle"></i> Admin</span>
                <span><i className="fal fa-clock"></i> {new Date(blog.created_at).toLocaleDateString()}</span>
              </div>
              <h3 className="postbox__title">
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <div className="postbox__text">
                <p>{blog.shortDescription.value.substring(0, 200)}...</p>
              </div>
              <div className="post__button">
                <Link className="tp-btn-blue-square" to={`/blog/${blog.slug}`}>
                  <span>READ MORE</span>
                </Link>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div className="alert alert-warning" role="alert">
          Opps, there is no blog post available.
        </div>
      )}
    </div>
  );
};

export default BlogList;