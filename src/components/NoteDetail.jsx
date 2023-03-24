import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/local-data";

const NoteDetail = ({ title, createdAt, body, id }) => {
  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <div>
      <h1 className="detail-page__title">{title}</h1>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <button
          className="action"
          title="hapus"
          onClick={() => onDeleteHandler(id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
