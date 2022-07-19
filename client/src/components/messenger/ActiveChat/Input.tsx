import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../../../utils/mutations";

const Input = ({ currentConvo }: any) => {
  const [formState, setFormState] = useState("");

  const [sendMessage] = useMutation(SEND_MESSAGE);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessage({
      variables: { text: formState, convoId: currentConvo },
    });
    setFormState("");
  };

  return (
    <form className="messenger-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="type something..."
        value={formState}
        name="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default Input;
