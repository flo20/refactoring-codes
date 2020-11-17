import React from "react";
import journey from "./Journey.module.css";
import next from "./../../assets/next.svg";


const Journey = ({ img, text, url, name }) => {
  return (
    <div className={journey.wrapper}>
      <img src={img} alt="journey-img" className={journey.img} />
      <div className={journey.content}>
        <p className={journey.name}>{name}</p>
        <p className={journey.text}>{text}</p>
      </div>

      <a href={url} className={journey.button}>
        <p className={journey.btnText}>View section </p>
        <img src={next} alt="next" className={journey.icon} />
      </a>
    </div>
  );
};

export default Journey;
