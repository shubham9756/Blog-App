import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
  });

  const [oldThumbnail, setOldThumbnail] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch blog by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://blog-appbackend.vercel.app//blog/${id}`, {
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          setForm({
            title: data.data.title,
            description: data.data.description,
            content: data.data.content,
          });
          setOldThumbnail(data.data.thumbnail);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      const res = await fetch(`https://blog-appbackend.vercel.app//blog/update/${id}`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("Blog updated successfully");
        navigate("/myblog");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white rounded-top-4">
              <h4 className="mb-0">✏️ Edit Blog</h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>

                {/* Title */}
                <div className="mb-3">
                  <label className="form-label">Blog Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">Short Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Content */}
                <div className="mb-3">
                  <label className="form-label">Blog Content</label>
                  <textarea
                    className="form-control"
                    name="content"
                    rows="6"
                    value={form.content}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Old Image */}
                {oldThumbnail && (
                  <div className="mb-3">
                    <label className="form-label">Current Thumbnail</label>
                    <img
                      src={`https://blog-appbackend.vercel.app//upload/${oldThumbnail}`}
                      className="img-fluid rounded mb-2"
                      alt="Old Thumbnail"
                    />
                  </div>
                )}

                {/* Upload */}
                <div className="mb-4">
                  <label className="form-label">Change Thumbnail</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Update Blog
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100"
                    onClick={() => navigate(`/myBlog/6947900d082bf023d3eddd30`)}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditBlog;
