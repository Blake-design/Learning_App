import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";

import { useParams } from "react-router-dom";
import { SEND_REQUEST } from "../utils/mutations";

const Profile = () => {
  let { username } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username },
  });
  const { loading: loading2, data: data2 } = useQuery(QUERY_ME);
  const [sendRequest, { error }] = useMutation(SEND_REQUEST);

  if (loading || loading2) {
    <div>loading</div>;
  }

  //  format date of account creation
  const date = new Date(+data?.user?.createdAt);
  const [year, month, day] = [
    date.getFullYear(),
    date.toLocaleString("default", { month: "long" }),
    date.getDate(),
  ];

  //  send a friend request
  const handleClick = async () => {
    if (username) {
      await sendRequest({ variables: { _id: data?.user?._id } });
    }
  };

  // destructure info from request senders
  const userRequests = data?.user?.requests?.map(
    (request: any) => request.sender._id
  );

  // destructure info from friends
  const friends = data2?.me?.friends?.map((friend: any) => friend._id);

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
      {!userRequests?.includes(data2?.me?._id) && // remove button if you sent request or if already friends
        !friends?.includes(data.user?._id) && (
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
