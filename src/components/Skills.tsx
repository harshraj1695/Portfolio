import { useEffect, useRef, useState } from 'react';
import type { SkillCategory } from '../types';
import './Skills.css';

const skillsData: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'C', icon: 'C' },
      { name: 'C++', icon: 'C++' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Data Structures & Algorithms', icon: 'DS' },
    ],
  },
  {
    category: 'Linux System Programming',
    skills: [
      { name: 'POSIX APIs', icon: 'PX' },
      { name: 'Process & Thread Management', icon: 'TH' },
      { name: 'IPC Mechanisms', icon: 'IP' },
      { name: 'File I/O', icon: 'IO' },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { name: 'Socket Programming (TCP/UDP)', icon: 'SK' },
      { name: 'Linux Networking Stack', icon: 'LN' },
      { name: 'Ethernet & NIC Basics', icon: 'ET' },
      { name: 'Packet Processing Fundamentals', icon: 'PP' },
    ],
  },
  {
    category: 'Kernel & Performance',
    skills: [
      { name: 'Linux Kernel Modules', icon: 'KM' },
      { name: 'User–Kernel Interaction', icon: 'UK' },
      { name: 'DPDK Fundamentals', icon: 'DP' },
      { name: 'Concurrency & Multithreading', icon: 'MT' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'GCC', icon: 'GC' },
      { name: 'GDB / KGDB', icon: 'DB' },
      { name: 'Make', icon: 'MK' },
      { name: 'Git & Docker', icon: 'GD' },
    ],
  },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = skillRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-categories">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => { skillRefs.current[categoryIndex] = el; }}
              className={`skill-category ${visibleSkills.has(categoryIndex) ? 'visible' : ''}`}
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
