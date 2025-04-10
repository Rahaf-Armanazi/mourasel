import { Link } from 'react-router-dom';

const Sidebar = ({ recentBlogs=[], categories=[], tags=[], searchQuery=[], setSearchQuery=[], handleSearch=[] }) => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Search Here</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={handleSearch}>
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your keyword..."
                />
                <button type="submit"><i className="far fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {recentBlogs.length > 0 && (
        <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title">Recent Posts</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="rc__post mb-20 d-flex">
                  <div className="rc__post-thumb mr-20">
                    <Link to={`/blog/${blog.slug}`}>
                      <img src={blog.preview.value} alt={blog.title} />
                    </Link>
                  </div>
                  <div className="rc__post-content">
                    <div className="rc__meta">
                      <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="rc__post-title">
                      <Link to={`/blog/${blog.slug}`}>{blog.title.substring(0, 35)}...</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title">Categories</h3>
          <div className="sidebar__widget-content">
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.slug}/${category.id}`}>
                    {category.title}
                    <span><i className="fal fa-angle-right"></i></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {tags.length > 0 && (
        <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title">Tags</h3>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
              {tags.map((tag) => (
                <Link key={tag.id} to={`/tag/${tag.slug}/${tag.id}`}>
                  {tag.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;