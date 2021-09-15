import React from "react";
import styles from "./Portfolio.module.css"
import {NavLink, Route} from "react-router-dom";
import All from "./PortfolioComponents/All/All";
import Detalis from "./PortfolioComponents/Detalis/Detalis";


const Portfolio = () =>{
    const routes = [
        {path: '/portfolio', Component: All},
        {path: '/portfolio/all', Component: All},
        {path: '/portfolio/detalis', Component:Detalis},
        {path: '/portfolio/sound/', Component:Detalis},
        {path: '/portfolio/vimeo', Component:All},
        {path: '/portfolio/videos', Component:Detalis},
    ]
    return(
        <div className={styles.homePageBody}>
            <h1 className={styles.about}>Portfolio</h1>
            <div className={styles.menuBody}>
            <ul>
                <li><NavLink className={styles.active} to="/">All</NavLink></li>
                <li><NavLink to="/portfolio/detalis">Detailed</NavLink></li>
                <li><NavLink to="/portfolio/sound">SoundCloud</NavLink></li>
                <li><NavLink to="/portfolio/vimeo">Vimeo Videos</NavLink></li>
                <li><NavLink to="/portfolio/videos">YouTube Videos</NavLink></li>
            </ul>
            </div>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
            ))}
            {/*<Route path='/portfolio/all' render={() => <All/>}/>*/}
            {/*<Route path='/potfolio/sound' render={() => <All/>}/>*/}
            {/*<Route path='/portfolio/detalis' render={() => <Detalis/>}/>*/}
            {/*<Route path='/portfolio/sound/' render={() => <Detalis/>}/>*/}
            {/*<Route path='/portfolio/vimeo' render={() => <Detalis/>}/>*/}
            {/*<Route path='/portfolio/videos' render={() => <Detalis/>}/>*/}
        </div>
    );
}

export default Portfolio;