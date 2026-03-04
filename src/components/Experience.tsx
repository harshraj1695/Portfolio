import { useEffect, useRef, useState } from 'react';
import type { Experience } from '../types';
import './Experience.css';

const experienceData: Experience[] = [
  {
    company: 'WatchGuard Technologies Pvt. Ltd.',
    role: 'Kernel / Systems Engineering Intern',
    period: 'Jul 2025 – Present',
    description: [
      'Designed, implemented, and debugged Linux kernel modules, analyzing driver architecture and user–kernel space interaction, leveraging GDB and dmesg for low-level debugging.',

      'Developed and tested TCP/UDP socket-based applications, examining Linux networking stack behavior and high-performance packet processing using DPDK (Poll Mode Drivers, Hugepages).',

      'Developed and integrated VPP plugins, understanding VPP’s vector packet processing model and graph node architecture for high-throughput packet forwarding.',

      'Customized and compiled the Linux kernel for BeagleBone Black, configuring U-Boot bootloader and managing kernel image loading during system initialization.'
    ],
    icon: '/watchguard.png',
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

      if (ref) observer.observe(ref);
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
                <div className="timeline-icon">
                  <img src={exp.icon} alt={exp.company} />
                </div>
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <h4 className="timeline-company">{exp.company}</h4>

                <ul className="timeline-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;