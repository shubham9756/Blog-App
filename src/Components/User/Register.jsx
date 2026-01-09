import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    profile_image: null
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleFileChange = (e) => {
    setForm(prev => ({
      ...prev,
      profile_image: e.target.files[0]
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", form.name)
    formData.append("email", form.email)
    formData.append("mobile", form.mobile)
    formData.append("password", form.password)
    formData.append("profileImage", form.profile_image)

    await fetch('https://blog-appbackend.vercel.app//register', {
      method: "POST",
      body: formData,
    }).then((res) => { return res.json() }).then((data) => {
      if (data.success) {
        setForm({
          name: "",
          email: "",
          mobile: "",
          password: "",
          profile_image: null
        })
        navigate('/login')
      }
      else {
        showAlert("danger", data.message)

      }
    })
  }

  function showAlert(type, message) {
  const alertBox = document.getElementById("alertBox");

  alertBox.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
}

  return (
    <>
      <main className="container my-5">

        <div className="row justify-content-center">
          <div className="col-md-5">
            <div id="alertBox"></div>
            <div className="card shadow-sm">
              <div className="card-body p-4">

                <div className="text-center mb-4">
                  <h3 className="fw-bold">Register</h3>
                  <p className="text-secondary mb-0">Create your BlogApp account</p>
                </div>

                <form method="post" onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input type="text" name="name" className="form-control border border-2 border-dark" placeholder="Enter full name" required onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" required onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Mobile</label>
                    <input type="number" name="mobile" className="form-control" placeholder="Enter mobile" required onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Create password" required onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Profile Image</label>
                    <input type="file" name="profile_image" className="form-control" placeholder="Upload profile image"  accept='image/*' onChange={handleFileChange} />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label" for="terms" >
                      I agree to the Terms & Conditions
                    </label>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-dark">Register</button>
                  </div>

                </form>


                <p className="text-center small mb-0">
                  Already have an account?
                  <a href="/login" className="text-decoration-none">Login</a>
                </p>

              </div>
            </div>

          </div>
        </div>

      </main>


    </>
  )
}

export default Register
