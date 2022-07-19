import React from "react";
import { ActiveChatHeader, Messages, Input } from ".";
import "./activeChat.css";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES, SUBSCRIBE_MESSAGES } from "../../../utils/queries";

const ActiveChat = ({ currentConvo, me }: any) => {
  const { subscribeToMore, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: currentConvo,
    },
  });

  return (
    <section className="chat-window-wrapper">
      <ActiveChatHeader currentConvo={currentConvo} />
      <div className="messages-container">
        <Messages
          messages={data.messages}
          me={me}
          subscribeToMessages={() => {
            subscribeToMore({
              document: SUBSCRIBE_MESSAGES,
              variables: { convoId: currentConvo },
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newMessage = subscriptionData.data.message;
                return Object.assign(
                  {},
                  {
                    messages: [...prev.messages, newMessage],
                  }
                );
              },
            });
          }}
        />
        <Input currentConvo={currentConvo} />
      </div>
    </section>
  );
};

export default ActiveChat;
