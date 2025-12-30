import React from 'react'

function Contact() {
  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p className="subtitle">Let's Discuss Your Project</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Ready to transform your operations with intelligent automation? 
            Contact Southern Shade LLC to discuss your project requirements.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>contact@southernshade.com</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Houston, Texas</p>
            </div>

            <div className="contact-item">
              <h3>SAM.gov Registration</h3>
              <p>UEI: [Your UEI Number]</p>
              <p>CAGE Code: [Your CAGE Code]</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" name="organization" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="govt-notice">
        <h2>Government Contracting</h2>
        <p>
          Southern Shade LLC is registered with SAM.gov and ready to work with federal agencies. 
          We understand government procurement processes and compliance requirements.
        </p>
      </section>
    </div>
  )
}

export default Contact
