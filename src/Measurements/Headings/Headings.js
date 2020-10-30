import React from 'react';
import heading from "./Headings.module.css";

const Headings = ({label}) => {
    return (
      <div>
        <h1 className={heading.heading}>{label}</h1>
        <div className={heading.underline} />
      </div>
    );
}

export default Headings;