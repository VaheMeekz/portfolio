import React from "react";
import styles from "./AbouteME.module.css"
import icon from "../../assets/images/icon.svg"

const AboutMe = () => {
    return (
        <div className={styles.homePageBody}>
            <h1 className={styles.about}>About Me</h1>
            <div className={styles.informationBody}>
                <div>
                    <p>Proin volutpat mauris ac pellentesque pharetra.<br/> Suspendisse congue elit vel odio suscipit,
                        sit amet <br/>
                        tempor nisl imperdiet. Quisque ex justo, faucibus ut <br/> mi in, condimentum finibus dolor.
                        Aliquam vitae <br/>
                        hendrerit dolor, eget imperdiet mauris. Maecenas <br/> et ante id ipsum condimentum dictum et
                        vel <br/>
                        massa. Ut in imperdiet dolor, vel consectetur dui.
                    </p>
                </div>
                <div>
                    <p>
                        <d className={styles.information}>Age</d>32<br/>
                        <d className={styles.information}>Residance</d>USA<br/>
                        <d className={styles.information}>Addres</d>88 Some Street, Some <br/>
                        <d className={styles.information}>e-mail</d>email@example.com<br/>
                        <d className={styles.information}>Phone</d>+0123 123 456 789<br/>
                    </p>
                </div>
            </div>

            <h1 className={styles.about}>What I Do</h1>
            <div className={styles.whatIdo}>
                <div>
                    <img src={icon}/>
                    <h2>Ecommerce</h2>
                    <p>Pellentesque pellentesque, ipsum sit amet<br/>
                        auctor accumsan, odio tortor bibendum<br/>
                        massa, sit amet ultricies ex lectus scelerisque<br/>
                        nibh. Ut non sodales.</p>
                </div>
                <div><img src={icon}/>
                    <h2>Copywriting</h2>
                    <p>Pellentesque pellentesque, ipsum sit amet<br/>
                        auctor accumsan, odio tortor bibendum<br/>
                        massa, sit amet ultricies ex lectus scelerisque<br/>
                        nibh. Ut non sodales.</p></div>
            </div>
            <div className={styles.whatIdo}>
                <div><img src={icon}/>
                    <h2>Web Design</h2>
                    <p>Pellentesque pellentesque, ipsum sit amet<br/>
                        auctor accumsan, odio tortor bibendum<br/>
                        massa, sit amet ultricies ex lectus scelerisque<br/>
                        nibh. Ut non sodales.</p></div>
                <div><img src={icon}/>
                    <h2>Management</h2>
                    <p>Pellentesque pellentesque, ipsum sit amet<br/>
                        auctor accumsan, odio tortor bibendum<br/>
                        massa, sit amet ultricies ex lectus scelerisque<br/>
                        nibh. Ut non sodales.</p></div>
            </div>
        </div>
    );
}

export default AboutMe;