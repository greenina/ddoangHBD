import React from "react";
import './Card.css';
import { useState, useEffect } from "react";

const Card = () => {
  // var cardFront=document.getElementsByClassName('cardFront').style.height;
  // var cardInside=document.getElementsByClassName('cardInside').style.height;
  // document.getElementsByClassName('cardFront').style.height=cardInside;
  const password = "1234";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  
  const submitPassword = (e) => {
    // console.log("VAL: ", e.target.value);
    if(input === password){
      setOpen(true);
    }
    else{
      alert("Wrong Password!");
    }
  }

  const enterPassword = (e) => {
    setInput(e.target.value);
  }


  return (
    <div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">엉따(엉덩이따뜻해) 생일축하행</h3>
      {/* <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div> */}
      <div className="emoji">
        <div> 👭 💌 🎉</div>
        <div> 🫖 23 🎂 </div>
        <div> 🥳 👵🏼 💕</div>
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">김다영 이십대 중반 된거 축하해!😜🎉</h3>
      {open?
        <div>
          <p>내가 사랑하는 앙또에게</p>
          <p>
            스물세번째 생일 너무너무 츄카행!! 🎉😻🥳 이제 이십대 중반이래요~~<br/>
            언제 스물셋 된거지 우리 분명 열일곱에 만났자나 그래 안그래 😮<br/>
            앙또 생일 담날 아침까지 내야하는거를 미룸대장 송이놔가 미루고 미루다보니 뿌 앙또 생일 축하가 너모 늦어부랴싸<br/> 
            사죄의 마음을 한가득 담아 이놔쓰 부업 개발짜인만큼 하루 늦은 오늘 초큼 급하게 갑자기 삘받아서 얼레벌레 뚝딱뚝딱 만들어봤오ㅎㅎ<br/>
            근데 너무 늦어진거가타서.. 정렬같은건 아직 하나두 안맞지만 고런대로 엉성해보이는 귀여움이 있으니까 히히<br/>
            그냥 인터랙티브 한.. 이벤트창을 구성했다는 것에 의의를 히히<br/>
            우리가 둘이 봤을 때 사진을 많이 찍지는 않아서..는 아닌거 같지만 지금 얼레벌레 사진을 빠르게 고르다보니까<br/>
            맨날 쓰던 사진들을 재탕하는 느낌이 들 수도 있지만 그거슨 분명히 기분탓이야 호호<br/>
            <br/>
          </p>
        </div>:
        <div>
          <form onSubmit={submitPassword}>
            <input type="text" value={input} onChange={enterPassword} />
            <input type="submit" value="제출"/>
          </form>
        </div>}
      
      {/* <p className="name">앙또 트윈 이놔</p> */}
    </div>
  </div>
  )
}

export default Card;