import React, { Fragment, useState } from "react";

const Input = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = () => {
    setDetails({
      ...details,
    });
  };
  console.log(details);
  return (
    <Fragment>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          value={details.firstName}
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          value={details.lastName}
          onChange={handleChange}
        />
      </form>
    </Fragment>
  );
};

export default Input;