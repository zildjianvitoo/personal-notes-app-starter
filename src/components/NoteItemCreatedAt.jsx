import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";


const NoteItemCreatedAt = ({ createdAt }) => {
  return <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>;
};

NoteItemCreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemCreatedAt;
