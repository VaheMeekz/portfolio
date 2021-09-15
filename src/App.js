import './App.css';
import avatar from './assets/images/avatar.jpg'
import linkedin from './assets/images/linkedin.svg'
import fb from './assets/images/fb.svg'
import twitter from './assets/images/twitter.svg'
import Home from "./components/Home/Home";
import { Route} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import CV from "./assets/cv/Resume.pdf"
import News from "./components/Blog/BlogComponents/News/News";
import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group'

function App() {



    const routesOne = [
        {path: '/', Component: Home,name:'Home'},
        {path: '/home', Component: Home,name:'Home'},
        {path: '/resume', Component:Resume,name:'Resume'},
        {path: '/blog', Component:Blog,name:'Blog'},
        {path: '/news', Component:News,name:'News'}
    ]

    const routesTwo = [
        {path: '/aboutMe', Component:AboutMe,name:'AboutMe'},
        {path: '/portfolio', Component:Portfolio,name:'Portfolio'},
        {path: '/contact', Component:Contact,name:'Contact'}
    ]
    return (
        <div className="App">
            <div className={"content"}>
                <div className={"staticInformation"}>
                    <img src={avatar} className={"avatarImg"}/> <br/>
                    <h1>Alex Smith</h1><br/>
                    <h3>Web Designer</h3>
                    <div className={"socilalIconsBody"}>
                        <div><a href={"https://www.linkedin.com/"}><img src={linkedin} className={"socialIcons"}/></a></div>
                        <div><a href={"https://www.facebook.com/"}><img src={fb} className={"socialIcons"}/></a></div>
                        <div><a href={"https://twitter.com/?lang=en"}><img src={twitter} className={"socialIcons"}/></a><br/>
                        </div>
                    </div>
                    <div className={"btnBody"}>
                        <button className={"btn"}><a href={CV} download="Resume.pdf" className={"downloadLink"}> Download CV </a></button>
                    </div>
                </div>
                <container className={"container"}>

                    {routesOne.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                               <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                                >
                                <div className="page">
                                <Component />
                                </div>
                                </CSSTransition>
                            )}
                        </Route> ))}
                    {routesTwo.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="pageTwo"
                                    unmountOnExit
                                >
                                    <div className="pageTwo">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route> ))}
                </container>
            </div>
            <Navbar/>
        </div>
    );
}

export default App;
