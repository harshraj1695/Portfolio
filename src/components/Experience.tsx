import { useEffect, useRef, useState } from 'react';
import type { Experience } from '../types';
import './Experience.css';

const experienceData: Experience[] = [
   {
    company: 'WatchGuard Technologies Pvt. Ltd.',
    role: 'Kernel / Systems Engineering Intern',
    period: 'Jul 2025 – Present',
    description:
      'Gaining hands-on experience in Linux system programming using C, including file I/O, process management, IPC mechanisms, and multithreading with POSIX APIs. Worked with networking concepts such as TCP/UDP socket programming and explored Linux kernel modules, user space–kernel space interaction, and DPDK-based packet processing fundamentals.',
    icon: 'WG',
  }
];

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
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
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''}`}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{exp.icon}</div>
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
