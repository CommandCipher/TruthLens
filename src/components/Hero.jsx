import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleAnalyse = () => {
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  if (isLoggedIn === "true") {
    navigate("/analysis");
  } else {
    navigate("/login");
  }
};

  return (
    <section className="hero" data-aos="fade-up">
      <h1>See Beyond The Headlines</h1>

      <p>
  TruthLens brings unparalleled clarity to a manipulated digital
  landscape. By combining multi-model AI analysis with source
  credibility assessments, we decode complex digital content in
  seconds. Get deeper insights with transparent trust scores and
  contextual evidence designed to combat deception at scale.
</p>

      <button onClick={handleAnalyse}>Analyse Content</button>

      <div className="hero-stats">
        <div>
          <h3>98.2%</h3>
          <span>Detection Accuracy</span>
        </div>

        <div>
          <h3>14+</h3>
          <span>Verified Sources</span>
        </div>

        <div>
          <h3>24/7</h3>
          <span>AI Monitoring</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;