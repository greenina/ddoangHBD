import React from "react";
import './Card.css';
import { useState, useEffect } from "react";

const Card = () => {
  // var cardFront=document.getElementsByClassName('cardFront').style.height;
  // var cardInside=document.getElementsByClassName('cardInside').style.height;
  // document.getElementsByClassName('cardFront').style.height=cardInside;
  const password = process.env.REACT_APP_PWD;
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
      <h3 className="happy">🥳 엉따따 생일축하행 🥳</h3>
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
        <div className="letter-content">
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
            시간이 지나고 나도 변하고 세상도 변하고 진로도 어렵고 뭐하나 확실한게 없는 이 불확실성 속에서 <br/>
            상호간 믿음이 바탕이 되는, 변하지 않는 관계가 주는 아늑함과 안정감은 너무 소듕한 것 가타 <br/>
            나에겐 고런 사람이 너이고!😻 아쥬 고맙고 소듕해! <br/>
            우리 자주 보지는 못하지만, 앞으로도 더 자주 보기 어려워질 수 있을지도 모르지만, <br/>
            힘들거나 뭐라도 잡을 곳이 필요할 때, 시선 신경쓰지 않고 마구 자랑하고 싶은 일이 있을 때, <br/>
            찾아주길 바라융~~~ 😜 🥰
            <br/>
            삿뽀로 ❄️ 재미지게 안다치게 맛있는거 왕창 먹구 놀다 오구 다시 한번 생일축하해!! <br/>
            지금 우리 고작 20대 중반이지만!! 인생의 중반이 되어서도!!ㅋㅋ(까마득) 언제나 앙또 마음속에 든든한 칭구칭긔가 되게따!
            <br/>
            <br/>
            다영 생일 하루 지난 23년도 2월 11일,<br/>
            이놔가!
          </p>
        </div>:
        <div className="pwdform">
          <div>암호 입력 시 편지 내용을 확인할 수 있습니다.</div>
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