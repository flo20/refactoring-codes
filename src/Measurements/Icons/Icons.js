import React from 'react';
import { IconContext } from "react-icons";

const Icons = ({label, myClass = null}) => {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: "middle" },
        className: myClass,
      }}
    >
      {label}
    </IconContext.Provider>
  );
};

export default Icons;
