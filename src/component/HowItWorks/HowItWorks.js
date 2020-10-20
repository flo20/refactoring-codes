import React from "react";
import "./HowItWorks.css";




const HowItWorks = () => {
  return (
    <div className="how_wrapper">
      <div id="how_title">
        <h2 className="sec2_heading">How it works</h2>
        <div className="underline" />
      </div>
      <div className="wrap_2">
        <div className="message">
          <div className="circles">1</div>
          <h4 className="apply">Apply for a topic</h4>
          <p className="apply_instructions">
            Choose a topic for your travel blog or transfer
            <br />
            your existing blog to the Globuzzer platform.
          </p>
        </div>
        <div className="message">
          <div className="circles">2</div>
          <h4 className="apply">Select a plan</h4>
          <p className="apply_instructions">
            Explore the benefits of our Free or Premium
            <br />
            plans and choose the one that best suits you.
          </p>
        </div>
        <br />
        <div className="message">
          <div className="circles">3</div>
          <h4 className="apply">Start to make revenue</h4>
          <p className="apply_instructions">
            Begin creating content! Set up subscription
            <br />
            prices and choose streams make revenue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
