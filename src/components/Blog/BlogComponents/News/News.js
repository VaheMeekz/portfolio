import React from "react";
import styles from "./News.module.css"
import img from "../../../../assets/images/blog_post_1.jpg"
import clock from "../../../../assets/images/clock.svg"
import man from "../../../../assets/images/person-fill.svg"
import linkedin from "../../../../assets/images/linkedin.svg";
import fb from "../../../../assets/images/fb.svg";
import twitter from "../../../../assets/images/twitter.svg";

const News = () =>{
    return(
        <div className={styles.homePageBody}>
            <img src={img} className={styles.headerImg}/>
            <div className={styles.newsInformation}>
                <h1>Best Practices for Animated Progress Indicators</h1>
                <p className={styles.newsText}>
                    Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt  ipsum vel nibh <br/>rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros,<br/> iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque <br/>ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor<br/> lorem.
                    Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus<br/> lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor <br/>ac luctus. Praesent placerat id lorem quis lacinia.
                </p>
                <div className={styles.line}></div>
                <div className={styles.manecas}>
                    <p><i>  Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc,   <br/>  a lacinia nibh feugiat ut. In hac habitasse platea dictumst.</i>
                      <br/>  <f className={styles.Jhonson}><i> Larry L. Johnson</i></f> </p>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerInformation}>
                    <img src={clock} />
                </div>
                <p>March 16, 2020 | </p>
                <div className={styles.man}><img src={man}/></div>
                <div className={styles.lmp}><p>LMPixels</p></div>

                <div className={styles.footerSocialIcons}>
                    <div className={styles.footerSocialIconsItems}><a href={"https://www.linkedin.com/"}><img src={linkedin}/></a></div>
                    <div className={styles.footerSocialIconsItems}><a href={"https://www.facebook.com/"}><img src={fb} /></a></div>
                    <div className={styles.footerSocialIconsItems}><a href={"https://twitter.com/?lang=en"}><img src={twitter}/></a></div>
                </div>


            </div>
        </div>
    );
}

export default News;