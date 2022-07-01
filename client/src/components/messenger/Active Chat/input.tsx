import React, { useState } from "react";

const Input = ({ otherUser, conversationId, user, postMessage }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements;
    setInputValue("");
  };

  return (
    <form className="messenger-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="type something..."
        value={inputValue}
        name="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default Input;
