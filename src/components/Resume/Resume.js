import React from "react";
import styles from "./Resume.module.css"

const Resume = () => {
    return (
        <div className={styles.homePageBody}>
            <h1 className={styles.resume}>About Me</h1>
            <div className={styles.resumeBody}>
                <div>
                    <p>Education</p>
                    <div className={styles.educationBody}>
                        <div className={styles.stepper}></div>
                        <div className={styles.stepperCircleOne}></div>
                        <div className={styles.stepperInformation}>
                            <p>
                                <y>Frontend Development</y> <br/>
                                Maecenas finibus nec sem ut<br/>
                                imperdiet. Ut tincidunt est ac dolor <br/>
                                aliquam sodales. Phasellus sed <br/>
                                mauris hendrerit, laoreet sem in, <br/>
                                lobortis ante.
                            </p>
                        </div>
                        <div>
                        <div className={styles.CircleSecond}></div>
                        <div className={styles.stepperInformationTwo}>
                            <p>
                                <y>Frontend Development</y> <br/>
                                Maecenas finibus nec sem ut<br/>
                                imperdiet. Ut tincidunt est ac dolor <br/>
                                aliquam sodales. Phasellus sed <br/>
                                mauris hendrerit, laoreet sem in, <br/>
                                lobortis ante.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <j><p>Design <d className={styles.skiles}>Skills</d></p></j>

                    <div className={styles.design}>
                        <k>Web Design 95%</k>
                        <div className={styles.webdesignBody}>
                            <div className={styles.webdesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>Print Design 65%</k>
                        <div className={styles.printdesignBody}>
                            <div className={styles.printdesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>Logo  Design 80%</k>
                        <div className={styles.logodesignBody}>
                            <div className={styles.logodesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>Graphic   Design 90%</k>
                        <div className={styles.graphicdesignBody}>
                            <div className={styles.graphicdesign}></div>
                        </div>
                    </div>
                    <j> <p>Coding  <d className={styles.skiles}>Skills</d></p></j>

                    <div className={styles.design}>
                        <k>JavaScript 95%</k>
                        <div className={styles.webdesignBody}>
                            <div className={styles.webdesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>PHP 65%</k>
                        <div className={styles.printdesignBody}>
                            <div className={styles.printdesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>HTML/CSS 80%</k>
                        <div className={styles.logodesignBody}>
                            <div className={styles.logodesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>Smarty/Twig 90%</k>
                        <div className={styles.graphicdesignBody}>
                            <div className={styles.graphicdesign}></div>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <k>Perl 90%</k>
                        <div className={styles.graphicdesignBody}>
                            <div className={styles.graphicdesign}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;