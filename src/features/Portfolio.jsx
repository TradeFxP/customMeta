import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'cloud', 'ai'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured online shopping platform with payment integration',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for health and fitness tracking',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      category: 'cloud',
      description: 'Scalable cloud infrastructure for enterprise applications',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tech: ['AWS', 'Kubernetes', 'Docker'],
      link: '#'
    },
    {
      id: 4,
      title: 'AI Chatbot System',
      category: 'ai',
      description: 'Intelligent customer support chatbot with NLP capabilities',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      tech: ['Python', 'TensorFlow', 'OpenAI'],
      link: '#'
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard for business intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Banking Mobile App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric auth',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      tech: ['Flutter', 'Node.js', 'MongoDB'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                Our Recent Work
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title">
                Explore Our <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="section-description">
                Check out some of our recent projects and see how we've helped businesses grow
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="portfolio-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mt-4">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="portfolio-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <a href={project.link} className="portfolio-link">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-category">{project.category}</div>
                  <h4 className="portfolio-title">{project.title}</h4>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="#contact" className="button-v2">
              View All Projects
              <span className="button-icon">
                <i className="fa-regular fa-arrow-up-right"></i>
                <i className="fa-regular fa-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
