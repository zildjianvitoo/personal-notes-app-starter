import React from "react";
import PropTypes from "prop-types";

const NoteItemBody = ({ body }) => {
  return <p className="note-item__body">{body}</p>;
};

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
