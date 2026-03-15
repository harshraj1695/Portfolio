import { useEffect, useRef, useState } from "react";
import type { SkillCategory } from "../types";
import "./Skills.css";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiLinux,
  SiDocker,
  SiGit,
  SiGnu,
} from "react-icons/si";

import { FaNetworkWired } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { MdMemory } from "react-icons/md";

const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Data Structures & Algorithms", icon: <TbBinaryTree /> },
    ],
  },
  {
    category: "Linux System Programming",
    skills: [
      { name: "POSIX APIs", icon: <SiLinux /> },
      { name: "Process & Thread Management", icon: <MdMemory /> },
      { name: "IPC Mechanisms", icon: <FaNetworkWired /> },
      { name: "File I/O", icon: <SiLinux /> },
    ],
  },
  {
    category: "Networking",
    skills: [
      { name: "Socket Programming (TCP/UDP)", icon: <FaNetworkWired /> },
      { name: "Linux Networking Stack", icon: <SiLinux /> },
      { name: "Ethernet & NIC Basics", icon: <FaNetworkWired /> },
      { name: "Packet Processing Fundamentals", icon: <FaNetworkWired /> },
    ],
  },
  {
    category: "Kernel & Performance",
    skills: [
      { name: "Linux Kernel Modules", icon: <SiLinux /> },
      { name: "User–Kernel Interaction", icon: <MdMemory /> },
      { name: "DPDK", icon: <FaNetworkWired /> },
      { name: "VPP", icon: <FaNetworkWired /> },
      { name: "Concurrency & Multithreading", icon: <MdMemory /> },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "GCC", icon: <SiGnu /> },
      { name: "GDB / KGDB", icon: <MdMemory /> },
      { name: "Make", icon: <SiLinux /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    skillRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-categories">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => {
                skillRefs.current[categoryIndex] = el;
              }}
              className={`skill-category ${
                visibleSkills.has(categoryIndex) ? "visible" : ""
              }`}
            >
              <h3 className="category-title">{category.category}</h3>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;