import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Card from './Card';
import Images from './Image';
import color from './assets/color.png'
// import Bar from './Bar';

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
      // π Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className="main">
      <div className='birthcolor'>
      π¨ Birth Color of Feb. 10 is #EA618E <img className="colorimg"src={color}/>, Rose Red/Deep Blush
      </div>
      <div className='noti'>μλ λΆνμ μ¬λ°±μ κΈμ΄ λ° κ²μ΄λ, 10μ΄ λ΄μΈλ‘ μΈλ΄μ¬μ κ°μ§κ³  κΈ°λ€λ €μ£ΌμΈμ :)</div>
      <div className='noti'>μ΄ν, μ€ν¬λ‘€μ λ΄λ € λ²νΌμ λλ¬λ³΄μΈμ! (λͺ¨λ°μΌπ±λ³΄λ€λ PC π₯ νκ²½μμ λ³΄μκΈΈ κΆμ₯ν©λλ€)</div>
      
      <div class="bar">
        <span class="bar_content">
        μλ°λ "μλ©μ΄λ λ°λ»νκ²"μ μ€μλ§μΌλ‘, λμμ΄λ‘λ "κΉλ€μ", "μ£Όμ μπ«", "λ°μ", λ±μ΄ μμ΅λλ€.
        λ³Έ μΉμ¬μ΄νΈλ, κ°λ°μκ° λΆλΆλΆμμ λ λλ μλ°μ μ§μ€λ μΉκ΅¬ μ΄λμ­μ΄ κ°μκΈ° μλ°μ μλ°μ μ΄μ­λ μ€λ°π΅π» μ§μ μΆνλ₯Ό μν΄ κ°μκΈ° κ°λ°ν΄λ²μΈ λμΆν μΉμ¬μ΄νΈπμλλ€.
        κΆκΈ μνκ² μ§λ§ μ½λπ©π»βπ»λ κ°μ₯ νλ¨μμ νμΈ κ°λ₯ν©λλ€. ν€νΌπ
        
        </span>
      </div>
      <div className='canvas'>
        <div ref={canvasRef} />
      </div>

      <div onClick={handleClickScroll} className="downbtn">
        <div>π« λλ¬λ³΄μμ€ π</div>
      </div>
      <div className="images">
        <Images/>
      </div>
      <div id="letter">
        <Card/>        
      </div>
      <div className="info">
        <div>Copyright Β© 2023 μ΄λμ­. All Rights Reserved. The website was designed by μ΄λμ­ and built with <a href="https://react.org">React.js</a>, <a href="https://p5js.org/ko/">p5.js</a></div>
        <div>This webpage is dedicated to <b>DDOANG(μλν΄) π«</b>, a Nice Coffee Pot, born on Feb 10, 2001</div>
        Code script can be found <a href="https://github.com/greenina/ddoangHBD">here</a>
      </div>
    </div >
  )
}

export default App;
