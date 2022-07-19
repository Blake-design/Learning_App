import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_REQUESTS } from "../utils/queries";
import { ACCEPT_REQUEST } from "../utils/mutations";
import { QueryMeData, RequestObj } from "../types/types";

function Requests({ me }: QueryMeData) {
  const { data } = useQuery(QUERY_REQUESTS);
  const [acceptRequest] = useMutation(ACCEPT_REQUEST, {
    refetchQueries: [
      { query: QUERY_REQUESTS }, // DocumentNode object parsed with gql
      "Requests", // Query name
    ],
  });

  const handleAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await acceptRequest({
      variables: {
        userId: e.currentTarget.value,
        requestId: e.currentTarget.name,
      },
    });
  };

  return (
    <li>
      friend requests pending
      {!data?.requests?.includes(null) ? (
        data?.requests?.map((request: RequestObj, i: number) => {
          return (
            <button
              key={i}
              onClick={(e) => handleAccept(e)}
              name={request?._id}
              value={request?.sender?._id}
            >
              {request?.sender?.username}
            </button>
          );
        })
      ) : (
        <button> none </button>
      )}
    </li>
  );
}

export default Requests;
