import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLogin } from "../hooks";
import auth from "../utils/auth";
import Auth from "../utils/auth";
const Login = () => {
  const navigate = useNavigate();
  const [handleLogin, { error }] = useLogin();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(formState);
    setFormState({
      email: "",
      password: "",
    });
  };
  console.log(error);
  return auth.loggedin() ? (
    <div>ooops.... you're already logged in</div>
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
        {error && <p>{error.message}</p>}
        <button className="form-back-btn" onClick={() => navigate(-1)}>
          &larr; BACK
        </button>
      </div>
    </div>
  );
};

export default Login;
