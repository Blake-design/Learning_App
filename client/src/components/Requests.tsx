import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_REQUESTS } from "../utils/queries";
import { ACCEPT_REQUEST } from "../utils/mutations";

function Requests({ me }: any) {
  const { loading, data } = useQuery(QUERY_REQUESTS);
  const [acceptRequest, { error }] = useMutation(ACCEPT_REQUEST);

  const handleAccept = async (e: any) => {
    const res = await acceptRequest({
      variables: { userId: e.target.value, requestId: e.target.name },
    });
    console.log(res);
  };

  return (
    data && (
      <li>
        friend requests pending
        {!data.requests?.includes(null) ? (
          data.requests?.map((request: any, i: number) => {
            return (
              request?.sender?._id !== me?._id && (
                <button
                  key={i}
                  onClick={(e) => handleAccept(e)}
                  name={request?._id}
                  value={request?.sender?._id}
                >
                  {request?.sender?.username}
                </button>
              )
            );
          })
        ) : (
          <button> none </button>
        )}
      </li>
    )
  );
}

export default Requests;
