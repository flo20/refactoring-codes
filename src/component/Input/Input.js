import React, { Fragment, useState } from "react";
import "./input.css";

const Input = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
  });


  const handleChange = ({input}) => {
    const data = { ...details }
    data = input.target.value
    setDetails({
      details: data
    });
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
