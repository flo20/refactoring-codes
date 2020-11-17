import React, { Fragment } from "react";
import info from "./HowItWorksInfo.module.css";

const HowItWorksInfo = ({ number, topic, body }) => {
  return (
    <Fragment>
      <div className={info.wrapper}>
        <div className={info.circle}>{number}</div>
        <div className={info.topicHead}>{topic}</div>
        <div className={info.bodyInfo}>{body}</div>
      </div>
    </Fragment>
  );
};

export default HowItWorksInfo;
