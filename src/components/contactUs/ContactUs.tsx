import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {

  const [firstName,setFirstName] = useState("")
  
  return (
    <div className="contactBox">
      <div className="titleBox">
        <h1>Contact With Me</h1>
      </div>
      <div className="contentBox">
        <div className="container">
          <form className="form">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="socialBox">
           
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
