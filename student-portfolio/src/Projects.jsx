import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import RepoList from './RepoList';

function Projects() {
  // 1. Initial states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // NEW: A simple counter to trigger retries. 
  const [retryCount, setRetryCount] = useState(0);

  // Replace this with your actual GitHub username
  const githubUsername = "vishakardani"; 

  // 2. Move the fetch directly into the useEffect
  // It now watches [retryCount]. Whenever retryCount changes, it runs again.
  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from GitHub.");
        }
        return response.json();
      })
      .then((repoData) => {
        // State updates inside async promises are perfectly fine!
        setData(repoData);
        setLoading(false);
        setError(null); 
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [retryCount]); 

  // 3. This function handles the button click outside of the effect
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setRetryCount((prev) => prev + 1); // Triggers the useEffect again!
  };

  // 4. Filter the data based on the search input
  const filteredData = data.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>My GitHub Projects</h2>

      {!loading && !error && (
        <input 
          type="text" 
          placeholder="Search repositories by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid var(--accent)' }}
        />
      )}

      {loading && <Spinner />}
      
      {/* We pass our new handleRetry function here */}
      {error && <ErrorMessage message={error} onRetry={handleRetry} />}
      
      {!loading && !error && <RepoList data={filteredData} />}

    </section>
  );
}

export default Projects;