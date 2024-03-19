import React, { Component } from "react";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  componentDidUpdate() {
    const savedNotesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", savedNotesString);
  }

  componentDidMount() {
    const savedNotesString = localStorage.getItem("savedNotes");
    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      this.setState({ notes: savedNotes });
    }
  }

  addNote = (note) => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          title: "",
          description: "",
          doesMatchSearch: true
        }
      ]
    });
  };

  deleteNote = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id)
      };
    });
  };

  onType = (text, noteId, field) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === noteId) {
        if (field === "title") {
          note.title = text;
          return note;
        } else if (field === "description") {
          note.description = text;
          return note;
        } else {
          console.log("An error occured, please check the field");
          return note;
        }
      } else {
        return note;
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(searchText);
        const descriptionMatch = description.includes(searchText);
        const hasMatch = titleMatch || descriptionMatch;
        return {
          ...note,
          doesMatchSearch: hasMatch
        };
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };

  render() {
    return (
      <div>
        <Header
          search={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
