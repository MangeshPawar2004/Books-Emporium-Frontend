import React from "react";

const contactComponent = () => {
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />

        <label htmlFor="">Email</label>
        <input type="email" name="user_email" />

        <label htmlFor="">Message</label>
        <textarea name="message" rows="4"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default contactComponent;
