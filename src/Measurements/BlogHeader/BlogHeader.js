import React, { Fragment } from "react";
import header from "./BlogHeader.module.css";

function BlogHeader({ label }) {
  return (
    <Fragment>
      <header className={header.mainHeader}>{label}</header>
      <div className={header.underline} />
    </Fragment>
  );
}

export default BlogHeader;
