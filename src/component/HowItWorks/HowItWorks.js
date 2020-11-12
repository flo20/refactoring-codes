import React, { Fragment } from "react";
import Grid from "../../Measurements/Grid/Grid";
import Headings from "../../Measurements/Headings/Headings";
import HowItWorksInfo from "../../Measurements/HowItWorksInfo/HowItWorksInfo";

const HowItWorks = () => {
  return (
    <Fragment>
      <Headings label="How It Works" />
      <Grid>
        <HowItWorksInfo
          number={1}
          topic="Apply for a topic"
          body="Choose a topic for your travel blog or transfer your existing blog to the Globuzzer platform."
        />
        <HowItWorksInfo
          number={2}
          topic="Select a plan"
          body="Explore the benefits of our Free or Premium plans and choose the one that best suits you."
        />
        <HowItWorksInfo
          number={3}
          topic="Start to make revenue"
          body="Begin creating content! Set up subscription prices and choose
              streams to make revenue"
        />
      </Grid>
    </Fragment>
  );
};

export default HowItWorks;
