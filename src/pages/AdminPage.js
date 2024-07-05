import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Adjust path if necessary
import Sidebar from '../components/Sidebar'; // Adjust path if necessary

const AdminPage = () => {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);

      // Fetch profiles
      axios.get('https://retop-backend.vercel.app/profiles', {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
      .then(response => {
        console.log('Profiles:', response.data);
        setProfiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
      });

      // Fetch blogs
      axios.get('https://retop-backend.vercel.app/api/blogs', {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
      .then(response => {
        console.log('Blogs:', response.data);
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });

    } else {
      setShowModal(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  const handleDeleteProfile = (profileId) => {
    console.log('Deleting profile with ID:', profileId);
    axios.delete(`https://retop-backend.vercel.app/profiles/${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      setProfiles(profiles.filter(profile => profile._id !== profileId));
    })
    .catch(error => {
      console.error('Error deleting profile:', error);
    });
  };

  const handleDeleteBlog = (blogId) => {
    console.log('Deleting blog with ID:', blogId);
    axios.delete(`https://retop-backend.vercel.app/api/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      setBlogs(blogs.filter(blog => blog._id !== blogId));
    })
    .catch(error => {
      console.error('Error deleting blog:', error);
    });
  };

  const sidebarLinks = [
    { label: 'Add Blog', path: '/addblog' },
    { label: 'Add Location', path: '/addlocation' },
  ];

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Not Authorized</h2>
            <p className="mb-4">You are not authorized. Please log in as admin!</p>
          </div>
        </div>
      )}
      {token && (
        <div className="flex">
          <Sidebar links={sidebarLinks} handleLogout={handleLogout} />
          <div className="flex-1 max-w-6xl mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Profiles:</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {profiles.map(profile => (
                    <tr key={profile._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{profile.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{profile.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteProfile(profile._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Blogs:</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map(blog => (
                    <tr key={blog._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{blog.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{blog.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteBlog(blog._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
