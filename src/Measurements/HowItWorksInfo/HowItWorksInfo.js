import React from "react";
import info from "./HowItWorksInfo.module.css";

const HowItWorksInfo = ({ number, topic, body }) => {
  return (
    <div className={info.wrapper}>
      <div className={info.circle}>{number}</div>
      <div className={info.topicHead}>{topic}</div>
      <div className={info.bodyInfo}>{body}</div>
    </div>
  );
};

export default HowItWorksInfo;
