import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </div>
  ) : (
    <div className="notes-list-empty">
      <p>Tidak ada catatan</p>
    </div>
  );
};

export default NotesList;
