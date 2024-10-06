import React from 'react';
import album1 from './assets/pictures/album1.jpg';
import './App.css'; 

function ImageWithText() {
  return (
    <div className="image-container" >
      <img src={album1} alt="Album Cover" />
      <p>Host is Now Playing...</p>
      <p id = 'songName'>"See you again"</p>
    </div>
  );
}

export default ImageWithText;