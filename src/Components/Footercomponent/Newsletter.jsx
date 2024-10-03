import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email.includes('@') || !isChecked) {
      setStatus('Please provide a valid email and agree to receive emails.');
      return;
    }

    // Formspree form endpoint (replace with your form endpoint)
    const formEndpoint = 'https://formspree.io/f/meoqjjzr';

    // Sending data to Formspree
    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Thank you for subscribing!');
          setEmail('');
          setIsChecked(false);
        } else {
          setStatus('Oops! There was an error submitting your form.');
        }
      })
      .catch(() => setStatus('Something went wrong. Please try again.'));
  };



  return (
    <div className="newsletter-signup">
      <h3 className='signupnews'>Sign up for our newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
           <span className='recieve'> I would like to receive emails from Dev Diaries</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Newsletter;
