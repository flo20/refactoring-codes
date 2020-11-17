import React from "react";
import Banner from "./component/Banner/Banner";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import WhyGlobuzzer from "./component/WhyGlobuzzer/WhyGlobuzzer";
import WhoWeAre from "./component/WhoWeAre/WhoWeAre";
import JourneyContainer from "./component/Journey/JourneyContainer";
import { Footer } from "./component/Footer/Footer";
//import Input from "./component/Input/Input";

function App() {
 
  return (
    <div>
      <Banner />
      <HowItWorks />
      <WhyGlobuzzer />
      <WhoWeAre />
      <JourneyContainer />
      <Footer />
      {/* <Input /> */}
    </div>
  );
}

export default App;
