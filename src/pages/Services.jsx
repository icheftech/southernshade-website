import React from 'react'

function Services() {
  return (
    <div className="page services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p className="subtitle">Comprehensive AI & Automation Solutions</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h2>AI Systems Architecture</h2>
          <p>
            Design and deployment of intelligent autonomous systems tailored to your operational needs. 
            We build scalable AI solutions that integrate seamlessly with existing infrastructure.
          </p>
          <ul>
            <li>Custom AI model development</li>
            <li>System integration & deployment</li>
            <li>Performance optimization</li>
            <li>Ongoing maintenance & support</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Data Intelligence & Analytics</h2>
          <p>
            Transform raw data into actionable insights with advanced analytics and machine learning. 
            Our data intelligence services help you make informed decisions faster.
          </p>
          <ul>
            <li>Predictive analytics</li>
            <li>Real-time data processing</li>
            <li>Custom dashboards & reporting</li>
            <li>Data governance & security</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Process Automation</h2>
          <p>
            Streamline operations and reduce costs with intelligent automation. We identify automation 
            opportunities and implement solutions that deliver measurable ROI.
          </p>
          <ul>
            <li>Workflow automation</li>
            <li>Robotic process automation (RPA)</li>
            <li>Document processing</li>
            <li>Integration services</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Government Solutions</h2>
          <p>
            Specialized solutions for federal, state, and local government agencies. We understand 
            compliance requirements and deliver secure, efficient systems.
          </p>
          <ul>
            <li>SAM.gov registered vendor</li>
            <li>Federal compliance expertise</li>
            <li>Secure cloud solutions</li>
            <li>Grant & contract support</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Healthcare AI</h2>
          <p>
            AI-powered solutions for healthcare organizations, including medical coding automation, 
            patient data analysis, and operational efficiency improvements.
          </p>
          <ul>
            <li>Medical coding automation</li>
            <li>Clinical decision support</li>
            <li>HIPAA-compliant systems</li>
            <li>Healthcare analytics</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Consulting & Strategy</h2>
          <p>
            Strategic guidance for AI adoption and digital transformation. We help organizations 
            develop roadmaps and implement best practices.
          </p>
          <ul>
            <li>AI readiness assessment</li>
            <li>Technology strategy</li>
            <li>Implementation planning</li>
            <li>Training & knowledge transfer</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us to discuss how our services can transform your operations.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  )
}

export default Services
