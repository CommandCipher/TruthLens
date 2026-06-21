import React from "react";
import { FiShield } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

const Features = () => {
  return (
    <>
      <div className="section-title" id="features">
        <span>FEATURES</span>
        <h2>Everything You Need To Verify Digital Content</h2>
      </div>

      <section className="features-section">
       <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
        <FiShield className="feature-icon" />
  <h3>Content Deep-Dive</h3>

  <p>
    Real-time analysis metrics of the uploaded asset across
    multi-modal AI pipelines.
  </p>

  <div className="metric">
    <span>🔍 Frame Analysis</span>
    <strong>100% Scanned</strong>
  </div>

  <div className="metric">
    <span>🔊 Audio Track</span>
    <strong>Verified</strong>
  </div>

  <div className="metric">
    <span>📑 Metadata Integrity</span>
    <strong>Checked</strong>
  </div>
</div>


    <div className="feature-card center-card"   data-aos="zoom-in" data-aos-delay="200">
        <div className="card-top">
          <BsGraphUp className="feature-icon" />
            <h3>Authenticity Variance</h3>
            <button>By Second ▼</button>
        </div>
            <p>Trust score fluctuations across analyzed content.</p>
        <div className="legend">
            <span>🟢 Verified Genuine</span>
            <span>🟠 Deepfaked</span>
        </div>
        <div className="bars">
            <div className="bar h1"></div>
            <div className="bar h2"></div>
            <div className="bar h3"></div>
            <div className="bar h4"></div>
            <div className="bar h5"></div>
            <div className="bar h2"></div>
            <div className="bar h3"></div>
        </div>
    </div>

    <div className="feature-card" data-aos="fade-left" data-aos-delay="300">
        <h3>Source Credibility Network</h3>
        <HiDocumentText className="feature-icon" />
            <p>
            Cross-referenced source validation and confidence scoring.
            </p>
        <div className="trust-score">
            <h1>89%</h1>
            <span>Trust Score</span>
        </div>
        <div className="source-info">
            <p>14+ Verified Sources</p>
            <p>Confidence: High</p>
        </div>
    </div>

      </section>
    </>
  );
};

export default Features;