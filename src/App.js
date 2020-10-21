import React from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
//import Section from "./component/Section/Section";


//import Navbar from "./component/Navbar/Navbar";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import NavbarR from './component/Navbar/NavbarR';
import WhyGlobuzzer from "./component/WhyGlobuzzer/WhyGlobuzzer";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarR/>
      <section id="testimonials">
        <HowItWorks/>
      </section>
      <section id="contact">
        <WhyGlobuzzer/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
