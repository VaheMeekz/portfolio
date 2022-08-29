import React from "react";
import "./Footer.css"
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <div className="footerBox">
            <div className="socialsIcons">
                <div><LinkedInIcon/></div>
                <div><GitHubIcon/></div>
                <div><InstagramIcon/></div>
            </div>
            <div className="infoBox"><GoogleIcon/> example@gmail.com</div>
            <div className="infoBox"><LocalPhoneIcon/> +374-99-999-999</div>
        </div>
    )
}

export default Footer;