import "./Result.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  const finalScore = 82;
  const [score, setScore] = useState(0);

  // SCORE ANIMATION
  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setScore(current);

      if (current >= finalScore) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const getVerdict = () => {
    if (finalScore >= 80) return "HIGH TRUST";
    if (finalScore >= 50) return "MODERATE TRUST";
    return "LOW TRUST";
  };

  return (
    <div className="result-page">

      {/* NAVBAR */}
      <nav>
        <h2>TRUTH LENS</h2>

        <button onClick={() => navigate("/analysis")} id="new-analysis-btn">
          Analyze Another Article
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="score-circle">
  <svg className="progress-ring" width="260" height="260">
    <circle className="bg" cx="130" cy="130" r="110" />
    <circle
      className="progress"
      cx="130"
      cy="130"
      r="110"
      style={{
        strokeDashoffset: 690 - (690 * score) / 100
      }}
    />
  </svg>

  <div className="score-text">
    <h1>{score}</h1>
    <span>/100</span>
  </div>
</div>

       <h2>{getVerdict()}</h2>

<div className="trust-badge">
  AI Verified • Confidence 94%
</div>

<p>
  TruthLens detected moderate bias and emotional language,
  but most claims are supported by evidence and credible sources.
</p>
      </section>

      {/* SCORE GRID */}
      <section className="score-grid">
      <div className="score-card">
  <h3>⚖ Bias</h3>
  <span>32%</span>

  <div className="mini-progress">
    <div
      className="mini-fill"
      style={{ width: "32%" }}
    ></div>
  </div>
</div>
<div className="score-card">
  <h3>🔥 Emotion</h3>
  <span>48%</span>

  <div className="mini-progress">
    <div
      className="mini-fill"
      style={{ width: "48%" }}
    ></div>
  </div>
</div>
<div className="score-card">
  <h3>📑 Evidence</h3>
  <span>89%</span>

  <div className="mini-progress">
    <div
      className="mini-fill"
      style={{ width: "89%" }}
    ></div>
  </div>
</div>
 <div className="score-card">
    <h3>❓ Speculation</h3>
    <span>22%</span>

    <div className="mini-progress">
      <div className="mini-fill" style={{ width: "22%" }}></div>
    </div>
  </div>

  <div className="score-card">
    <h3>🌐 Sources</h3>
    <span>91%</span>

    <div className="mini-progress">
      <div className="mini-fill" style={{ width: "91%" }}></div>
    </div>
  </div>

      </section>

      {/* BIAS ANALYSIS */}
      <section className="bias-analysis">
        <h2>Bias Analysis</h2>

        <div className="article-box">

          <p className="neutral">OpenAI released a new model this week.</p>

          <p className="biased">
            This revolutionary model completely destroys all competitors.
          </p>

          <p className="emotional">
            Users are shocked and amazed by the unbelievable results.
          </p>

          <p className="speculative">
            Experts believe it may become the most powerful AI ever built.
          </p>

          <p className="evidence">
            Benchmark reports show a 12% improvement over previous versions.
          </p>

        </div>
      </section>

      {/* AI EXPLANATION */}
      <section className="ai-card">
        <h2>AI Explanation</h2>

        <ul>
          <li>✓ 14 claims matched trusted sources.</li>
          <li>✓ 3 speculative statements detected.</li>
          <li>✓ 2 emotionally loaded phrases found.</li>
          <li>✓ Source credibility remains high.</li>
          <li>✓ No manipulated media evidence found.</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <h2>AI Detection Timeline</h2>

        <div className="timeline">
          <div className="scan neutral-bar"></div>
          <div className="scan bias-bar"></div>
          <div className="scan emotion-bar"></div>
          <div className="scan evidence-bar"></div>
          <div className="scan evidence-bar"></div>
          <div className="scan speculative-bar"></div>
          <div className="scan neutral-bar"></div>
          <div className="scan evidence-bar"></div>
        </div>
      </section>

      {/* BOTTOM GRID */}
      <section className="bottom-grid">

        {/* SUMMARY */}
        <div className="summary-card">
          <h2>Analysis Summary</h2>

          <div className="summary-grid">

            <div className="stat-box">
              <h3>12</h3>
              <p>Biased Sentences</p>
            </div>

            <div className="stat-box">
              <h3>8</h3>
              <p>Emotional Statements</p>
            </div>

            <div className="stat-box">
              <h3>15</h3>
              <p>Evidence Backed</p>
            </div>

            <div className="stat-box">
              <h3>4</h3>
              <p>Speculative Claims</p>
            </div>

          </div>
        </div>

        {/* SOURCES */}
        <div className="sources-card">
          <h2>Trusted Sources</h2>
          <div className="source-item">
  <span>Reuters Fact Check</span>
  <strong>95%</strong>
</div>
<div className="source-progress">
  <div style={{ width: "95%" }}></div>
</div>

<div className="source-item">
  <span>BBC Verify</span>
  <strong>92%</strong>
</div>
<div className="source-progress">
  <div style={{ width: "92%" }}></div>
</div>

<div className="source-item">
  <span>WHO Database</span>
  <strong>98%</strong>
</div>
<div className="source-progress">
  <div style={{ width: "98%" }}></div>
</div>

<div className="source-item">
  <span>Government Archive</span>
  <strong>94%</strong>
</div>
<div className="source-progress">
  <div style={{ width: "94%" }}></div>
</div>
        </div>

      </section>

      {/* VERDICT */}
      <section className="verdict-card">
        <h2>VERDICT</h2>
        <h3>{getVerdict()}</h3>

        <p>
          Content appears reliable. Most claims are supported by evidence and trusted sources.
          Moderate emotional language was detected but does not significantly affect credibility.
        </p>
      </section>

      {/* ACTIONS */}
      <section className="actions">

        <button onClick={() => navigate("/analysis")}>
          New Analysis
        </button>

        <button onClick={() => navigate("/")}>
          Home
        </button>

        <button onClick={() => alert("PDF Download Started")}>
          Download Report
        </button>

        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied!");
          }}
        >
          Share Report
        </button>

      </section>

    </div>
  );
}

export default Result;