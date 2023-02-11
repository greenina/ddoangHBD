import React from "react";
import './Image.css';
import mem1 from './assets/mem1.png'
import mem2 from './assets/mem2.png'
import mem3 from './assets/mem3.png'
import mem4 from './assets/mem4.png'
import mem5 from './assets/mem5.png'
import mem6 from './assets/mem6.png'
import mem7 from './assets/mem7.png'
import mem8 from './assets/mem8.jpeg'




const Images = () => {
  return (
    <div>
      <div>
      <figure class="wave">
        <img src={mem1} alt="mem1"></img>
        <figcaption>멀끄댕~</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem2} alt="mem1"></img>
        <figcaption>예쁘다영</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem3} alt="mem1"></img>
        <figcaption>오늘만큼은 다영이 키가 더 큽니다</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem4} alt="mem1"></img>
        <figcaption>김다영 손꼭잡고 피어싱</figcaption>
      </figure>

      </div>
      <div>
      <figure class="wave">
        <img src={mem5} alt="mem1"></img>
        <figcaption>상큼트윈</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem6} alt="mem1"></img>
        <figcaption>기차타구 여수!</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem7} alt="mem1"></img>
        <figcaption>대체 어디 엘리베이터?</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem8} alt="mem1"></img>
        <figcaption>아마도 한라맥쭈?</figcaption>
      </figure>
      </div>
      <br/>
    </div>
  )
}

export default Images;