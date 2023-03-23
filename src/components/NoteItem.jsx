import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemCreatedAt from "./NoteItemCreatedAt";
import NoteItemBody from "./NoteItemBody";

const NoteItem = ({ title, createdAt, body,id }) => {
  return (
    <div className="note-item">
      <NoteItemTitle title={title} id={id} />
      <NoteItemCreatedAt createdAt={createdAt} />
      <NoteItemBody body={body}/>
    </div>
  );
};

export default NoteItem;
