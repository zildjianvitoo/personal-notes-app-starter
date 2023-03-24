import React from "react";
import AddNoteInput from "../components/AddNoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const AddNotePage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return (
    <section>
      <AddNoteInput addNote={onAddNoteHandler} />
    </section>
  );
};

export default AddNotePage;
