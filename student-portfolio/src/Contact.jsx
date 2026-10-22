import { useState } from 'react';

function Contact() {
  // useState #2: Managing a controlled form input
  const [message, setMessage] = useState('');

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>How can I help you?</label>
        <br />
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Start typing..."
        />
      </form>

      <div className="live-preview">
        <h4>Real-time Preview:</h4>
        {/* Displays the state variable in real-time as the user types */}
        <p>{message ? message : "Your message will appear here..."}</p>
      </div>
    </section>
  );
}

export default Contact;