import React from "react";
import styles from "./All.module.css"
import portFotoOne from "../../../../assets/portfolioImages/1.jpg"
import portFotoTwo from "../../../../assets/portfolioImages/2.jpg"
import portFotoTree from "../../../../assets/portfolioImages/3.jpg"

const All = () => {
    return(
        <div>
        <div className={styles.allBody}>
            <div>
                <img src={portFotoOne} className={styles.portImages}/>
                <div><h4>SoundCloud Audio</h4></div>
            </div>
            <div><img src={portFotoTwo} className={styles.portImages}/>
                <div><h4>SoundCloud Audio</h4></div>
            </div>
            <div><img src={portFotoTree} className={styles.portImages}/>
                <div><h4>SoundCloud Audio</h4></div>
            </div>
        </div>
    <div className={styles.allBody}>
        <div>
            <img src={portFotoOne} className={styles.portImages}/>
            <div><h4>SoundCloud Audio</h4></div>
        </div>
        <div><img src={portFotoTwo} className={styles.portImages}/>
            <div><h4>SoundCloud Audio</h4></div>
        </div>
        <div><img src={portFotoTree} className={styles.portImages}/>
            <div><h4>SoundCloud Audio</h4></div>
        </div>
    </div>
        </div>

    );
}

export default All;