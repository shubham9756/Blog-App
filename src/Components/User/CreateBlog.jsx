import { useEffect, useRef, useState } from "react";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./css/create.css";

const CreateBlog = () => {

  const [form, setForm] = useState({
    title: "",
    thumbnail: null,
    category: "",
    description: "",
    content: ""
  });

  const quillRef = useRef(null);
  const quillInstance = useRef(null);

  // Init Quill
  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow",
      });

      quillInstance.current.on("text-change", () => {
        setForm(prev => ({
          ...prev,
          content: quillInstance.current.root.innerHTML
        }));
      });
    }
  }, []);

  // Text / Select handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // File handler
  const handleFileChange = (e) => {
    setForm(prev => ({
      ...prev,
      thumbnail: e.target.files[0]
    }));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("thumbnail", form.thumbnail);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("content", form.content);
    // api
    fetch("https://blog-app-backend-odgo.onrender.com/blogs", {
    credentials: "include",
      method: "POST",
      body: formData,
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if(data.success === true){
        setForm({
          title: "",
          thumbnail: null,
          category: "",
          description: "",
          content: ""
        });
        quillInstance.current.root.innerHTML = "";
        window.location.href ="/blogs"; 
      }
      console.log(data);
    });
  };

  return (
    <main className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Create New Blog</h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                {/* Title */}
                <div className="mb-4">
                  <label className="form-label">Blog Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Thumbnail */}
                <div className="mb-4">
                  <label className="form-label">Thumbnail</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    className="form-select"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="technology">Technology</option>
                    <option value="health">Health</option>
                    <option value="travel">Travel</option>
                    <option value="education">Education</option>
                    <option value="lifestyle">Life Style</option>
                    <option value="News">News</option>
                    <option value="Programming">Programming</option>
                    <option value="Nature">Nature</option>
                    <option value="Beauty">Beauty</option>
                  </select>
                </div>

                {/* Short Description */}
                <div className="mb-4">
                  <label className="form-label">Short Description</label>
                  <textarea
                    name="description"
                    rows="2"
                    className="form-control"
                    value={form.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Blog Content (Quill) */}
                <div className="mb-5">
                  <label className="form-label">Blog Content</label>
                  <div
                    ref={quillRef}
                    style={{ height: "250px" }}
                  ></div>
                </div>

                <button className="btn btn-primary">
                  Publish Blog
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateBlog;
