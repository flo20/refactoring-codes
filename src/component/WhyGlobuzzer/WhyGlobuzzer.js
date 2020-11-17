import React from "react";
import Headings from "../../Measurements/Headings/Headings";
import WhyGloData from "../../Measurements/WhyGloInfo/WhyGloData";
import WhyGloInfo from "../../Measurements/WhyGloInfo/WhyGloInfo";
import Section from "./../../Measurements/Section/Section";
import why from "./WhyGlobuzzer.module.css";

const WhyGlobuzzer = () => {
  return (
    <Section>
      <div className={why.wrapper}>
        <Headings label="Why Globuzzer" />
        <p className={why.subheading}>
          Because we are a global platform built by a community of worldwide
          expats, locals, and travelers who seek to share their experiences,
          discover new topics, and connect with others.
        </p>
        <hr className={why.underline} />
      </div>

      <div className={why.container}>
        {WhyGloData.map(({ icons, topic, text, index }) => (
          <WhyGloInfo key={index} icons={icons} topic={topic} text={text} />
        ))}
      </div>
    </Section>
  );
};

export default WhyGlobuzzer;
