import React from 'react'

function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <h1>About Southern Shade LLC</h1>
        <p className="subtitle">Building the Future of Intelligent Automation</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Southern Shade LLC is dedicated to delivering cutting-edge AI and automation solutions 
            for government agencies and enterprise clients. We specialize in creating intelligent 
            autonomous systems that streamline operations, enhance decision-making, and drive 
            measurable outcomes.
          </p>
        </div>

        <div className="about-section">
          <h2>Who We Serve</h2>
          <ul>
            <li>Federal Government Agencies</li>
            <li>State and Local Governments</li>
            <li>Healthcare Organizations</li>
            <li>Enterprise Businesses</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Platform: S.S.O.</h2>
          <p>
            <strong>Southern Shade Orchestrator (S.S.O.)</strong> is our flagship platform and service 
            offering - not a product, but a comprehensive solution for intelligent process orchestration. 
            S.S.O. integrates AI, automation, and data intelligence to create seamless operational workflows.
          </p>
        </div>

        <div className="about-section">
          <h2>Government Contracting</h2>
          <p>
            We are registered with SAM.gov and ready to work with federal agencies. Our team 
            understands government procurement processes, compliance requirements, and the unique 
            challenges of public sector operations.
          </p>
          <p><strong>UEI:</strong> [Your UEI Number]</p>
          <p><strong>CAGE Code:</strong> [Your CAGE Code]</p>
        </div>
      </section>
    </div>
  )
}

export default About
