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
{/* 
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
            </p> */}
            <p> 
              Most developers write code that runs on top of an OS. I write code that talks to the OS or bypasses it entirely.
At WatchGuard Technologies, I've gone from writing my first kernel module to building a DPDK-based programmable firewall that processes packets at line rate, entirely in userspace. Along the way I've debugged NIC driver RX paths with GDB, compiled custom kernels for embedded ARM hardware, and extended VPP's graph node pipeline with custom plugins.
I'm a final year CSE student at Chandigarh University who found his way into systems programming and hasn't looked back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
