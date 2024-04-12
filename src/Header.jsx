import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1 className="app-header__title">Sticky Notes</h1>
      <aside className="app-header__controls">

        <input
          className="search"
          type="text"
          placeholder="Type here to search notes..."
          value={props.searchText}
          onChange={props.onSearch}
        />

<button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
      </aside>
    </header>
  );
};

export default Header;
