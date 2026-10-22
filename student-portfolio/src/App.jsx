import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const TaskManager = lazy(() => import('./TaskManager'));

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const studentName = "VISHA KARDANI"; 
  const headline = "4th-Semester Student | Aspiring Cyber Security Intern";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500); 

    return () => clearTimeout(timer); 
  }, []);

  if (showIntro) {
    return (
      <div className="intro-screen">
        <h1 className="intro-text">
          <span>V</span><span>I</span><span>S</span><span>H</span><span>A</span>
          <span style={{ width: '1.5rem' }}></span>
          <span>K</span><span>A</span><span>R</span><span>D</span><span>A</span><span>N</span><span>I</span>
        </h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <Header name={studentName} title={headline} />
        <NavBar />
        
        <main className="content-area">
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem', fontSize: '1.2rem' }}>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tasks" element={<TaskManager />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;