import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div data-aos="flip-up" className="contact" id="contact">
      <div data-aos="fade-up-right" className="left23"></div>
      <div data-aos="fade-up-left" className="right23">
        <h2 data-aos="flip-left">Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input data-aos="fade-down-left" type="text" placeholder="Email" />
          <textarea data-aos="fade-down-right" placeholder="Message"></textarea>
          <button data-aos="zoom-in" type="submit">
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
