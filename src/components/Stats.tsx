import "./Stats.css";

const GITHUB_USERNAME = "harshraj1695";
const LEETCODE_USERNAME = "harsh1695";

const Stats = () => {
  return (
    <section className="stats-section">

      <h2 className="section-title">Achievements & Stats</h2>

      <div className="stats-grid">

        {/* ---------------- GITHUB ---------------- */}

        <div className="stat-card">

          <h3>GitHub</h3>

                     {/* Contribution Heatmap */}
            <img
              className="stats-img"
              src={`https://ghchart.rshah.org/409ba5/${GITHUB_USERNAME}`}
              alt="GitHub contributions"
            />


          {/* Contribution + PR + Issues */}
          <img
            className="stats-img"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true`}
          />

          {/* Languages
          <img
            className="stats-img"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true`}
          /> */}

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

          {/* LeetCode Main Card */}
          <img
            className="stats-img"
            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&ext=contest`}
          />

          {/* Contest Rating Graph */}
          {/* <img
            className="stats-img"
            src={`https://leetcode-stats-six.vercel.app/?username=${LEETCODE_USERNAME}&theme=dark`}
          /> */}

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