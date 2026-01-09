import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/blog.css";

const Blog = () => {

  // 🔹 States
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState([])

  const navigate = useNavigate()

  // 🔹 Pagination
  const blogsPerPage = 6;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // 🔹 Memoized current blogs
  const currentBlogs = useMemo(() => {
    return filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  }, [filteredBlogs, currentPage]);

  // 🔹 Fetch blogs
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1000/blogs`, {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success == false) {
          navigate("/login")
        }
        const blogList = data?.blogs || [];
        setBlogs(blogList);
        setFilteredBlogs(blogList);
      })
      .catch(err => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Categories
  const categories = [
    "All",
    "Technology",
    "Programming",
    "Beauty",
    "Nature",
    "News",
    "health",
    "Education",
    "Lifestyle"
  ];

  // 🔹 Category filter handler
  const handleCategories = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);

    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      const result = blogs.filter(blog =>
        blog.category?.toLowerCase().trim() ===
        category.toLowerCase().trim()
      );
      setFilteredBlogs(result);
    }
  };
  const handleLikes = async (id) => {
    try {
      const res = await fetch(`http://localhost:1000/likes/${id}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();

      if (data.success) {
        // 🔥 blogs update
        setBlogs(prev =>
          prev.map(blog =>
            blog._id === id
              ? { ...blog, likes: data.likes }
              : blog
          )
        );

        // 🔥 filteredBlogs update (VERY IMPORTANT)
        setFilteredBlogs(prev =>
          prev.map(blog =>
            blog._id === id
              ? { ...blog, likes: data.likes, likedByUser: data.likedByUser }
              : blog
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <main className="container py-5">

      {/* 🔹 Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3">Explore Blogs</h1>
        <p className="text-secondary lead">
          Discover stories, ideas, and knowledge
        </p>
      </div>

      {/* 🔹 Category Filter */}
      <div className="mb-5">
        <h6 className="fw-semibold mb-3">Browse by Category</h6>
        <div className="d-flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategories(category)}
              className={`btn btn-sm rounded-pill px-3 ${activeCategory === category
                ? "btn-primary"
                : "btn-outline-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Loading */}
      {loading && (
        <div className="text-center py-5 text-muted">
          Loading blogs...
        </div>
      )}

      {/* 🔹 Blog Grid */}
      {!loading && (
        <>
          {currentBlogs.length === 0 ? (
            <div className="text-center text-muted py-5">
              No blogs found
            </div>
          ) : (
            <div className="row g-4">
              {currentBlogs.map((data) => (
                <div key={data._id} className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm">

                    {/* Thumbnail */}
                    <div style={{ height: "200px" }}>
                      {data.thumbnail ? (
                        <img
                          src={`http://localhost:1000/upload/${data.thumbnail}`}
                          alt={data.title}
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <div className="h-100 bg-light d-flex align-items-center justify-content-center">
                          <span className="text-muted">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-primary mb-2 w-fit">
                        {data.category}
                      </span>

                      <h5 className="card-title">
                        <Link
                          to={`/blogs/${data._id}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.title}
                        </Link>
                      </h5>

                      <p className="text-muted flex-grow-1">
                        {data.description}
                      </p>

                      <div className="d-flex justify-content-between border-top pt-2 small text-muted">
                        <span>
                          {data.createdAt
                            ? new Date(data.createdAt).toLocaleDateString(
                              "en-IN",
                              { day: "2-digit", month: "short", year: "numeric" }
                            )
                            : "No date"}
                        </span>
                        <span
                          onClick={() => handleLikes(data._id)}
                          style={{
                            cursor: "pointer",
                            fontSize: "18px",
                            color: data.likedByUser ? "red" : "#555",
                            transition: "0.2s"
                          }}
                        >
                          {data.likedByUser ? "❤️" : "🤍"} {data.likes?.length || 0}
                        </span>



                        {/* <span>💬🤍 {data.comments?.length || 0}</span> */}
                      </div>
                      <Link to={`/view/${data._id}`} className="btn btn-outline-primary m-2">Read More</Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* 🔹 Pagination */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-5">
          <ul className="pagination">

            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage(prev => Math.max(prev - 1, 1))
                }
              >
                &laquo;
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
              >
                &raquo;
              </button>
            </li>

          </ul>
        </nav>
      )}

    </main>
  );
};

export default Blog;
