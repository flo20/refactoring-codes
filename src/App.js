import React from 'react';
import './App.css';


import Navbar from "./component/Navbar/Navbar";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import WhyGlobuzzer from "./component/WhyGlobuzzer/WhyGlobuzzer";
function App() {
  return (
    <div>
      <Navbar />
      <section id="testimonials">
        <HowItWorks className="wrap_block" />
      </section>
      <section id="contact">
        <WhyGlobuzzer className="wrap_block" />
      </section>
    </div>
  );
}

export default App;
