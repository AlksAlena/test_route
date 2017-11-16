import React, { Component } from 'react';

require('./Note.css');

export default class Note extends Component {
  render() {
    let divStyle = { backgroundColor: this.props.color };
    return(
      <div className="note" style={divStyle}> {this.props.children} 
        <span className="delete-note" onClick={this.props.onDelete}></span>
      </div>
    );
  }
}