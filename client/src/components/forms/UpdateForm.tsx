import React, { useState } from "react";
import { UPDATE_USER } from "../..//utils/mutations";
import { useMutation } from "@apollo/client";

interface UpdateFormType {
  bio: string;
  name: string;
}

const UpdateForm = ({ bio, name }: UpdateFormType) => {
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [formState, setFormState] = useState({
    bio: bio,
    name: name,
  });
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
  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className="form-input"
        name="name"
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

      <button
        type="submit"
        disabled={
          formState.bio === bio && formState.name === name ? true : false
        }
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateForm;
