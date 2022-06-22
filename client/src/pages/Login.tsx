import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { GetUserContext } from "../state/user";

const Login = () => {
  const navigate = useNavigate();
  const { user, handleSignIn } = GetUserContext();

  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleSignIn) handleSignIn(formState);
    setFormState({
      email: "",
      password: "",
    });
  };

  return Object.keys(user).length ? (
    <Navigate to="/" />
  ) : (
    <div>
      <div className="form-card">
        <h4> Log In </h4>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="EMAIL"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="PASSWORD"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button className="form-back-btn" onClick={() => navigate(-1)}>
          &larr; BACK
        </button>
      </div>
    </div>
  );
};

export default Login;
