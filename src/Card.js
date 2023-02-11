import React from "react";
import './Card.css';

const Card = () => {
  return (
    <div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">엉따(엉덩이따뜻해) 생일축하행</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY vodoo!</h3>
      <p>Dear Friend,</p>
      <p>
        Happy birthday!! I hope your day is filled with lots of love and
        laughter! May all of your birthday wishes come true.
      </p>
      <p className="name">Pawan</p>
    </div>
  </div>
  )
}

export default Card;