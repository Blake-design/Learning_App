import React from "react";
import { Convos, Search } from ".";
import { QUERY_CONVOS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
const ChatRooms = ({ selectConvo }: any) => {
  const { loading, data } = useQuery(QUERY_CONVOS);

  return (
    <div className="sb-convos-wrapper">
      <h3 className="sb-title">Chat Rooms - {data?.convos?.length}</h3>

      <Convos convos={data?.convos} handleClick={selectConvo} />
    </div>
  );
};

export default ChatRooms;
