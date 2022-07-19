import React from "react";
import { Convos } from ".";
import { QUERY_CONVOS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import { SelectConvoProp } from "../../../types/types";
const ChatRooms = ({ selectConvo }: SelectConvoProp) => {
  const { data } = useQuery(QUERY_CONVOS);

  return (
    <div className="sb-convos-wrapper">
      <h3 className="sb-title">Chat Rooms - {data?.convos?.length}</h3>

      <Convos convos={data?.convos} selectConvo={selectConvo} />
    </div>
  );
};

export default ChatRooms;
