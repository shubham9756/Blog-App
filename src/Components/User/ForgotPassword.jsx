import React, { useState } from "react";
import "./css/forgotpassword.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /* 🔹 Send OTP */
  const handlePassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("http://localhost:1000/forgotPassword", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      setMessage(data.message);
      setShowOtpModal(true);
    } catch (err) {
      setError("Server error, try again");
    }
  };

  /* 🔹 Verify OTP */
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("http://localhost:1000/verify-otp", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      setShowOtpModal(false);
      navigate("/newPassword");
    } catch (err) {
      setError("OTP verification failed");
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-card">
          <h3 className="auth-title">Forgot Password 🔐</h3>
          <p className="auth-subtitle">
            Enter your registered email to receive OTP
          </p>

          {error && <div className="alert alert-danger">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}

          <form onSubmit={handlePassword}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button className="auth-btn" type="submit">
              Send OTP
            </button>
          </form>

          <div className="auth-link">
            <a href="/login">← Back to Login</a>
          </div>
        </div>
      </div>

      {/* 🔹 OTP MODAL */}
      {showOtpModal && (
        <>
          <div className="otp-modal">
            <div className="otp-card">
              <h4>Verify OTP</h4>
              <p>Enter the 6-digit OTP sent to your email</p>

              <form onSubmit={handleVerifyOtp}>
                <input
                  type="text"
                  className="otp-input"
                  placeholder="••••••"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />

                <button className="auth-btn" type="submit">
                  Verify OTP
                </button>
              </form>
            </div>
          </div>

          <div className="otp-backdrop"></div>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
