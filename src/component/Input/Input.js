import React, { Fragment, useState } from "react";
import "./input.css";

const Input = () => {
  const [error,setError] = useState("")
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = ({ target: inputs }) => {
    let update = { ...input };
    update[inputs.name] = inputs.value;
    setInput(update);
   
  };

 // const { firstname, lastname } = input;
  return (
    <Fragment>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="formInput">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              name="firstname"
              autoFocus
              value={input.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="formInput">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              name="lastname"
              autoFocus
              value={input.lastname}
              onChange={handleChange}
            />
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
