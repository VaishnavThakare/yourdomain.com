import React from 'react';
import cardLogo from './cardLogo.png'; 
import arrow from "./arrow.png"
import "./HoverCard.css"

const HoverCard = () => {
  return (
    <div className="hoverCard">
      <img src={cardLogo} alt="Web Development Logo" className="logo" />
      <p className='heading'>WEB DEVELOPMENT</p>
      <p className='para'>Morbi sed lacus nec risus finibus feugiat et fntesque</p>
      <button className="read-more">
        READ MORE 
        <img className='arrow' src={arrow} alt="" />
      </button>
    </div>
  );
};

export default HoverCard;
