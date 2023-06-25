// import React from "react  ";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

import emailjs from "emailjs-com";

import "./Newsletter.scss";

const Newsletter = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evxpuao",
        "template_q4kx5k5",
        e.target,
        "81mfroDNO7-7wWNu5"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">Books Emporium</div>
        <span className="big-text">Sign Up for Latest updates and Offers</span>
        <form className="form" onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email Address" name="user_email" />
          <textarea name="message" rows="4"></textarea>
          <button>Submit</button>
        </form>
        <div className="text">
          Will be used in accordance with our Private Policy
        </div>
        {/* <span className="social-icons">
          <div className="icon">
            <FaLinkedin size={18} />
          </div>
          <div className="icon">
            <FaFacebookF size={18} />
          </div>
          <div className="icon">
            <FaTwitter size={18} />
          </div>
          <div className="icon">
            <FaInstagram size={18} />
          </div>
        </span> */}
      </div>
    </div>
  );
};

export default Newsletter;
