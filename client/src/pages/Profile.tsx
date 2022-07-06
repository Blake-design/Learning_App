import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";

import { useParams } from "react-router-dom";
import { SEND_REQUEST } from "../utils/mutations";

const Profile = () => {
  let { username } = useParams();
  const [resMessage, setResMessage] = useState("");
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username },
  });
  const { loading: loading2, data: data2 } = useQuery(QUERY_ME);
  const [sendRequest, { error }] = useMutation(SEND_REQUEST);

  if (loading) {
    <div>loading</div>;
  }

  const date = new Date(+data?.user?.createdAt);
  const [year, month, day] = [
    date.getFullYear(),
    date.toLocaleString("default", { month: "long" }),
    date.getDate(),
  ];

  const handleClick = async () => {
    if (username) {
      const res = await sendRequest({ variables: { username } });
      setResMessage(res?.data?.sendFriendRequest);
    }
  };

  return data ? (
    <section className="page-container">
      <div>
        <img src={`/avatars/${data.user?.avatar}`} alt="avatar" />
      </div>
      <h2>{data.user?.name}</h2>
      <h4>{data.user?.username}</h4>

      <p>{data.user?.bio}</p>
      <div>has # friends friend s </div>
      <div>Hi score is #</div>
      <p>Joined {`${month} ${day}, ${year}`} </p>
      {!data.user?.friends?.pending?.includes(data.me?.username) &&
        !data.me?.friends?.active?.includes(data.me?.username)(
          <button onClick={handleClick}>Send Friend Request</button>
        )}
    </section>
  ) : (
    <section className="page-container">
      <div>you are not logged in</div>
    </section>
  );
};

export default Profile;
