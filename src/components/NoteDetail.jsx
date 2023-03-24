import React from "react";
import { MdDelete, MdArchive, MdUnarchive } from "react-icons/md";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

const NoteDetail = ({ title, createdAt, body, id, archived }) => {
  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    navigate("/");
  };

  const onUnarchiveNoteHandler = (id) => {
    unarchiveNote(id);
    navigate("/");
  };

  return (
    <div>
      <h1 className="detail-page__title">{title}</h1>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        {archived ? (
          <button
            className="action"
            title="hapus dari arsip"
            onClick={() => onUnarchiveNoteHandler(id)}
          >
            <MdUnarchive />
          </button>
        ) : (
          <button
            className="action"
            title="arsip"
            onClick={() => onArchiveHandler(id)}
          >
            <MdArchive />
          </button>
        )}

        <button
          className="action"
          title="hapus"
          onClick={() => onDeleteHandler(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
