import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Card from './Card';

import { useState, useEffect, useRef } from 'react';
import scrolldown from './assets/scrolldown.png'
// import Card from './Card';


const TEXT = 'Happy Birthday Dayoung';

const App = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvasDivElement = canvasRef.current;

    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })
  const handleClickScroll = () => {
    const element = document.getElementById('letter');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main">
      <div className='canvas'>
        <div ref={canvasRef} />
      </div>
      <div onClick={handleClickScroll}>
        <div>눌러방</div>
        <img src={scrolldown}/>
      </div>
      <div id="down">
      </div>
      <div id="letter">
        <Card/>        
      </div>
      
    </div >
  )
}

export default App;
