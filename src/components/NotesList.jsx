import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NotesList = ({ notes }) => {
  return notes.length > 0 ? (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </section>
  ) : (
    <div className="notes-list-empty">
      <p>Tidak ada catatan</p>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
