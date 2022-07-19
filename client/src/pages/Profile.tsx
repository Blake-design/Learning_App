import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../utils/queries";
import { MeQueryProps } from "../types";
import { useParams } from "react-router-dom";
import { SEND_REQUEST } from "../utils/mutations";
import { LoggedIn } from ".";

const Profile = ({ me }: MeQueryProps) => {
  // params are used to query for user
  let { username } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username },
  });

  const [sendRequest] = useMutation(SEND_REQUEST);

  if (loading) {
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
  const friends = me?.friends?.map((friend: any) => friend._id);

  return username !== "undefined" ? (
    <section className="page-container">
      <div>
        <img src={`/avatars/${data?.user?.avatar}`} alt="avatar" />
      </div>
      <h2>{data?.user?.name}</h2>
      <h4>{data?.user?.username}</h4>

      <p>{data?.user?.bio}</p>
      <div>has # friends friend s </div>
      <div>Hi score is #</div>
      <p>Joined {`${month} ${day}, ${year}`} </p>
      {me && // if user loggged in
        !userRequests?.includes(me?._id) && // if user has not already sent request
        !friends?.includes(data?.user?._id) && ( // if user not already friends
          <button onClick={handleClick}>Send Friend Request</button> // show buttom
        )}
    </section>
  ) : (
    <section className="page-container">
      <LoggedIn />
    </section>
  );
};

export default Profile;
