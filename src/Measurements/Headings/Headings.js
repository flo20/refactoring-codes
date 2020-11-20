import React from "react";
import heading from "./Headings.module.css";

const Headings = ({ label }) => {
  return (
    <header className={heading.heading}>
      {label}
      <div className={heading.underline} />
    </header >
  );
};

export default Headings;
