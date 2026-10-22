function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box" style={{ border: '1px solid #ff6b6b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Error: {message}</p>
      <button 
        onClick={onRetry} 
        style={{ backgroundColor: '#ff6b6b', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        Retry Fetch
      </button>
    </div>
  );
}

export default ErrorMessage;