import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import Footer from './Components/User/common/Footer'
import Home from './Components/User/Home'
import Navbar from './Components/User/common/Navbar'
import CreateBlog from './Components/User/CreateBlog'
import Blog from './Components/User/Blog'
import About from './Components/User/About'
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import Profile from './Components/User/Profile'
import View from './Components/User/View'
import MyBlog from './Components/User/MyBlog'
import EditBlog from './Components/User/EditBlog'
import ForgotPassword from './Components/User/ForgotPassword'
import NewPassword from './Components/User/NewPassword'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch("https://blog-app-backend-odgo.onrender.com/checkUser", {
          credentials: "include",
        });

        const data = await res.json();

        if (data.loggedIn) {
          setUser(data.user);
        } else {
          setUser(null);
        }

      } catch (err) {
        console.log("Navbar API error:", err.message);
      }
    };

    callApi();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view/:id" element={<View user={user}/>} />
          <Route path="/myBlog/:id" element={<MyBlog/>}/>
          <Route path='/editBlog/:id' element={<EditBlog/>}/> 
          <Route path='/forgot' element={<ForgotPassword/>}/> 
          <Route path='/newPassword' element={<NewPassword/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
