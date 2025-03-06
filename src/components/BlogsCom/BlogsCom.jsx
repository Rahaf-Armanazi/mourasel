import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogsCom.css";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BlogIndex = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalActivePosts, setTotalActivePosts] = useState(0);
  const [totalInActivePosts, setTotalInActivePosts] = useState(0);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from API or server
    // Example: setTotalPosts(data.totalPosts);
    // setPosts(data.posts);
  }, []);

  return (
    <div className="container pt-120 pb-120 " style={{ padding: "10% 2%" }}>
      <div className="row">
        <div className="col-xxl-8 col-xl-8 col-lg-8">
          <div id="blog" className="postbox__wrapper pr-20">
            {posts.length === 0 ? (
              <div className="alert alert-warning" role="alert">
                Opps there is no blog post available
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th className="col-3">Title</th>
                      <th className="col-3">Url</th>
                      <th className="col-1">Status</th>
                      <th className="col-2">Created At</th>
                      <th className="col-1 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, index) => (
                      <tr key={index}>
                        <td className="text-left">
                          <img
                            src={post.preview.value}
                            className="avatar rounded-square mr-3"
                            alt="preview"
                          />
                          {post.title}
                        </td>
                        <td className="text-left">
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            /blog/{post.slug}
                          </a>
                        </td>
                        <td className="text-left">
                          <span
                            className={`badge badge-${
                              post.status === 1 ? "success" : "danger"
                            }`}
                          >
                            {post.status === 1 ? "Active" : "Draft"}
                          </span>
                        </td>
                        <td>
                          {new Date(post.created_at).toLocaleDateString()}
                        </td>
                        <td className="text-right">
                          <div className="btn-group mb-2 float-right">
                            <button
                              className="btn btn-neutral btn-sm dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Action
                            </button>
                            <div className="dropdown-menu">
                              <Link
                                className="dropdown-item has-icon"
                                to={`/admin/blog/edit/${post.id}`}
                              >
                                <i className="fi fi-rs-edit"></i>Edit Blog
                              </Link>
                              <a
                                className="dropdown-item has-icon delete-confirm"
                                href="#"
                                data-action={`/admin/blog/destroy/${post.id}`}
                              >
                                <i className="fas fa-trash"></i>Remove Blog
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4">
          <div className="sidebar__wrapper">
            <div className="sidebar__widget mb-40">
              <h3 className="sidebar__widget-title">Search Here</h3>
              <div className="sidebar__widget-content">
                <div className="sidebar__search">
                  <form>
                    <div className="sidebar__search-input-2">
                      <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search your keyword..."
                      />
                      <button type="submit">
                      <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
