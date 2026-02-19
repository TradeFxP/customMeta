import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      color: '#fe0100',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Next.js', icon: '▲' }
      ]
    },
    {
      category: 'Backend',
      color: '#2C1654',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: '.NET', icon: '🔷' }
      ]
    },
    {
      category: 'Mobile',
      color: '#ff6b6b',
      technologies: [
        { name: 'React Native', icon: '📱' },
        { name: 'Flutter', icon: '🦋' },
        { name: 'iOS', icon: '🍎' },
        { name: 'Android', icon: '🤖' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      color: '#4ecdc4',
      technologies: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Azure', icon: '🔷' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' }
      ]
    },
    {
      category: 'Database',
      color: '#a855f7',
      technologies: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Redis', icon: '🔴' }
      ]
    },
    {
      category: 'AI & ML',
      color: '#f59e0b',
      technologies: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'OpenAI', icon: '🤖' },
        { name: 'Scikit-learn', icon: '📊' }
      ]
    }
  ];

  return (
    <section id="technologies" className="technologies-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                Our Technology Stack
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title">
                We Work With <span className="text-gradient">Modern Technologies</span>
              </h2>
              <p className="section-description">
                Leveraging the latest and most powerful technologies to build robust, scalable solutions
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {techCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="tech-category-card">
                <div className="category-header" style={{ borderColor: category.color }}>
                  <h3 className="category-title" style={{ color: category.color }}>
                    {category.category}
                  </h3>
                </div>
                <div className="tech-list">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="tech-cta-text">
              Need a technology not listed here? <a href="#contact">Let's discuss your requirements</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
