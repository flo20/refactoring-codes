import React, { Fragment, useState } from "react";
import "./input.css";

const Input = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
  });

  const handleChange = ({ target: form }) => {
    const newDetails = { ...details };
    const errors = {};

    if (!form.value) errors[form.name] = `${form.name} cannot be empty`;
    else if (form.value.length < 2)
      errors[form.name] = `${form.name} cannot be less than 2`;

    newDetails[form.name] = form.value;
    setDetails(newDetails);
    setError(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!details.firstname) errors.firstname = `firstname cannot be empty`;
    else if (details.firstname.length < 2)
      errors.firstname = `firsname cannot be less than 2`;

    if (!details.lastname) errors.lastname = `lastname cannot be empty`;
    else if (details.lastname.length < 2)
      errors.lastname = `lastname cannot be less than 2`;

    Object.keys(errors).length > 0 ? setError(errors) : handleCreateAccount();
  };

  const handleCreateAccount = () => {
    console.log("registered");
  };

  const { firstname, lastname } = details;
  return (
    <Fragment>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="formInput">
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              value={firstname}
              onChange={handleChange}
            />

            {error.firstname && <p className="error">{error.firstname}</p>}
          </div>

          <div className="formInput">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={lastname}
              onChange={handleChange}
            />

            {error.lastname && <p className="error">{error.lastname}</p>}
          </div>

          <div className="formInput">
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Input;
