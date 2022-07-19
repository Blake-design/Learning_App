import React from "react";
import { Convos } from ".";
import { QUERY_CONVOS, SUBSCRIBE_CONVO } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import { SelectConvoProp } from "../../../types/types";
import auth from "../../../utils/auth";
const ChatRooms = ({ selectConvo }: SelectConvoProp) => {
  const {
    data: { _id },
  } = auth.getUser();

  const { subscribeToMore, data } = useQuery(QUERY_CONVOS, {
    variables: {
      _id,
    },
  });

  return (
    <div className="sb-convos-wrapper">
      <h3 className="sb-title">Chat Rooms - {data?.convos?.length}</h3>

      <Convos
        convos={data?.convos}
        selectConvo={selectConvo}
        subscribeToConvos={() => {
          subscribeToMore({
            document: SUBSCRIBE_CONVO,
            variables: { _id: _id },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newConvo = subscriptionData.data.convo;
              return Object.assign(
                {},
                {
                  convos: [...prev.convos, newConvo],
                }
              );
            },
          });
        }}
      />
    </div>
  );
};

export default ChatRooms;
