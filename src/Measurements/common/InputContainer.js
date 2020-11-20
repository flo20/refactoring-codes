import React, { Fragment } from "react";
import "./../../component/Input/input.css";

const InputContainer = ({ value, onChange, name, error, placeholder}) => {

  return (
    <Fragment>
      <div className="formInput">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      
      {error[name] && <div className="error">{error[name]}</div>}
      </div>
    </Fragment>
  );
};

export default InputContainer;
