import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to join waitlist');
      }
  
      const data = await response.json();
      setShowModal(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='hero'>
      <h2>Modern Ordering for <span className='res'>Restaurants </span>
       - Without the <span className="middleman">Middleman</span></h2>
      <p className="subtext">Join the waitlist for early access, first 500 members get free delivery for month.</p>

      <form onSubmit={handleSubmit} className="cta-container">
        <input
          type="email"
          name='email'
          placeholder='Enter your email'
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="cta-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Secure your spot'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Congratulations! 🎉</h3>
            <p>You've been added to our waitlist.</p>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;