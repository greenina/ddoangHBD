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
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className="main">
      <div className='birthcolor'>
      🎨 Birth Color of Feb. 10 is #EA618E <img className="colorimg"src={color}/>, Rose Red/Deep Blush
      </div>
      <div className='noti'>아래 분홍색 여백에 글이 뜰 것이니, 10초 내외로 인내심을 가지고 기다려주세요 :)</div>
      <div className='noti'>이후, 스크롤을 내려 버튼을 눌러보세요! (모바일📱보다는 PC 🖥 환경에서 보시길 권장합니다)</div>
      
      <div class="bar">
        <span class="bar_content">
        엉따는 "엉덩이는 따뜻하게"의 줄임말으로, 동의어로는 "김다영", "주전자🫖", "따엉", 등이 있습니다.
        본 웹사이트는, 개발자가 부부부업정도 되는 엉따의 진실된 친구 이놔쏭이 갑자기 삘받아 엉따의 이십대 중반👵🏻 진입 축하를 위해 갑자기 개발해벌인 누추한 웹사이트🌐입니다.
        궁금 안하겠지만 코드👩🏻‍💻는 가장 하단에서 확인 가능합니다. 키킼😝
        
        </span>
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
      <div className="info">
        <div>Copyright © 2023 이놔쏭. All Rights Reserved. The website was designed by 이놔쏭 and built with <a href="https://react.org">React.js</a>, <a href="https://p5js.org/ko/">p5.js</a></div>
        <div>This webpage is dedicated to <b>DDOANG(앙또킴) 🫖</b>, a Nice Coffee Pot, born on Feb 10, 2001</div>
        Code script can be found <a href="https://github.com/greenina/ddoangHBD">here</a>
      </div>
    </div >
  )
}

export default App;
