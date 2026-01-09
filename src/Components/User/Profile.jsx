import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const callApi = async () => {
      const res = await fetch("https://blog-appbackend.vercel.app/checkUser", {
        credentials: "include"   // 🔥 MUST
      });
      const data = await res.json();
      setUser(data.user);
      if (data.user == null) {
        window.location.href = "/login";
      }
      console.log(data);
    };
    callApi();
  }, []);

  const handleLogout = async () => {
    await fetch("https://blog-appbackend.vercel.app/logout", {
      method: "get",
      credentials: "include"
      // T
    }).then((res) => res.json()).then((data) => {
      if (data.success == true) {
        window.location.href = "/login";
      }
    });
  };

  return (
    <>

      <main className="container my-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">My Profile</h2>
          <p className="text-secondary">Manage your account information</p>
        </div>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">

                <div className="mb-3">
                  <div className="rounded-circle bg-secondary text-white d-inline-flex justify-content-center align-items-center"
                    style={{ width: "100px", height: "100px" }}>
                    {user?.profileImage ? (
                      <img src={`https://blog-appbackend.vercel.app/upload/${user?.profileImage}`} alt="Profile" className="rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    ) : (
                      <span className="fs-2">{user?.username?.charAt(0)}</span>
                    )}
                  </div>
                </div>

                <h5 className="fw-bold">{user?.username}</h5>
                <p className="text-muted mb-1">{user?.email}</p>
                <p className="small text-secondary">Member since {user?.createdAt?.split("T")[0]}</p>

                <button className="btn btn-outline-danger btn-sm mt-2" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
             <div className="card text-center shadow-sm">
              <div className="card-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui id corrupti ab maxime officiis amet dicta voluptates explicabo eaque? Voluptate nihil voluptatem maxime, reprehenderit earum quibusdam modi perspiciatis veritatis rerum.</p>
            </div>
              </div>
          </div>

          {/* <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">

                <h5 className="fw-semibold mb-3">Profile Details</h5>

                <form action="/profile/update" method="post">

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input type="text" name="name" className="form-control" value={user?.username} readOnly />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Email</label>
                      <input type="email" name="email" className="form-control" value={user?.email} readOnly />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Bio</label>
                    <textarea className="form-control" name="bio" rows="3"
                      placeholder="Write something about yourself... " readOnly></textarea>
                  </div>

                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-dark">Update Profile</button>
                    <button className="btn btn-outline-secondary">My Blogs</button>
                  </div>

                </form>

              </div>
            </div>
          </div> */}

        </div>

      </main>


    </>
  )
}

export default Profile;
