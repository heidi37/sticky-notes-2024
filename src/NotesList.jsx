import React from "react";
import Note from "./Note.jsx";

const keepSearchMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );
  const searchMatches = props.notes.filter(keepSearchMatches);
  const NotesListItems = searchMatches.map(renderNote);

  return <ul className="notes-list">{NotesListItems}</ul>;
};

export default NotesList;
