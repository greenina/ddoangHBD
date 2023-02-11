import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Card from './Card';
import Images from './Image';
import color from './assets/color.png'

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
      <div className='birthcolor'>
      🎨 Birth Color of Feb. 10 is #EA618E <img className="colorimg"src={color}/>, Rose Red/Deep Blush
      </div>
      <div className='canvas'>
        <div ref={canvasRef} />
      </div>

      <div onClick={handleClickScroll} className="downbtn">
        <div>🫖 눌러보시오 👇</div>
      </div>
      <div className="images">
        <Images/>
      </div>
      <div id="letter">
        <Card/>        
      </div>
      <div id="info">
        <div>Copyright © 2023 Inhwa Song. All Rights Reserved. The website was designed by Inhwa Song and built with React.js, p5.js</div>
        <div>This webpage is dedicated to DDOANG 🫖, a Nice Coffee Pot, born on Feb 10, 2001</div>
        Code script can be found <a href="https://github.com/greenina">here</a>
      </div>
    </div >
  )
}

export default App;
