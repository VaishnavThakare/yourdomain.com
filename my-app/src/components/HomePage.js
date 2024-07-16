import React, { useState } from 'react';
import './Homepage.css';
import homepageImg from "./homepageImg.png";
import ContactForm from './TalkToUsForm'; 

function HomePage() {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  return (
    <>
      <div className='Main'>
        <div className="passage1">
          <p className="para1">AWARD WINNING</p>
          <p className="para2">DIGITAL MARKETING AGENCY</p>
          <p className="para3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequuntur itaque error rem
            modi tempora aliquam harum, explicabo a voluptas pariatur maiores nesciunt mollitia fugiat.
          </p>
          <button className="btn" onClick={toggleContactForm}>Contact Us</button>
        </div>
        <div className="image1">
          <img src={homepageImg} alt="Homepage" />
        </div>
      </div>
      {isContactFormVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={toggleContactForm}>X</button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
