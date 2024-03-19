import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const text = e.target.value;
    props.onType(text, props.note.id, "title");
  };

  const updateDescription = (e) => {
    const text = e.target.value;
    props.onType(text, props.note.id, "description");
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span
        className="note__delete"
        onClick={() => props.deleteNote(props.note.id)}
      >
        X
      </span>
    </li>
  );
};

export default Note;
