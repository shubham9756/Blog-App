import React from 'react'
import './css/About.css'
const About = () => {
  const teamMembers = [
    { name: "Alex Johnson", role: "Founder & CEO", bio: "Passionate about creating platforms that empower writers.", avatar: "👨‍💻" },
    { name: "Sarah Chen", role: "Lead Developer", bio: "Loves building scalable and user-friendly applications.", avatar: "👩‍💻" },
    { name: "Michael Reed", role: "Community Manager", bio: "Connects writers and readers to build meaningful relationships.", avatar: "👨‍🎨" },
    { name: "Emma Wilson", role: "Content Strategist", bio: "Helps writers create impactful and engaging content.", avatar: "👩‍🏫" }
  ];

  const features = [
    { title: "Simple Writing Interface", description: "Focus on writing with our clean, distraction-free editor.", icon: "✍️" },
    { title: "Global Community", description: "Connect with writers and readers from around the world.", icon: "🌍" },
    { title: "Real-time Stats", description: "Track your blog's performance with detailed analytics.", icon: "📊" },
    { title: "Secure Platform", description: "Your data and content are protected with enterprise-grade security.", icon: "🔒" }
  ];

  return (
    <main className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-6">
        <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0d6efd" className="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </div>
        <h1 className="display-4 fw-bold mb-3">About <span className="text-primary">BlogSphere</span></h1>
        <p className="lead text-secondary mx-auto" style={{maxWidth: "700px"}}>
          A platform where ideas transform into stories, knowledge becomes accessible, 
          and voices find their audience. We're building the future of content creation.
        </p>
      </section>

      {/* Our Story */}
      <section className="row align-items-center mb-6">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
            <h2 className="fw-bold mb-4 d-flex align-items-center gap-3">
              <span className="text-primary">📖</span>
              Our Story
            </h2>
            <p className="text-secondary mb-4">
              BlogSphere was born from a simple idea: everyone has a story worth sharing. 
              In 2023, we set out to create a platform that removes the complexity from blogging 
              and focuses on what truly matters – the content.
            </p>
            <p className="text-secondary mb-4">
              What started as a small project has grown into a thriving community of 
              over 10,000 writers who collectively publish more than 1,000 blogs every month. 
              Our mission remains the same: to empower creators to share their knowledge, 
              experiences, and perspectives with the world.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <div className="text-center p-3">
                <h3 className="fw-bold text-primary mb-1">10K+</h3>
                <p className="text-secondary small mb-0">Active Writers</p>
              </div>
              <div className="text-center p-3">
                <h3 className="fw-bold text-primary mb-1">1K+</h3>
                <p className="text-secondary small mb-0">Daily Blogs</p>
              </div>
              <div className="text-center p-3">
                <h3 className="fw-bold text-primary mb-1">50+</h3>
                <p className="text-secondary small mb-0">Countries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
            <h2 className="fw-bold mb-4 d-flex align-items-center gap-3">
              <span className="text-primary">🎯</span>
              Why Choose BlogSphere?
            </h2>
            <div className="row g-3">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-start gap-3 p-3">
                    <span className="fs-3">{feature.icon}</span>
                    <div>
                      <h5 className="fw-semibold mb-2">{feature.title}</h5>
                      <p className="text-secondary small mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-light rounded-4 p-4 p-lg-5 mb-6">
        <div className="text-center mb-5">
          <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0d6efd" className="bi bi-bullseye" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </div>
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <p className="lead text-secondary mx-auto" style={{maxWidth: "800px"}}>
            To democratize content creation by providing powerful yet simple tools that 
            enable anyone to share their voice, regardless of technical expertise. 
            We believe that every perspective matters and every story deserves to be heard.
          </p>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="fs-4">🤝</span>
              </div>
              <h5 className="fw-semibold mb-3">Community First</h5>
              <p className="text-secondary">We prioritize building a supportive and inclusive community for all writers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="fs-4">💡</span>
              </div>
              <h5 className="fw-semibold mb-3">Innovation</h5>
              <p className="text-secondary">Continuously improving our platform with cutting-edge features and tools.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="fs-4">🔓</span>
              </div>
              <h5 className="fw-semibold mb-3">Accessibility</h5>
              <p className="text-secondary">Making content creation accessible to everyone, everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="mb-6">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Meet Our Team</h2>
          <p className="text-secondary mx-auto" style={{maxWidth: "600px"}}>
            The passionate people behind BlogSphere who work tirelessly to create 
            the best experience for our community.
          </p>
        </div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 shadow-sm border text-center h-100">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: "80px", height: "80px"}}>
                  <span className="fs-2">{member.avatar}</span>
                </div>
                <h5 className="fw-semibold mb-1">{member.name}</h5>
                <p className="text-primary small fw-medium mb-3">{member.role}</p>
                <p className="text-secondary small">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary bg-opacity-5 rounded-4 p-4 mt-3 p-lg-5 text-center border border-primary border-opacity-10">
        <div className="mx-auto" style={{maxWidth: "600px"}}>
          <h2 className="fw-bold mb-3">Ready to Share Your Story?</h2>
          <p className="text-dark mb-4">
            Join thousands of writers who are already building their audience on BlogSphere. 
            It's free, easy, and your voice matters here.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/create" className="btn btn-info px-5 py-3 rounded-pill fw-medium">
              Start Writing Now
            </a>
            <a href="/blogs" className="btn btn-danger px-5 py-3 rounded-pill fw-medium">
              Explore Community
            </a>
          </div>
          <p className="text-muted small mt-4">
            No technical skills required • Free forever plan • 24/7 community support
          </p>
        </div>
      </section>
    </main>
  )
}

export default About