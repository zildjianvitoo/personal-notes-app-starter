import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemCreatedAt from "./NoteItemCreatedAt";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

const NoteItem = ({ title, createdAt, body, id }) => {
  return (
    <div className="note-item">
      <NoteItemTitle title={title} id={id} />
      <NoteItemCreatedAt createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
