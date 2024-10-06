import React, { useState } from 'react';
import './App.css';
import EmptyBoxes from './boxes';

function Button() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValues, setInputValues] = useState<string[]>(['', '', '', '']); 

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission and update the boxes
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Find the first empty box and update it
    const firstEmptyIndex = inputValues.findIndex(value => value === '');
    if (firstEmptyIndex !== -1) {
      const updatedValues = [...inputValues];
      updatedValues[firstEmptyIndex] = searchQuery; // Update the first empty box with the submitted input
      setInputValues(updatedValues);
    } else {
      alert('All boxes are filled!'); // 
    }
    setSearchQuery(''); 
  };

  const containerStyle = {
    backgroundColor: '#AFC9FF',
    borderStyle: 'none',
    padding: '5px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '480px',
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
    <div id="searchbar">
      <form onSubmit={handleSubmit} className="search-form" style={containerStyle}>
        <input
          type="search"
          name="query"
          placeholder="Input Song"
          className="search-input"
          value={searchQuery}
          onChange={handleInputChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '10px',
            width: '380px',
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
      <EmptyBoxes inputValue={inputValues} />
    </div>
  );
}

export default Button;
