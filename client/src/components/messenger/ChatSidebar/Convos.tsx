import React, { useEffect } from "react";
import { LastMessage } from ".";
import { useMutation } from "@apollo/client";
import { QUERY_CONVOS } from "../../../utils/queries";
import { DELETE_CONVO } from "../../../utils/mutations";
import { ConvosProp, ConvoType } from "../../../types/types";

const Convos = ({ convos, selectConvo, subscribeToConvos }: ConvosProp) => {
  useEffect(() => {
    subscribeToConvos();
  }, [subscribeToConvos]);

  const [deleteConvo] = useMutation(DELETE_CONVO, {
    refetchQueries: [{ query: QUERY_CONVOS }, "Convos"],
  });
  const handleDelete = async (_id: string) => {
    await deleteConvo({ variables: { _id } });
  };

  return (
    <div className="sb-chat-container">
      {convos?.map((convo: ConvoType, i: number) => {
        return (
          <div className="sb-chat-item-container" key={`chatRoom ${i}`}>
            <div
              className="sb-chat-content-container"
              onClick={() => selectConvo(convo)}
            >
              <div className={"sb-chat-content-container-top"}>
                <h5>{convo.roomName}</h5>
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
