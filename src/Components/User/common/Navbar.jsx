import { Link } from "react-router-dom";


const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand fw-bold text-primary fs-3" href="/">
          <span className="d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </svg>
            BlogSphere
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-3 bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBlog"
          aria-controls="navbarBlog"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarBlog">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a
                className="nav-link position-relative px-3 py-2 rounded text-light fw-medium"
                href="/"
                aria-current="page"
              >
                <span className="nav-icon me-2">🏠</span>
                Home
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded" style={{ width: '0', height: '3px', transition: 'width 0.3s' }}></span>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link position-relative px-3 py-2 rounded text-light fw-medium"
                href="/blogs"
              >
                <span className="nav-icon me-2">📝</span>
                Blogs
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded" style={{ width: '0', height: '3px', transition: 'width 0.3s' }}></span>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link position-relative px-3 py-2 rounded text-light fw-medium"
                href="/create"
              >
                <span className="nav-icon me-2">✨</span>
                Create
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded" style={{ width: '0', height: '3px', transition: 'width 0.3s' }}></span>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link position-relative px-3 py-2 rounded text-light fw-medium"
                href="/about"
              >
                <span className="nav-icon me-2">ℹ️</span>
                About
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded" style={{ width: '0', height: '3px', transition: 'width 0.3s' }}></span>
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex align-items-center gap-3">
            {!user ? (
              <>
                {/* LOGIN */}
                <a
                  href="/login"
                  className="btn btn-outline-primary px-4 py-2 rounded-pill fw-medium d-flex align-items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                    <path fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                  Login
                </a>

                {/* REGISTER */}
                <a
                  href="/register"
                  className="btn btn-primary px-4 py-2 rounded-pill fw-medium shadow-sm d-flex align-items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-person-plus me-2" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M2 13s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H2z" />
                    <path fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  Sign Up
                </a>
              </>
            ) : (
              <>
                {/* PROFILE */}
                <a
                  href="/profile"
                  className="btn btn-success px-4 py-2 rounded-pill fw-medium"
                >
                  Profile
                </a>

                {/* myBlog */}
                <Link to={`/myBlog/${user._id}`}><button
                  className="btn btn-danger px-4 py-2 rounded-pill fw-medium"
                >
                  My Blog
                </button>
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;