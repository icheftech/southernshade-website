import React from 'react'

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Southern Shade LLC</h1>
          <h2>Intelligent Autonomous Systems</h2>
          <p className="hero-description">
            Pioneering AI-driven solutions for government and enterprise. 
            Specializing in autonomous architecture, data intelligence, and process automation.
          </p>
          <div className="hero-notice">
            <p><strong>SAM.gov Registered</strong> - Ready for Federal Contracts</p>
            <p>UEI: [Your UEI Number]</p>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <h2>Core Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-card">
            <h3>AI Systems Architecture</h3>
            <p>Custom autonomous systems designed for complex operational environments</p>
          </div>
          <div className="capability-card">
            <h3>Data Intelligence</h3>
            <p>Advanced analytics and machine learning for actionable insights</p>
          </div>
          <div className="capability-card">
            <h3>Process Automation</h3>
            <p>End-to-end automation solutions that enhance efficiency and reduce costs</p>
          </div>
          <div className="capability-card">
            <h3>Government Contracting</h3>
            <p>Experienced in federal procurement and compliance requirements</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Operations?</h2>
        <p>Contact us to discuss how Southern Shade can deliver intelligent solutions for your mission.</p>
        <a href="/contact" className="cta-button">Get Started</a>
      </section>
    </div>
  )
}

export default Home
