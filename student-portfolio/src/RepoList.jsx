function RepoList({ data }) {
  // Handle the case where the search filters out all results
  if (data.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {data.map((repo) => (
        <li key={repo.id} style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{repo.name}</strong>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>⭐ {repo.stargazers_count}</span>
          </div>
          <p style={{ margin: '0.5rem 0' }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              View Repository →
            </a>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default RepoList;