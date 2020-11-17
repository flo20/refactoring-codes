import React from "react";
import Banner from "./component/Banner/Banner";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import WhyGlobuzzer from "./component/WhyGlobuzzer/WhyGlobuzzer";
import WhoWeAre from "./component/WhoWeAre/WhoWeAre";
//import Input from "./component/Input/Input";

function App() {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <WhyGlobuzzer />
      <WhoWeAre />
      {/* <Input /> */}
    </div>
  );
}

export default App;
