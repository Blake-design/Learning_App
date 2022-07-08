import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ThemeButton } from "../components";
import { ACCEPT_REQUEST, REMOVE_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Settings = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [removeUser, { error }] = useMutation(REMOVE_USER);
  const [acceptRequest, { error: error2 }] = useMutation(ACCEPT_REQUEST);

  const handleRemove = async () => {
    await removeUser();
    auth.logout();
  };

  const handleAccept = async (e: any) => {
    const res = await acceptRequest({
      variables: { userId: e.target.value, requestId: e.target.name },
    });
    console.log(res);
  };
  const myRequests = data?.me?.requests?.map((request: any) => {
    return request;
  });

  return data ? (
    <section className="page-container">
      <h1>this is the settings page</h1>
      <ul>
        <li>
          Theme style <ThemeButton />
        </li>
        <li>Show when active</li>
        <li>
          Remove account <button onClick={handleRemove}>Delete Data</button>
        </li>
        <li>
          friend requests pending
          {!myRequests.includes(null) ? (
            myRequests?.map((request: any, i: number) => {
              return (
                <button
                  key={i}
                  onClick={(e) => handleAccept(e)}
                  name={request?._id}
                  value={request?.sender?._id}
                >
                  {request?.sender.username}
                </button>
              );
            })
          ) : (
            <button> none </button>
          )}
        </li>
      </ul>
    </section>
  ) : (
    <section>
      <div>you are not logged in</div>
    </section>
  );
};

export default Settings;
