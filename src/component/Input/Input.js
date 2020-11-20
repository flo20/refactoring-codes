import React, { Fragment, useState } from "react";
import InputContainer from "../../Measurements/common/InputContainer";
import "./input.css";

const Input = () => {
  const [errors, setError] = useState({});
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
  });

  const validate = () => {
    const errors = {};
    if (!input.firstname)
      errors.firstname = "Firstname is required";
    if (!input.lastname) errors.lastname = "Lastname is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (errors) return setError(errors);

    console.log("submitted");
  };

  const handleChange = ({ target: inputs }) => {
    let update = { ...input };
    update[inputs.name] = inputs.value;
    setInput(update);
  };
  console.log(errors);

  return (
    <Fragment>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <InputContainer
            type="text"
            placeholder="Enter name"
            name="firstname"
            value={input.firstname}
            onChange={handleChange}
            error={errors}
          />
          <InputContainer
            type="text"
            placeholder="Enter name"
            name="lastname"
            value={input.lastname}
            onChange={handleChange}
            error={errors}
          />

          <div className="formInput">
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Input;
