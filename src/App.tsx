import React from 'react';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navabr from './components/navbar/Navbar';
// import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navabr/>
      <Header/>
      <About/>
      {/* <Portfolio/> */}
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
