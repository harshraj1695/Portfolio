import { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';
import './Projects.css';

const projectsData: Project[] = [

{
  title: 'GraphShield – DPDK Graph-Based Packet Filtering Engine',
  icon: '🛡️',
  description:
    'Built a high-performance packet filtering engine using the DPDK graph framework, demonstrating graph-based dataplane design and batch packet processing. Implemented a CLI interface to dynamically enable or disable graph nodes at runtime, allowing flexible control over packet processing pipelines without restarting the application.',
  techStack: ['C', 'DPDK Graph', 'Linux', 'Networking', 'Packet Processing', 'CLI'],
  githubUrl: 'https://github.com/harshraj1695/GraphShield',
},
{
  title: 'VPP Custom ARP Responder Plugin',
  icon: '📡',
  description:
    'Developed a custom VPP plugin implementing an ARP responder node that intercepts packets and generates ARP replies using vectorized packet processing.',
  techStack: ['C', 'VPP Plugin', 'Vector Packet Processing', 'Networking', 'Linux'],
  githubUrl: 'https://github.com/harshraj1695/VPP_For_Beginners/tree/main/plugins/myarp',
},
{
  title: 'Multi-Client Chat Application (C, TCP Sockets)',
  icon: '💬',
  description:
    'Implemented a multi-client chat server in C using TCP sockets and select() based I/O multiplexing to handle concurrent client communication without multithreading.',
  techStack: ['C', 'TCP Sockets', 'select()', 'I/O Multiplexing', 'Linux'],
  githubUrl: 'https://github.com/harshraj1695/TCP_chat_application',
},
{
  title: 'DPDK Graph-Based Programmable Firewall Framework',
icon: '🛡️',
  description:
    'Built a high-performance packet processing framework using the DPDK Graph API with a modular pipeline (RX → Parser → Firewall → TX) and a CLI control plane.',
  techStack: ['C', 'DPDK', 'DPDK Graph API', 'Packet Processing', 'Linux'],
  githubUrl: 'https://github.com/harshraj1695/DPDK_For_Beginners/tree/main/dpdk-graph-fw',
},
// {
//   title: 'C Systems & Data Structures Projects Collection',
//   icon: '🧠',
//   description:
//     'Collection of C programming projects covering data structures, sockets, IPC mechanisms, multithreading, and system programming.',
//   techStack: ['C', 'POSIX APIs', 'Linux', 'Sockets', 'Multithreading', 'IPC'],
//   githubUrl: 'https://github.com/harshraj1695/Cprojects',
// },
{
  title: 'Linux Kernel Programming & Device Drivers',
  icon: '🐧',
  description:
    'Implemented Linux kernel modules and device drivers including character drivers, interrupts, and embedded Linux development on BeagleBone.',
  techStack: ['C', 'Linux Kernel', 'Device Drivers', 'Embedded Linux', 'BeagleBone'],
  githubUrl: 'https://github.com/harshraj1695/kernel_programing',
},
{
  title: 'DPDK High-Performance Packet Processing',
  icon: '⚡',
  description:
    'Built networking programs using DPDK demonstrating user-space packet processing, hugepages memory management, and high-speed NIC communication.',
  techStack: ['C', 'DPDK', 'Linux', 'Networking', 'HugePages'],
  githubUrl: 'https://github.com/harshraj1695/DPDK_For_Beginners',
}
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(index));
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
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`project-card ${visibleProjects.has(index) ? 'visible' : ''}`}
            >
              <div className="project-header">
<div className="project-icon">{project.icon}</div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
