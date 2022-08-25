import React from "react";
import "./ContactUs.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const ContactUs = () => {
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
            <h1>Network</h1>
            <p>You Can Find Me</p>
            <div className="socialsIcons">
                <div><LinkedInIcon/></div>
                <div><GitHubIcon/></div>
                <div><InstagramIcon/></div>
            </div>
            <div><GoogleIcon/> example@gmail.com</div>
            <div><LocalPhoneIcon/> +374-99-999-999</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
