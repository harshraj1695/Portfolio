import { useState } from "react";
import "./Stats.css";

const GITHUB_USERNAME = "harshraj1695";
const LEETCODE_USERNAME = "harsh1695";

const Stats = () => {
  const [page, setPage] = useState(0);

  const next = () => setPage((prev) => (prev === 0 ? 1 : 0));

  return (
    <section className="stats-section">

      <h2 className="section-title">Achievements & Stats</h2>

      <div className="stats-grid">

        {/* ---------------- GITHUB ---------------- */}

        <div className="stat-card">

          <h3>GitHub</h3>

          <div className="github-stats-container">

            {page === 0 && (
              <div className="stats-row fade">
                <img
                  className="stats-img half"
                  src={`https://ghchart.rshah.org/409ba5/${GITHUB_USERNAME}`}
                  alt="GitHub contributions"
                />

                <img
                  className="stats-img half"
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true`}
                  alt="GitHub streak"
                />
              </div>
            )}

            {page === 1 && (
              <div className="stats-row fade">
                <img
                  className="stats-img half"
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true`}
                  alt="Activity graph"
                />

                <img
                  className="stats-img half"
                  src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${GITHUB_USERNAME}&theme=tokyonight`}
                  alt="Languages"
                />
              </div>
            )}

          </div>

          <button className="toggle-btn" onClick={next}>
            {page === 0 ? "More Stats →" : "← Back"}
          </button>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="stat-link"
          >
            View Profile →
          </a>

        </div>

        {/* ---------------- LEETCODE ---------------- */}

        <div className="stat-card">

          <h3>LeetCode</h3>

          <img
            className="stats-img"
            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&ext=contest`}
            alt="LeetCode stats"
          />

          <a
            href={`https://leetcode.com/${LEETCODE_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="stat-link"
          >
            View Profile →
          </a>

        </div>

      </div>

    </section>
  );
};

export default Stats;