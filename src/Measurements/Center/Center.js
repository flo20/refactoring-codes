import React from "react";
import center from "./../Center/Center.module.css";

const Center = ({ children }) => {
  return <div className={center.container}>{children}</div>;
};

export default Center;
