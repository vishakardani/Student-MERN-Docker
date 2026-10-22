function About() {
  return (
    <section className="about-section">
      {/* Top Giant Statement */}
      <h2 className="about-quote">
        I believe in a security-first architecture, ensuring that every infrastructure I interact with is fortified, scalable, and resilient against modern threats.
      </h2>

      {/* The subtle divider line */}
      <div className="about-divider">
        <span className="divider-text">This is me.</span>
      </div>

      {/* Two-column layout for the bio */}
      <div className="about-content">
        <div className="about-left">
          <h3>Hi, I'm Visha.</h3>
        </div>
        <div className="about-right">
          <p>
            I'm a cybersecurity enthusiast dedicated to turning complex vulnerabilities into robust defenses. I specialize in creating secure, intelligent, and highly monitored system environments.
          </p>
          <p>
            My approach leverages the intersection of Artificial Intelligence and Cloud Security to anticipate risks before they occur. By prioritizing hardened Linux systems, algorithmic problem-solving, and continuous learning, I strive to deliver architectures that not only protect data integrity but also drive technological trust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;