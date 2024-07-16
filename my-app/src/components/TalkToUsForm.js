import React, { useState } from "react";
import axios from "axios";
import "./TalkToUsForm.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      firstName,
      lastName,
      isAgreed,
    };

    try {
      const response = await axios.post("https://getform.io/f/bpjmnolb", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Form submitted successfully");
        setEmail("");
        setFirstName("");
        setLastName("");
        setIsAgreed(false);
      } else {
        console.error("Error submitting form", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <div className="form-container">
        <h2>Talk to us</h2>
        <div className="input-group">
          <label htmlFor="email">Work email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="firstName">First name*</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last name*</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="agree"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <label htmlFor="agree">
            I agree to Fyle's terms and conditions, and provide
            consent to send me communication.
          </label>
        </div>
        <button type="submit" className="contact-button">
          Contact Us
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
