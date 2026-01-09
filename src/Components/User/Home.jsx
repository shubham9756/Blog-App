import React from 'react'
import './css/Home.css'

const Home = () => {
  

 

  const stats = [
    { value: "10K+", label: "Active Writers" },
    { value: "50K+", label: "Blogs Published" },
    { value: "1M+", label: "Monthly Readers" },
    { value: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="bg-light mt-1 p-2">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient-light p-5">
        <div className="container py-6 py-lg-8">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <span className="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2 rounded-pill mb-3">
                  ✨ Where Ideas Come to Life
                </span>
                <h1 className="display-4 fw-bold mb-4 text-dark">
                  Welcome to <span className="text-primary">BlogSphere</span>
                </h1>
                <p className="lead text-secondary mb-4">
                  Read, write, and share amazing stories with a global community of passionate writers and readers. 
                  Your voice matters here.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="/blogs" 
                  className="btn btn-primary px-4 py-3 rounded-pill fw-medium d-flex align-items-center gap-2 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                  </svg>
                  Explore Blogs
                </a>
                <a 
                  href="/create" 
                  className="btn btn-outline-primary px-4 py-3 rounded-pill fw-medium d-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                  Create Blog
                </a>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="position-relative">
                <div className="bg-white rounded-4 p-4 p-lg-5 shadow-lg border">
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-4 h-100 border">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="fs-2">📈</div>
                          <div>
                            <h6 className="fw-semibold mb-0">Trending Now</h6>
                            <small className="text-secondary">AI Writing Tools</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light rounded-3 p-4 h-100 border">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="fs-2">🏆</div>
                          <div>
                            <h6 className="fw-semibold mb-0">Top Writer</h6>
                            <small className="text-secondary">Emma Wilson</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="bg-light rounded-3 p-4 border">
                        <h6 className="fw-semibold mb-3">Latest Activity</h6>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-secondary">New blogs today</span>
                          <span className="fw-semibold text-primary">24</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-secondary">Active discussions</span>
                          <span className="fw-semibold text-success">156</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="text-center p-3">
                  <h2 className="display-6 fw-bold text-primary mb-2">{stat.value}</h2>
                  <p className="text-secondary mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3 text-dark">Why Choose BlogSphere?</h2>
            <p className="text-secondary lead">Everything you need to start your writing journey</p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-white rounded-4 p-4 h-100 shadow-sm border hover-lift transition-200">
                  <div className={`fs-1 mb-3 ${feature.color}`}>{feature.icon}</div>
                  <h4 className="h5 fw-semibold mb-3 text-dark">{feature.title}</h4>
                  <p className="text-secondary mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    

      {/* CTA Section */}
      <section className="py-6 bg-gradient-light">
        <div className="container">
          <div className="bg-white rounded-4 p-5 p-lg-8 text-center shadow border">
            <h2 className="display-5 fw-bold mb-4 text-dark">Ready to Share Your Story?</h2>
            <p className="lead mb-5 text-secondary" style={{maxWidth: "600px", margin: "0 auto"}}>
              Join thousands of writers who are already sharing their ideas and building their audience on BlogSphere.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="/register" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow-sm">
                Start Writing Free
              </a>
              <a href="/blogs" className="btn btn-outline-primary px-5 py-3 rounded-pill fw-bold">
                Explore Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home