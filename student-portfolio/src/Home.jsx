import About from './About';
import Skills from './Skills';

function Home() {
  const techSkills = ["Java", "Python", "JavaScript", "Network Security", "Data Structures"];

  return (
    // Added inline styles for instant centering and padding
    <div 
      className="home-page" 
      style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '2rem 20px' 
      }}
    >
      <About />
      <Skills skillList={techSkills} />
    </div>
  );
}

export default Home;