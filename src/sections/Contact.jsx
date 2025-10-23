import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <p className="section-subtitle fade-in">"Ping me — I debug life too"</p>

      <div className="contact-grid">
        <div className="contact-card fade-in">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <a href="mailto:varanasisk0011@gmail.com">varanasisk0011@gmail.com</a>
        </div>

        <div className="contact-card fade-in">
          <div className="contact-icon">💻</div>
          <h3>GitHub</h3>
          <a
            href="https://github.com/vivekkumar9919"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/vivekkumar9919
          </a>
        </div>

        <div className="contact-card fade-in">
          <div className="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/vivek-kumar-b974b61a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/vivek-kumar-b974b61a6
          </a>
        </div>
      </div>

      <div
        className="quote fade-in"
        style={{ marginTop: "3rem" }}
      >
        <p>"First solve the problem. Then, write the code."</p>
        <div className="quote-author">— John Johnson</div>
      </div>
    </section>
  );
}

export default Contact;
