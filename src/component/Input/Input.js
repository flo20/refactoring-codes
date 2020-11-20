import React, { Fragment, useState } from "react";
import InputContainer from "../../Measurements/common/InputContainer";
import "./input.css";

const Input = () => {
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
  });

  const validate = () => {
    const errors = {};
    if (input.firstname.trim() === "")
      errors.firstname = "Firstname is required";
    if (input.lastname.trim() === "") errors.lastname = "Lastname is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(error);
    setError({ errors });
    if (errors) return;

    console.log("submitted");
  };

  const handleChange = ({ target: inputs }) => {
    let update = { ...input };
    update[inputs.name] = inputs.value;
    setInput(update);
  };

  const { firstname, lastname } = input;
  return (
    <Fragment>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <InputContainer
            type="text"
            placeholder="Enter name"
            name="firstname"
            value={firstname}
            onChange={handleChange}
          />

          <InputContainer
            type="text"
            placeholder="Enter name"
            name="lastname"
            value={lastname}
            onChange={handleChange}
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
