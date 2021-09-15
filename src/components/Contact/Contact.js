import React from "react";
import styles  from "./Contact.module.css"
import location from "../../assets/images/contact/location.svg"
import phone from "../../assets/images/contact/telephone.svg"
import mail from "../../assets/images/contact/mail.svg"
import check from "../../assets/images/contact/check.svg"
import back from "../../assets/images/blog_post_1.jpg"

const Contact = () => {
    return(
        <div className={styles.homePageBody}>
            <h1 className={styles.about}>Contact</h1>
                <div className={styles.contactBody}>
                    <div className={styles.contactInformation}>
                        <div className={styles.contactInformationItem}>
                            <img src={location} className={styles.contactImage}/>
                            <p className={styles.contactItemText}>San Fransico</p>
                        </div>
                        <div className={styles.contactInformationItem}>
                            <img src={phone}  className={styles.contactImage}/>
                            <p className={styles.contactItemText}>415-832-2000</p>
                        </div>
                        <div className={styles.contactInformationItem}>
                            <img src={mail} className={styles.contactImage}/>
                            <p className={styles.contactItemTextMail}>alex@example.com</p>
                        </div>
                        <div className={styles.contactInformationItem}>
                            <img src={check} className={styles.contactImage}/>
                            <p className={styles.contactItemText}>Freelance <br/> Available</p>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                            <img src={back} className={styles.backImg}/>
                        <h2>Can I Help You?</h2>
                        <form className={styles.formBody}>
                            <div>
                                <input onChange={(e)=>console.log(e.target.value)} placeholder={"Full Name"} type="text" className={styles.inputs}/><br/>
                                <input onChange={(e)=>console.log(e.target.value)}  placeholder={"Email Address"} type="mail" className={styles.inputs}/><br/>
                                <input onChange={(e)=>console.log(e.target.value)}  placeholder={"Subject"} type="text" className={styles.inputs}/><br/>
                            </div>
                            <div>
                                <input placeholder={"message"} type="text" name={"message"} className={styles.message}/>
                            </div>
                        </form>
                        <button className={styles.send}>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
    );
}

export default Contact;