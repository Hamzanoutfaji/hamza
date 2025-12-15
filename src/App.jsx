import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, ExternalLink, Code, Zap, Database, Layout, Search } from 'lucide-react';
import capAndBey from './assets/capandbey.png';
import galenics from './assets/galenics.png';
import camiral from './assets/camiral.png';
import oriental from './assets/oriental.png';
import sawakart from './assets/shopify.png';
import sonax from './assets/sonax.png';
import hamza from './assets/Hamza.jpeg';
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Capacities and Beyond',
      category: 'WordPress',
      description: 'Professional corporate website for a growth consultancy, focused on leadership development, psychometric assessments, and strategic communication, designed to build trust and clearly communicate impact.',
      tech: ['Wordpress', 'PHP', 'Elementor'],
      image: capAndBey,
      link: 'https://capandbey.com/'
    },
    {
      id: 2,
      title: 'Galenics Website',
      category: 'WordPress',
      description: 'Modern corporate website for a healthcare consultancy, built to showcase strategic partnerships, data-driven solutions, and innovation-focused market access across MEA healthcare markets.',
      tech: ['WordPress', 'PHP', 'SEO', 'WooCommerce'],
      image: galenics,
      link: 'https://galenics.com/'
    },
    {
      id: 3,
      title: 'Camiral Salon',
      category: 'Full Stack',
      description: 'Online booking system with admin dashboard for Camira Salon, allowing clients to easily schedule appointments, manage services, and streamline the salon’s daily operations through a clean and user-friendly interface.',
      tech: ['React', 'Node/Express', 'MySql'],
      image: camiral,
      link:'https://camiralsalon.com'
    },
    {
      id: 4,
      title: 'Oriental Pharamcy',
      category: 'WordPress',
      description: 'Professional corporate website for Oriental Pharmacy LLC, highlighting pharmaceutical services, regulatory affairs, and patient-oriented healthcare solutions in Oman.',
      tech: ['WordPress', 'Yoast SEO', 'WP Rocket', 'AdSense'],
      image: oriental,
      link: 'https://orientalpharmacyllc.com'
    },
    {
      id: 5,
      title: 'Sawakart',
      category: 'Shopify',
      description: 'Large-scale e-commerce platform for Sawakart, built to support product management, online ordering, and scalable digital commerce with a focus on performance and reliability.',
      tech: ['Liquid', 'Python', 'Mongodb', 'Shopify'],
      image: sawakart,
      link: 'https://sawakart.com'
    },
    {
      id: 6,
      title: 'Sonax AE',
      category: 'WordPress',
      description: 'Online store for Sonax car care products, designed to promote premium cleaning, polishing, and detailing solutions while driving online sales.',
      tech: ['WooCommerce', 'SEO', 'Custom Plugins'],
      image: sonax,
      link: 'https://sonax.ae'
    }
  ];

  const skills = {
    fullstack: [
      { name: 'React / Typescript', level: 95 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'MongoDB / PostgreSQL / Firebase / Mysql', level: 88 },
      { name: 'RESTful APIs', level: 96 },
      { name: 'Git / Docker', level: 78 }
    ],
    wordpress: [
      { name: 'Custom Theme Development', level: 80 },
      { name: 'Plugin Development', level: 90 },
      { name: 'WooCommerce', level: 92 },
      { name: 'SEO Optimization', level: 94 },
      { name: 'Performance Tuning', level: 91 },
      { name: 'Security Best Practices', level: 89 }
    ]
  };

  const WordPressIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{color: '#22c55e'}}>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 8.5h2v7h-2v-7zm1-3.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/>
    </svg>
  );

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-h">H</span>
              <span className="logo-n">N</span>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'nav-link-active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-menu-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">Hamza</span>{' '}
              <span className="hero-surname">Noutfaji</span>
            </h1>
            <div className="hero-subtitle">
              Full Stack Developer & WordPress Specialist
            </div>
            <div className="hero-tagline">
              Building Scalable Solutions & SEO-Optimized Experiences
            </div>
            <div className="hero-buttons">
              <a href="mailto:hamza.noutfaji@gmail.com" className="btn btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="/Hamza-Noutfaji-Software-Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View My Resume
              </a>
            </div>
            <div className="hero-contact">
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>hamza.noutfaji@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+961 81 056 771</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            About <span className="text-green">Me</span>
          </h2>
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image-glow"></div>
              <img 
                src= {hamza}
                alt="Profile" 
                className="about-image"
              />
            </div>
            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate software engineer specializing in full-stack development and WordPress solutions. With expertise in building scalable full-stack web applications and creating high-performance, SEO-optimized WordPress sites, I help businesses establish a powerful online presence.
              </p>
              <p className="about-paragraph">
                My WordPress expertise extends beyond basic development. I specialize in custom theme and plugin development, WooCommerce customization, advanced SEO implementation, and performance optimization to ensure your site ranks well and loads lightning-fast.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <Code className="stat-icon" size={32} />
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <WordPressIcon />
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="text-green">Skills</span>
          </h2>
          <p className="section-subtitle">
            Expertise in modern web technologies and WordPress ecosystem
          </p>

          <div className="skills-grid">
            {/* Full Stack Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <Database className="skill-category-icon" size={32} />
                <h3 className="skill-category-title">Full Stack Development</h3>
              </div>
              <div className="skill-list">
                {skills.fullstack.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WordPress Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <WordPressIcon />
                <h3 className="skill-category-title">WordPress & SEO</h3>
              </div>
              <div className="skill-list">
                {skills.wordpress.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Specializations */}
          <div className="specializations">
            <div className="specialization-card">
              <Search className="specialization-icon" size={40} />
              <h4 className="specialization-title">SEO Expert</h4>
              <p className="specialization-text">On-page, technical, and off-page SEO optimization for maximum visibility</p>
            </div>
            <div className="specialization-card">
              <Zap className="specialization-icon" size={40} />
              <h4 className="specialization-title">Performance</h4>
              <p className="specialization-text">Lightning-fast load times with caching, CDN, and code optimization</p>
            </div>
            <div className="specialization-card">
              <Layout className="specialization-icon" size={40} />
              <h4 className="specialization-title">Custom Solutions</h4>
              <p className="specialization-text">Tailored themes, plugins, and integrations for unique business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="text-green">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack applications and WordPress solutions
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className={`project-overlay ${hoveredProject === project.id ? 'project-overlay-active' : ''}`}></div>
                  <div className="project-badge">
                    {project.category}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container contact-container">
          <h2 className="section-title">
            Let's <span className="text-green">Connect</span>
          </h2>
          <p className="section-subtitle contact-subtitle">
            Ready to bring your project to life? Whether you need a custom web application or a high-performance WordPress site, I'm here to help.
          </p>

          <div className="contact-grid">
            <a href="mailto:hamza.noutfaji@gmail.com" className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Email</div>
                <a href='mailto:hamza.noutfaji@gmail.com' className="contact-card-value">hamza.noutfaji@gmail.com</a>
              </div>
            </a>

            <a href="tel:+961810567710" className="contact-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-value">+961 81 056 771</div>
              </div>
            </a>
          </div>

          <div className="contact-cta">
            <h3 className="contact-cta-title">Open to Opportunities</h3>
            <p className="contact-cta-text">
              Full-stack development • WordPress solutions • SEO optimization • Performance tuning • Custom integrations
            </p>
            <a
              href="/Hamza-Noutfaji-Software-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              View My Resume
            </a>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            © 2025 Hamza Noutfaji. Built with React & CSS.
          </p>
          <p className="footer-tagline">
            Crafting exceptional digital experiences
          </p>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .portfolio {
          background: #000;
          color: #f3f4f6;
          min-height: 100vh;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Navigation */
        .nav {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s;
        }

        .nav-scrolled {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.1);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .logo-h {
          color: #22c55e;
        }

        .logo-n {
          color: #fff;
        }

        .nav-menu {
          display: none;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .nav-menu {
            display: flex;
          }
        }

        .nav-link {
          background: none;
          border: none;
          color: #d1d5db;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s;
          text-transform: capitalize;
        }

        .nav-link:hover {
          color: #22c55e;
        }

        .nav-link-active {
          color: #22c55e;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: #22c55e;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .mobile-menu {
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(10px);
        }

        .mobile-menu-content {
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-menu-link {
          width: 100%;
          text-align: left;
          padding: 0.75rem;
          background: none;
          border: none;
          color: #d1d5db;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 0.375rem;
          text-transform: capitalize;
        }

        .mobile-menu-link:hover {
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), transparent, rgba(34, 197, 94, 0.05));
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .hero-text {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        .hero-name {
          color: #fff;
        }

        .hero-surname {
          color: #22c55e;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        @media (min-width: 640px) {
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }

        .hero-tagline {
          font-size: 1.125rem;
          color: #22c55e;
          margin-bottom: 2rem;
          font-family: 'Courier New', monospace;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          border-radius: 0.5rem;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          font-size: 1rem;
          text-decoration: none;
        }

        .btn-primary {
          background: #22c55e;
          color: #000;
        }

        .btn-primary:hover {
          background: #16a34a;
          transform: scale(1.05);
        }

        .btn-secondary {
          border: 2px solid #22c55e;
          color: #22c55e;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(34, 197, 94, 0.1);
        }

        .btn-large {
          padding: 1rem 2rem;
        }

        .hero-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          color: #9ca3af;
        }

        @media (min-width: 640px) {
          .hero-contact {
            flex-direction: row;
            justify-content: center;
            gap: 1.5rem;
          }
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .contact-icon {
          color: #22c55e;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid #22c55e;
          border-radius: 20px;
          display: flex;
          justify-content: center;
        }

        .scroll-wheel {
          width: 4px;
          height: 12px;
          background: #22c55e;
          border-radius: 2px;
          margin-top: 8px;
        }

        /* About Section */
        .about {
          padding: 5rem 0;
          background: linear-gradient(to bottom, #000, rgba(5, 46, 22, 0.2));
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 4rem;
        }

        .text-green {
          color: #22c55e;
        }

        .section-subtitle {
          text-align: center;
          color: #9ca3af;
          margin-bottom: 4rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .about-grid {
          display: grid;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .about-image-container {
          position: relative;
        }

        .about-image-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #22c55e, #16a34a);
          border-radius: 1rem;
          filter: blur(40px);
          opacity: 0.2;
          transition: opacity 0.3s;
        }

        .about-image-container:hover .about-image-glow {
          opacity: 0.3;
        }

        .about-image {
          position: relative;
          border-radius: 1rem;
          width: 100%;
          height: 400px;
          object-fit: cover;
          border: 2px solid rgba(34, 197, 94, 0.3);
          object-position: center 29%;
        }

        .about-paragraph {
          color: #d1d5db;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }

        .stat-card {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 0.5rem;
          padding: 1rem;
          text-align: center;
        }

        .stat-icon {
          color: #22c55e;
          margin: 0 auto 0.5rem;
        }

        .stat-number {
          font-weight: bold;
          font-size: 1.5rem;
          color: #22c55e;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        /* Skills Section */
        .skills {
          padding: 5rem 0;
          background: #000;
        }

        .skills-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .skill-category {
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), transparent);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 1rem;
          padding: 2rem;
        }

        .skill-category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .skill-category-icon {
          color: #22c55e;
        }

        .skill-category-title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          color: #d1d5db;
        }

        .skill-level {
          color: #22c55e;
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: #1f2937;
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(to right, #22c55e, #16a34a);
          border-radius: 9999px;
          transition: width 1s ease-out;
        }

        .specializations {
          display: grid;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        @media (min-width: 768px) {
          .specializations {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .specialization-card {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
        }

        .specialization-card:hover {
          border-color: #22c55e;
        }

        .specialization-icon {
          color: #22c55e;
          margin: 0 auto 1rem;
          transition: transform 0.3s;
        }

        .specialization-card:hover .specialization-icon {
          transform: scale(1.1);
        }

        .specialization-title {
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .specialization-text {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Projects Section */
        .projects {
          padding: 5rem 0;
          background: linear-gradient(to bottom, #000, rgba(5, 46, 22, 0.2));
        }

        .projects-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card {
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), transparent);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
        }

        .project-card:hover {
          border-color: #22c55e;
          box-shadow: 0 20px 25px -5px rgba(34, 197, 94, 0.2);
        }

        .project-image-container {
          position: relative;
          height: 192px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.5), transparent);
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .project-overlay-active {
          opacity: 0.9;
        }

        .project-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          background: #22c55e;
          color: #000;
          font-size: 0.75rem;
          font-weight: bold;
          border-radius: 9999px;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #fff;
          transition: color 0.3s;
        }

        .project-card:hover .project-title {
          color: #22c55e;
        }

        .project-description {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.25rem 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
          font-size: 0.75rem;
          border-radius: 0.25rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #22c55e;
          cursor: pointer;
          transition: color 0.3s;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .project-link:hover {
          color: #16a34a;
        }

        /* Contact Section */
        .contact {
          padding: 5rem 0;
          background: #000;
        }

        .contact-container {
          text-align: center;
        }

        .contact-subtitle {
          font-size: 1.125rem;
          margin-bottom: 3rem;
        }

        .contact-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), transparent);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 0.75rem;
          transition: border-color 0.3s;
          text-decoration: none;
          color: inherit;
        }

        .contact-card:hover {
          border-color: #22c55e;
        }

        .contact-card-icon {
          padding: 0.75rem;
          background: rgba(34, 197, 94, 0.2);
          border-radius: 0.5rem;
          transition: background 0.3s;
        }

        .contact-card:hover .contact-card-icon {
          background: rgba(34, 197, 94, 0.3);
        }

        .contact-card-icon svg {
          color: #22c55e;
        }

        .contact-card-content {
          text-align: left;
        }

        .contact-card-label {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .contact-card-value {
          color: #fff;
          font-weight: 600;
        }

        .contact-cta {
          padding: 2rem;
          background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.05), transparent);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 1rem;
        }

        .contact-cta-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .contact-cta-text {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        /* Footer */
        .footer {
          background: linear-gradient(to top, rgba(5, 46, 22, 0.2), #000);
          padding: 2rem 0;
          border-top: 1px solid rgba(34, 197, 94, 0.2);
        }

        .footer-content {
          text-align: center;
        }

        .footer-text {
          color: #9ca3af;
        }

        .footer-tagline {
          color: #22c55e;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}