import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://blog-appbackend.vercel.app/login', {
      method: 'POST',
      credentials: "include",   //
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((res) => res.json()).then((data) => {

      if (data.success == true) {
        window.location.href = '/'
      } else {
        console.log(data)
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
                  <h3 className="fw-bold">Login</h3>
                  <p className="text-secondary mb-0">Welcome back to BlogApp</p>
                </div>


                <form onSubmit={handleSubmit} method="post">


                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>


                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember"required />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a href="/forgot" className="text-decoration-none small">Forgot password?</a>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-dark">Login</button>
                  </div>

                </form>

                <p className="text-center small mb-0">
                  Don't have an account?
                  <a href="/register" className="text-decoration-none">Register</a>
                </p>

              </div>
            </div>

          </div>
        </div>

      </main>

    </>
  )
}

export default Login
