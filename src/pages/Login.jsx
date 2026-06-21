import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userLoggedIn", "true");

    navigate("/analysis");
  };

  return (
  <div className="login-page">
    <div className="auth-container">

      <div className="form-side">

        <div className="logo-area">
          <div className="logo-box">TL</div>
          <span className="logo-text">TruthLens</span>
        </div>

        {!isSignup ? (
          <div className="form-view">
            <h2>Welcome Back</h2>
            <p className="subtitle">
              Please enter your account details.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="analyst@truthlens.ai"
                  required
                />
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label>Password</label>
                  <a href="#" className="forgot-link">
                    Forgot Password?
                  </a>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="checkbox-row">
                <input type="checkbox" />
                <label>Keep me logged in</label>
              </div>

              <button type="submit" className="primary-btn">
                Sign In
              </button>
            </form>
          </div>
        ) : (
          <div className="form-view">
            <h2>Create Account</h2>
            <p className="subtitle">
              Register your workspace.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="name-row">
                <div className="input-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="input-group">
                <label>Work Email</label>
                <input
                  type="email"
                  placeholder="johndoe@agency.com"
                  required
                />
              </div>

              <div className="input-group">
                <label>Choose Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="primary-btn">
                Create Account
              </button>
            </form>
          </div>
        )}

        <div className="form-footer">
          {!isSignup ? (
            <p>
              New to TruthLens?
              <button
                className="switch-btn"
                onClick={() => setIsSignup(true)}
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                className="switch-btn"
                onClick={() => setIsSignup(false)}
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>

      <div className="info-side">
        <div className="info-content">
          <h3>Securing Digital Integrity.</h3>

          <span className="quote-mark">“</span>

          <p className="quote-text">
            In a world where digital media can be perfectly fabricated,
            validation is no longer optional—it's defensive infrastructure.
          </p>
        </div>

        <div className="badge-card">
          <div>
            <h6>Enterprise-Grade Deepfake Defense</h6>

            <p>
              Monitoring active stream manipulations, generative GAN
              signatures and voice cloning at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;