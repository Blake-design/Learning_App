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
      <div className="form-card submit">
        <h2>Sign Up</h2>
        <hr />
        <form className="form-flex" onSubmit={handleSubmit}>
          <div className="submit-flex">
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
          </div>
          <div className="submit-flex">
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
          </div>
          <button
            type="submit"
            className={formState.password.length < 3 ? "disabled" : ""}
            disabled={formState.password.length < 3 ? true : false}
          >
            Submit
          </button>
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
