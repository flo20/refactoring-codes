import React, { Fragment } from "react";

const InputContainer = ({value,onChange,name,placeholder}) => {
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
      </div>
    </Fragment>
  );
};

export default InputContainer;
