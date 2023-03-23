import React from "react";
import { showFormattedDate } from "../utils";

const NoteItemCreatedAt = ({ createdAt,props }) => {
  return (
    <p className="note-item__createdAt" >
      {showFormattedDate(createdAt)}
    </p>
  );
};

export default NoteItemCreatedAt;
