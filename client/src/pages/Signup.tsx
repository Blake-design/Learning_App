import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "./form.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
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
      name: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="page-container">
      <div className="form-card">
        <h3>Sign Up</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="FULL NAME"
            name="name"
            type="text"
            value={formState.name}
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
        {!error ? (
          <p className="error-placeholder">place holder error message</p>
        ) : (
          <p className="error">{error.message}</p>
        )}
        <button className="form-back-btn" onClick={() => navigate("/")}>
          &larr; BACK
        </button>
      </div>
    </section>
  );
};

export default Signup;
