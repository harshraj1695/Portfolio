import "./Hero.css";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="floating-blob"></div>
        <div className="particles"></div>
      </div>

      <div className="hero-content">
        <h3 className="hero-title">
          Hi, I'm <span className="highlight">Harsh</span> — I build efficient
          software close to the hardware, specializing in Linux systems and
          networking.
        </h3>

        <p className="hero-subtitle">
          C • POSIX APIs • Socket Programming • Kernel Modules • DPDK
          Fundamentals • Operating Systems
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            Projects
          </button>
          <a
            href="https://drive.google.com/file/d/15-qzBWdljpLVl4fAk2WFNfZY7_g2GtvP/view?usp=sharing.pdf"
            target="_blank"
            className="btn btn-secondary"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
