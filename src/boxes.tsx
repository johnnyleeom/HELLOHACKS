import React from 'react';

interface BoxesProps {
  inputValue: string[];
}

const EmptyBoxes: React.FC<BoxesProps> = ({ inputValue }) => {
  const boxStyle = (index: number) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    width: '450px',
    height: '100px',
    backgroundColor: '#131313',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    opacity: 1 - index * 0.2,
    fontFamily: 'monospace',
    fontSize: 'large',
    color: 'white', // Make text color white
  });

  return (
    <div id="boxes">
      {inputValue.map((value, index) => (
        <div key={index} style={boxStyle(index)}>
          {value ? value : ''} {/* If no value, show "Empty" */}
        </div>
      ))}
    </div>
  );
};

export default EmptyBoxes;
