import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Breadcrumb from './ListBlade/Breadcrumb';
import BlogList from './ListBlade/BlogList';
import SideBar from './ListBlade/SideBar';

const ListBlade = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
    fetchRecentBlogs();
    fetchCategories();
    fetchTags();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blogs', { params: { search: searchQuery } });
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await axios.get('/api/recent-blogs');
      setRecentBlogs(response.data.recentBlogs);
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get('/api/tags');
      setTags(response.data.tags);
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBlogs();
  };

  return (
    <main>
      <Header />
      <Breadcrumb title="Recent Blogs" />
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <BlogList blogs={blogs} />
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <SideBar
                recentBlogs={recentBlogs}
                categories={categories}
                tags={tags}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListBlade;