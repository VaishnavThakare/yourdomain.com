import React, { useState, useEffect } from 'react';
import './Cards.css';
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import card5 from "./card5.png";
import card6 from "./card6.png";
import card7 from "./card7.png";
import HoverImg from "./HoverImg.PNG";

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [card1, card2, card3, card4, card5, card6, card7, card1, card2, card3, card4]; // Add all images here including duplicates for seamless looping

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCardClick = () => {
    window.open('https://fylehq.com', '_blank'); // Open fylehq.com in a new tab
  };

  return (
    <>
      <div className="passage2">
        <p className="para4">WHAT WE DO</p>
        <p className="para5">SERVICES PROVIDED FOR YOU</p>
        <p className="para6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, fuga aliquid quisquam eius re
        </p>
      </div>
      <div className="carousel">
        <div className="cards" style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              className={`card ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt=""
              onMouseOver={(e) => (e.currentTarget.src = HoverImg)}
              onMouseOut={(e) => (e.currentTarget.src = image)}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
