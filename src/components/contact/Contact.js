import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left23"></div>
      <div className="right23">
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
