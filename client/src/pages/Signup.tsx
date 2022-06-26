import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await addUser({ variables: { ...formState } });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }

    setFormState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <section>
      <div className="form-card">
        <h4>Sign Up</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="FIRST NAME"
            name="firstName"
            type="text"
            value={formState.firstName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="LAST NAME"
            name="lastName"
            type="text"
            value={formState.lastName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="USER NAME"
            name="userName"
            type="text"
            value={formState.userName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="EMAIL"
            name="email"
            type="text"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="PASSWORD"
            name="password"
            type="text"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button className="form-back-btn" onClick={() => navigate("/")}>
          &larr; BACK
        </button>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </section>
  );
};

export default Signup;
