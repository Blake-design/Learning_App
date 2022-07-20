import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONVO } from "../../../utils/mutations";
import { QUERY_CONVOS } from "../../../utils/queries";

const ConvoForm = ({ _id, setOpenConvo }: any) => {
  const [formState, setFormState] = useState({
    roomName: "",
  });
  const [createConvo] = useMutation(CREATE_CONVO, {
    refetchQueries: [{ query: QUERY_CONVOS }, "Convos"],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createConvo({
      variables: { _id: _id, roomName: formState.roomName },
    });
    setFormState({ roomName: "" });
    setOpenConvo(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={"roomName"}
          value={formState.roomName}
          placeholder={"Chat Room Name"}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConvoForm;
