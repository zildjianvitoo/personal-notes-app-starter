import React from "react";
import { Link } from "react-router-dom";

const NoteItemTitle = ({ title, id, props }) => {
  return (
    <h3 className="note-item__title" {...props}>
      <Link to={`notes/${id}`}>{title}</Link>
    </h3>
  );
};

export default NoteItemTitle;
