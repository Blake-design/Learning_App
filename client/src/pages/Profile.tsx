import React, { useState } from "react";
import { Header } from "../layout";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Profile = () => {
  const [formState, setFormState] = useState({ bio: "hold" });
  const { loading, data: me } = useQuery(QUERY_ME);
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  console.log(formState.bio);
  if (loading) {
    <div>loading</div>;
  }
  console.log(me);
  const friends = me?.friends?.length;
  const handleSubmit = () => {
    updateUser({ variables: { ...formState } });
  };

  return me ? (
    <section>
      <h2>{me?.email} profile page</h2>

      <form onSubmit={handleSubmit}>
        <label>Bio</label>
        <textarea name="bio" rows={4} cols={40}>
          {me.bio}
        </textarea>
      </form>

      <div>you currently have {friends} friend s </div>
      <div>your Hi score is currently</div>
    </section>
  ) : (
    <section>
      <div>you are not logged in</div>
    </section>
  );
};

export default Profile;
