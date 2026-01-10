import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./css/myblog.css";

const MyBlog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await fetch(`https://blog-app-backend-odgo.onrender.com/myBlog/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBlogs();
  }, [id]);

 const handleDeleteBlog = async (blogId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this blog?"
  );
  if (!confirmDelete) return;

  try {
    const res = await fetch(`https://blog-app-backend-odgo.onrender.com/blog/delete/${blogId}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();
    console.log("Delete response:", data);

    if (data.success) {
      alert("Blog deleted successfully");

      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== blogId)
      );
    } else {
      alert(data.message || "Failed to delete blog");
    }
  } catch (err) {
    console.log("Delete error:", err);
  }
};


  if (loading) {
    return <div className="loader">Loading your blogs...</div>;
  }

  return (
    <div className="myblog-container">
      <div className="header">
        <h2>My Blogs</h2>
        <Link to="/create" className="btn-create">
          + New Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="empty-state">
          <h3>No blogs yet ✍️</h3>
          <p>Start sharing your thoughts with the world.</p>
          <Link to="/create" className="btn-create">
            Create Blog
          </Link>
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <img
                src={`https://blog-app-backend-odgo.onrender.com/upload/${blog.thumbnail}`}
                alt={blog.title}
                className="blog-image"
              />

              <div className="blog-body">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.description}</p>

                <div className="blog-meta">
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <Link to={`/view/${blog._id}`} className="view-link h6">
                    View →
                  </Link>
                </div>

                <div className="blog-actions">
                  <Link
                    to={`/editBlog/${blog._id}`}
                    className="btn-action edit text-center text-decoration-none"
                  >
                    Edit
                  </Link>
                 
                    {/* to={`/delete/${blog._id}`}> */}
                  <button className="btn-action delete" onClick={()=>handleDeleteBlog(blog._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlog;
