import React from "react";
import NoteItem from "./NoteItem";

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

export default NotesList;
