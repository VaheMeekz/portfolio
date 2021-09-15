import React from "react";
import styles from "./Home.module.css"

const Home = () =>{
    return(
        <div className={styles.homePageBody}>
           <div className={styles.alex}>
               <h1>ALEX SMITH</h1>
               <h3 className={styles.inform}>WEB DESIGNER <br/> WEB DEVELOPER</h3>
           </div>
        </div>
    );
}

export default Home;