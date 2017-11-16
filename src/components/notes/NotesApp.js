import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

require('./NotesApp.css');

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleNodeDelete = this.handleNodeDelete.bind(this);
    this._updateLocalStorage = this._updateLocalStorage.bind(this);
  }

  componentDidMount() {
    let localNotes = JSON.parse(localStorage.getItem('localNotes'));
    if(localNotes) {
      this.setState({ notes: localNotes });
    }
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  handleNoteAdd(newNote) {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  }

  handleNodeDelete(note) {
    let noteId = note.id;
    let newNotes = this.state.notes.filter(function(note) {
      return note.id !== noteId;
    });

    this.setState({ notes: newNotes });
  }

  render() {
    return(
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNodeDelete}/>
      </div>
    );
  }

  _updateLocalStorage() {
    let notes = JSON.stringify(this.state.notes);
    localStorage.setItem('localNotes', notes);
  }
}