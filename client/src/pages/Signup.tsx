import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { useSignup } from "../hooks";
import Auth from "../utils/auth";
import { LoggedIn } from ".";

const Signup = () => {
  const navigate = useNavigate();
  const [handleSignup, { error }] = useSignup();
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignup(formState);
    setFormState({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return !Auth.loggedin() ? (
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
            name="username"
            type="text"
            value={formState.username}
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
  ) : (
    <LoggedIn />
  );
};

export default Signup;
