import React, { useState, useEffect } from 'react';
import './App.css'

function Button() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  // Step 1: Retrieve the stored value from localStorage on component mount
  useEffect(() => {
    const storedQuery = localStorage.getItem('submittedQuery');
    console.log('Retrieved stored query from localStorage:', storedQuery);
    if (storedQuery) {
      setSubmittedQuery(storedQuery); // Set state with the stored query
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(searchQuery); // Update state with submitted query
    localStorage.setItem('submittedQuery', searchQuery); // Store the query in localStorage
    console.log('Saved query to localStorage:', searchQuery); // Log for debugging
  };

  const containerStyle = {
    backgroundColor: '#AFC9FF',
    borderStyle: 'none',
    padding: '5px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#0066ff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#AFC9FF',
    color: 'white',
  };

  return (
    <div id = 'searchbar'>
      <form onSubmit={handleSubmit} className="search-form" style={containerStyle}>
        <input
          type="search"
          name="query"
          placeholder="Input Song"
          className="search-input"
          value={searchQuery} // Controlled input
          onChange={handleInputChange} // Update state on input change
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '10px',
            width: '300px',
            color: 'black',
          }}
        />
        <button
          type="submit"
          className="input-button"
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.color = buttonStyle.color;
          }}
        >
          Input
        </button>
      </form>

      {submittedQuery && (
        <p>
          <strong>{submittedQuery}</strong>
        </p>
      )}
    </div>
  );
}

export default Button;
