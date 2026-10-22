function Spinner() {
  return (
    <div className="spinner" style={{ textAlign: 'center', padding: '2rem', color: 'var(--accent)' }}>
      <p>Loading repositories...</p>
    </div>
  );
}

export default Spinner;