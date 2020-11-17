import React from "react";
import section from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={section.background}>{children}</div>;
};

export default Section;
