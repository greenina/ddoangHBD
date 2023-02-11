import React from "react";
import './Image.css';
import mem1 from './assets/mem1.png'
import mem2 from './assets/mem2.png'
import mem3 from './assets/mem3.png'


const Images = () => {
  return (
    <div>
      <figure class="wave">
        <img src={mem1} alt="mem1"></img>
        <figcaption>히히</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem2} alt="mem1"></img>
        <figcaption>히히</figcaption>
      </figure>
      <figure class="wave">
        <img src={mem3} alt="mem1"></img>
        <figcaption>히히</figcaption>
      </figure>
    </div>
  )
}

export default Images;