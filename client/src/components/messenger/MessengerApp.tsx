import React from "react";
import "./messenger.css";

const MessengerApp = () => {
  return (
    <div className="messenger-container">
      <aside className="chat-sidebar">
        <h3>open chats</h3>
        <div className="prev-convo-box">
          <div className="prev-convo-item">
            <div>avatar</div>convo
          </div>
        </div>
      </aside>
      <section className="chat-main">
        <h3>conversation</h3>
        <div className="messages">
          <p>hi</p>
          <div>😊 pic</div>
          <p>yoo</p>
          <div>😀 pic</div>
        </div>
      </section>
    </div>
  );
};

export default MessengerApp;
