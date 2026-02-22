import { useEffect, useRef, useState } from "react";
import profilePic from "../assets/profile.png";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-image-card">
            <div className="profile-image">
              <img src={profilePic} alt="Harsh Raj Singh" loading="lazy" />
            </div>
          </div>

          <div className="about-text-card">
            <h3>Systems Engineer | Linux & Networking</h3>

            <p>
              Systems Engineer with hands-on experience in Linux system
              programming, networking, and low-level development using C and
              POSIX APIs. Skilled in socket programming, concurrency, and
              operating system internals.
            </p>

            <p>
              During my experience at WatchGuard Technologies, I gained exposure
              to Linux kernel concepts, user–kernel interaction, DPDK
              fundamentals, and Ethernet driver architecture (RX/TX path, NIC
              basics). I am actively seeking roles in Kernel, Networking, and
              Systems Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
