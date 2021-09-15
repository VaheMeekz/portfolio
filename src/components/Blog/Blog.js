import React from "react";
import styles from "./Blog.module.css"
import img from "../../assets/portfolioImages/2.jpg"
import {NavLink} from "react-router-dom";

////nkarner@ pti dnes NavLinkeri bej u taza ejer baces information

const Blog = () =>{
    return(
        <div className={styles.homePageBody}>
            <h1 className={styles.about}>Blog</h1>
            <div className={styles.blogItemsBody}>
                <NavLink to='/news'>
                <div className={styles.blogItems}>
                    <img src={img} className={styles.cardImg}/>
                    <div>
                        <h5>05 Mar 2020 </h5>
                     <h4>   Why I Switched to Sketch For<br/> UI Design</h4>
                    </div>
                </div>
                </NavLink>
                <NavLink to='/news'>
                <div className={styles.blogItems}>
                    <img src={img} className={styles.cardImg}/>
                    <div>
                        <h5>05 Mar 2020 </h5>
                        <h4>   Why I Switched to Sketch For<br/> UI Design</h4>
                    </div>
                </div>
                </NavLink>
            </div>

                <div className={styles.blogItemsBody}>
                    <NavLink to='/news'>
                    <div className={styles.blogItems}>
                        <img src={img} className={styles.cardImg}/>
                        <div>
                            <h5>05 Mar 2020 </h5>
                            <h4>   Why I Switched to Sketch For<br/> UI Design</h4>
                        </div>

                </div>

            </NavLink>
                    <NavLink to='/news'>
                    <div className={styles.blogItems}>
                        <img src={img} className={styles.cardImg}/>
                        <div>
                            <h5>05 Mar 2020 </h5>
                            <h4>   Why I Switched to Sketch For<br/> UI Design</h4>
                        </div>
                    </div>
                    </NavLink>
                </div>
        </div>

    );
}

export default Blog;