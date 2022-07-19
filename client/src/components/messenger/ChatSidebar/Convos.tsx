import React from "react";
import { LastMessage } from ".";
import { useMutation } from "@apollo/client";
import { QUERY_CONVOS } from "../../../utils/queries";
import { DELETE_CONVO } from "../../../utils/mutations";

const Convos = ({ convos, handleClick }: any) => {
  const [deleteConvo] = useMutation(DELETE_CONVO, {
    refetchQueries: [{ query: QUERY_CONVOS }, "Convos"],
  });
  const handleDelete = async (_id: any) => {
    await deleteConvo({ variables: { _id } });
  };

  return (
    <div className="sb-chat-container">
      {convos?.map((convo: any) => {
        return (
          <div className="sb-chat-item-container">
            <div
              key={convo._id}
              className="sb-chat-content-container"
              onClick={() => handleClick(convo)}
            >
              <div className={"sb-chat-content-container-top"}>
                <h5>roomName: {convo.roomName}</h5>
              </div>
              <LastMessage convo={convo} />
            </div>
            <button onClick={() => handleDelete(convo._id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Convos;
