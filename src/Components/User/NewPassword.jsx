import React, { useState } from "react";
import "./css/password.css";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log(JSON.stringify({ password }))

    try {
      const res = await fetch("https://blog-appbackend.vercel.app//set-newpassword", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      setSuccess("Password updated successfully. Please login.");
      navigate("/login")
      
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="password-wrapper">
      <div className="password-card">
        <h3 className="title">Reset Password 🔒</h3>
        <p className="subtitle">
          Create a strong new password for your account
        </p>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="form-group">
            <label>New Password</label>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Show password */}
          <div className="show-password">
            <input
              type="checkbox"
              id="showPass"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPass">Show Password</label>
          </div>

          <button className="submit-btn" type="submit">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
