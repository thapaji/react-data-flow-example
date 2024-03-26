import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ getNewUserName }) => {
  const initialState = "";
  const [name, setName] = useState(initialState);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name != "") {
      getNewUserName(name);
    }
    setName(initialState);
  };
  return (
    <div>
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input value={name} type="text" placeholder="Enter Username" onChange={handleOnChange} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
