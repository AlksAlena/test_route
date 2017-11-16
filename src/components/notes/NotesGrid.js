import React, { Component } from 'react';
import Note from './Note';

require('./NotesGrid.css');

export default class NotesGrid extends Component {
  componentDidMount() {
    let grid = this.refs.grid;
    this.msnry = new Masonry( grid, {
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.notes.length !== prevProps.notes.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  }

  render() {
    let onNoteDelete = this.props.onNoteDelete;
    return(
      <div className="notes-grid" ref="grid"> 
        {
          this.props.notes.map(function(note) {
            return (
              <Note 
                key={note.id} 
                color={note.color} 
                onDelete={onNoteDelete.bind(null, note)}
              >
                {note.text}
              </ Note>
            );
          })
        }
      </div>
    );
  }
}