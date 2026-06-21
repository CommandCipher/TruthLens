import "./Analysis.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Analysis() {
  const navigate = useNavigate();
  
  // 🔥 LOADER + ANALYZE BUTTON
  const handleAnalyze = () => {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";

  setTimeout(() => {
    navigate("/result");
  }, 2500);
};

  //  LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/");
  };

  return (
    <div className="analysis-page">

      {/* NAVBAR */}
      <nav>
        <h2>TRUTHLENS</h2>

        <button id="logout-btn" onClick={handleLogout}>
          Sign-Out
        </button>
      </nav>

      {/* HERO */}
      <section className="analysis-hero">
        <h1>TruthLens Command Center</h1>
        <p>
          Analyze articles, images, videos and URLs for bias,
          misinformation, deepfakes and credibility risks.
        </p>
      </section>

      {/* GRID */}
      <section className="analysis-grid">

        {/* LEFT */}
        <div className="scanner-card">

          <h2>Scan Target</h2>

          <div className="scanner-box">
            <div className="scanner-circle">
              <div className="scanner-line"></div>
            </div>

            <p>Drag & Drop Content</p>
            <span>Article • URL • Image • Video</span>
          </div>

          <textarea placeholder="Paste article content here..." />

          <div className="upload-buttons">
            <button>Upload Image</button>
            <button>Upload Video</button>
            <button>Paste URL</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="modules-card">

          <h2>AI Modules</h2>

          <div className="module active">✓ Bias Detection</div>
          <div className="module active">✓ Emotion Analysis</div>
          <div className="module active">✓ Fact Verification</div>
          <div className="module active">✓ Source Credibility</div>
          <div className="module active">✓ Deepfake Detection</div>
          <div className="module active">✓ Metadata Analysis</div>

          <div className="system-status">
            <span className="dot"></span>
            SYSTEM READY
          </div>

        </div>

      </section>

      {/* BUTTON */}
      <section className="action-section">
        <button id="analyze-btn" onClick={handleAnalyze}>
          Initiate Analysis
        </button>
      </section>

      {/* LOADER */}
      <div className="loader-popup" id="loader">
        <div className="loader-box">

          <h2>Initializing Engines...</h2>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p>Bias Engine Loaded ✓</p>
          <p>Fact Verification Loaded ✓</p>
          <p>Generating Trust Score...</p>

        </div>
      </div>

    </div>
  );
}

export default Analysis;