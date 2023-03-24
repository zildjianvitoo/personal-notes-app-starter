import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItemTitle = ({ title, id }) => {
  return (
    <h3 className="note-item__title">
      <Link to={`/notes/${id}`}>{title}</Link>
    </h3>
  );
};

NoteItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItemTitle;
