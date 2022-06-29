import React, { useState } from "react";
import { Header } from "../layout";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Profile = () => {
  const {
    loading,
    error: error1,
    data: { me: { name, bio } } = {},
  } = useQuery(QUERY_ME);

  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [formState, setFormState] = useState({
    bio: bio,
    name: name,
  });

  if (loading) {
    <div>loading</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser({ variables: { ...formState } });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return bio ? (
    <section>
      <h2>{name} profile page</h2>

      <form className="form-card" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-input"
          name="bio"
          type="name"
          placeholder={formState.name}
          value={formState.name}
          onChange={handleChange}
        />

        <label>Bio</label>
        <textarea
          className="form-input"
          name="bio"
          rows={4}
          cols={40}
          placeholder={formState.bio}
          value={formState.bio}
          onChange={handleChange}
        >
          {bio}
        </textarea>

        <button type="submit">Submit</button>
      </form>

      <div>you currently have friends friend s </div>
      <div>your Hi score is currently</div>
    </section>
  ) : (
    <section>
      <div>you are not logged in</div>
    </section>
  );
};

export default Profile;
