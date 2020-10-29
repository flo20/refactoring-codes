import React from "react";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import Menu from "./component/Menu/Menu";
import MainBody from "./Measurements/MainBody/MainBody";

function App() {
  return (
    <div>
      {/* <MainBody> */}
        <Menu />
        <HowItWorks />
        <HowItWorks />
        <HowItWorks />
        <HowItWorks />
        <HowItWorks />
      {/* </MainBody> */}
    </div>
  );
}

export default App;
