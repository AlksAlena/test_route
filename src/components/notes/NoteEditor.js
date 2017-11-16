import React, { Component } from 'react';

require('./NoteEditor.css');

export default class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value});
  }

  handleNoteAdd() {
    var newNote = {
      text: this.state.text,
      color: 'yellow',
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
  }

  render() {
    return(
      <div className="note-editor">
        <textarea 
          placeholder="Enter your note here..." 
          rows={5} className="textarea" 
          onChange={this.handleTextChange} 
          value={this.state.text}
        />
        <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
      </div>
    );
  }
}