import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Hamburger Icon (Top Right) */}
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* The Sidebar Overlay */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>✕</div>
        
        <div className="sidebar-content">
          <div className="sidebar-column">
            <h3>SOCIAL</h3>
            {/* Update the href link to point to your actual GitHub URL */}
            <a href="https://github.com/vishakardani" target="_blank" rel="noreferrer">Github</a>
            <a href="https://linkedin.com/in/your-linkedin-handle" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
          
          <div className="sidebar-column">
            <h3>MENU</h3>
            <div className="sidebar-column">
            <h3>MENU</h3>
            <div className="menu-links" onClick={() => setIsOpen(false)}>
              <Link to="/"><span className="dot dot-home"></span> Home</Link>
              {/* About Me points to "/" since it currently lives on the Home page */}
              <Link to="/"><span className="dot dot-about"></span> About Me</Link>
              {/* Experience is a placeholder link for now */}
              <Link to="/"><span className="dot dot-experience"></span> Experience</Link>
              <Link to="/projects"><span className="dot dot-projects"></span> Projects</Link>
              <Link to="/tasks">Task Manager API</Link>
            </div>
          </div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <p>GET IN TOUCH</p>
          <p>kardanivisha@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;