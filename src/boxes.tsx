import React from 'react';

function EmptyBoxes() {
  const boxStyle = (index: number) => ( {
    width: '360px',  
    height: '100px', 
    borderRadius: '10px',
    margin: '20px', 
    backgroundColor: '#131313', 
    border: '5px solid rgba(0, 0, 0, 0.5)',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
    opacity: 1 - index * 0.2,
  });

  return (
    <div >
      <div style={boxStyle(0)}></div>
      <div style={boxStyle(1)}></div>
      <div style={boxStyle(2)}></div>
      <div style={boxStyle(3)}></div>
    </div>
  );
}

export default EmptyBoxes;
