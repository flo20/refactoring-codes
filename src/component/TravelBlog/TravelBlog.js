import React, { Fragment } from "react";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhyGlobuzzer from "../WhyGlobuzzer/WhyGlobuzzer";
import Section from "../section/Section";

export default function TravelBlog() {
  return (
    <Fragment>
      <Section id="testimonials">
        <HowItWorks className="wrap_block" />
      </Section>

      <Section id="contact">
        <WhyGlobuzzer className="wrap_block" />
      </Section>
    </Fragment>
  );
}
