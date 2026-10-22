function Header() {
  return (
    <header className="hero-section">
      {/* Left side vertical text */}
      <div className="vertical-email">
        kardanivisha@gmail.com
      </div>

      {/* Main Center Content */}
      <div className="hero-content">
        <h1 className="title-purple">CYBERSECURITY</h1>
        <h1 className="title-white">ENTHUSIAST</h1>
        <p>
          Hi! I'm <strong>Visha</strong>. A 4th-semester student exploring cybersecurity, AI, cloud security, and Linux, actively seeking a summer internship to build secure, scalable, and high-performance solutions.
        </p>
        <button className="resume-btn">DOWNLOAD RESUME</button>
      </div>

      {/* Right side stats */}
      <div className="hero-stats">
        <div className="stat">
          <h2 className="stat-number">1</h2>
          <p>Years of Exploring</p>
        </div>
        <div className="stat">
          <h2 className="stat-number">4+</h2>
          <p>Completed Projects</p>
        </div>
      </div>
    </header>
  );
}

export default Header;