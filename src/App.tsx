import React from 'react';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navabr from './components/navbar/Navbar';
import Skils from './components/skils/Skils';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div>
      <Navabr/>
      <Header/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Skils/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
