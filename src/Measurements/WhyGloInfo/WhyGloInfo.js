import React from "react";
import glo from "./WhyGloInfo.module.css";

const WhyGloInfo = ({ icons, topic, text }) => {
  return (
    <div className={glo.wrapper}>
      <img src={icons} alt="why-globuzzer-icon" className={glo.icon} />
      <div className={glo.container}>
        <p className={glo.topic}>{topic}</p>
        <p className={glo.text}>{text}</p>
      </div>
    </div>
  );
};

export default WhyGloInfo;
