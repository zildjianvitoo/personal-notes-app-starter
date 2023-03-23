import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <div>
      <h1 className="detail-page__title">{title}</h1>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
