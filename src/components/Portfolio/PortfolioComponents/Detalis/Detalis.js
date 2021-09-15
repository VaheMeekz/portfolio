import React from "react";
import styles from "./Detalis.module.css"
import portFotoOne from "../../../../assets/portfolioImages/1.jpg"
import portFotoTwo from "../../../../assets/portfolioImages/2.jpg"

const Detalis = () => {
    return(

        <div className={styles.allBody}>
            <div className={styles.detalisItems}>
                <img src={portFotoOne} className={styles.portImages}/>
                <div><h4>SoundCloud Audio</h4></div>
            </div>
            <div className={styles.detalisItems}>
                <img src={portFotoTwo} className={styles.portImages}/>
                <div><h4>SoundCloud Audio</h4></div>
            </div>

        </div>


    );
}

export default Detalis;