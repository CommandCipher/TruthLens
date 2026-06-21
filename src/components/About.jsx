import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-left" data-aos="fade-right">
        <span className="about-tag">WHY TRUTHLENS?</span>

        <h2>Fighting Misinformation in the AI Era.</h2>

        <p>
          Deepfakes, manipulated media...
        </p>
      </div>

      <div className="about-right" data-aos="fade-left">
        <div className="stat-card">
          <h3>550k+</h3>
          <span>Articles Analysed</span>
        </div>

        <div className="stat-card">
          <h3>50k+</h3>
          <span>Media Assets Verified</span>
        </div>

        <div className="stat-card">
          <h3>5+</h3>
          <span>Detection Engines</span>
        </div>

        <div className="stat-card">
          <h3>89%</h3>
          <span>Average Trust Accuracy</span>
        </div>
      </div>
    </section>
  );
};

export default About;