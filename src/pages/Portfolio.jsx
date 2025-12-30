import React from 'react'

function Portfolio() {
  return (
    <div className="page portfolio-page">
      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p className="subtitle">Delivering Results Across Industries</p>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-intro">
          <p>
            Southern Shade LLC has successfully delivered AI and automation solutions across government, 
            healthcare, and enterprise sectors. Our work demonstrates measurable impact and innovation.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>Federal Agency Process Automation</h3>
            <p className="category">Government | Automation</p>
            <p>
              Implemented intelligent automation system for federal agency, reducing processing time 
              by 65% and improving accuracy. Solution handles 10,000+ transactions daily.
            </p>
          </div>

          <div className="portfolio-item">
            <h3>Healthcare AI Medical Coding</h3>
            <p className="category">Healthcare | AI</p>
            <p>
              Developed AI-powered medical coding automation system achieving 95% accuracy. 
              Reduced coding time by 80% while maintaining HIPAA compliance.
            </p>
          </div>

          <div className="portfolio-item">
            <h3>Enterprise Data Intelligence Platform</h3>
            <p className="category">Enterprise | Analytics</p>
            <p>
              Built real-time analytics platform processing millions of data points. Delivered 
              actionable insights that improved decision-making speed by 50%.
            </p>
          </div>

          <div className="portfolio-item">
            <h3>City Government Digital Transformation</h3>
            <p className="category">Local Government | Integration</p>
            <p>
              Modernized legacy systems for city government, integrating 15+ departments into 
              unified platform. Improved citizen services and reduced costs.
            </p>
          </div>
        </div>

        <div className="capabilities-note">
          <h2>Key Capabilities Demonstrated</h2>
          <ul>
            <li>Federal and state government contract delivery</li>
            <li>HIPAA-compliant healthcare solutions</li>
            <li>Large-scale data processing and analytics</li>
            <li>Legacy system modernization</li>
            <li>Security and compliance expertise</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how we can deliver similar results for your organization.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  )
}

export default Portfolio
