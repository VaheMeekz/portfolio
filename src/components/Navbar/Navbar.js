import React, {useEffect, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import styles from "./Navbar.module.css"
import house from "../../assets/images/navbarSVGs/house.svg"
import persone from "../../assets/images/navbarSVGs/person.svg"
import book from "../../assets/images/navbarSVGs/book.svg"
import envelope from "../../assets/images/navbarSVGs/envelope.svg"
import portfolio from "../../assets/images/navbarSVGs/bag-check.svg"
import pen from "../../assets/images/navbarSVGs/pen.svg"
import right from "../../assets/images/navbarSVGs/arrow-right.svg"
import left from "../../assets/images/navbarSVGs/arrow-left.svg"
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import News from "../Blog/BlogComponents/News/News";



const Navbar = () => {
    const state= ['/','/aboutMe', '/resume','/portfolio','/blog','/contact'];

    const routes = [
        {path: state[0], Component: Home,name:'Home',img: <img src={house}/>,data:"Home",className:styles.home},
        {path: state[1], Component:AboutMe,name:'AboutMe',img: <img src={persone}/>,data:'AboutMe',className:styles.about},
        {path: state[2], Component:Resume,name:'Resume',img: <img src={pen}/>,data:'Resume',className:styles.resume},
        {path: state[3], Component:Portfolio,name:'Portfolio',img: <img src={portfolio}/>,data:'Portfoliio',className:styles.portfoliio},
        {path: state[4], Component:Blog,name:'Blog',img: <img src={book}/>,data:'Blog',className:styles.blog},
        {path: state[5], Component:Contact,name:'Contact',img: <img src={envelope}/>,data:'Contact',className:styles.contact},
        {path: '/news', Component:News,name:'News'}
    ]

    return(
        <div className={styles.navbar}>
            <div className={styles.navbarItems}>

                {routes.map(({name,path,img,data,className})=> {
                    return (
                        <div  className={className}  data-title={data}>
                            <NavLink to={path} exact>
                                {img}
                                </NavLink>
                        </div>
                    )
                })}
            </div>
            <div className={styles.navbarArrows}>
                <div>
                    <button onClick={()=>{
                        for (let count=0; count<5; count++){
                            if ( count === 0 ){
                                <NavLink to={state[0]}/>
                            }
                            else if(count===1){
                                <Redirect to={state[1]}/>
                            }
                            else if(count===2){
                                <Redirect to={state[2]}/>
                            }
                            else if(count===3){
                                <Redirect to={state[3]}/>
                            }
                            else if(count===4){
                                <Redirect to={state[4]}/>
                            }
                            else if (count===5){
                                <Redirect to={state[5]}/>
                            }
                        }
                    }}><img src={right}/></button>
                </div>
                <div><a><img src={left}/></a></div>
            </div>
        </div>
    );
}

export default Navbar