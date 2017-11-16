import React, { Component } from 'react';

import messages from '../messages.json';

import './Message.less';

export default class Message extends Component {
  constructor(props) {
    super(props);
    const messageId = this.props.match.params.messageId;
    this.state = {
      message: messages.find(message => message.id === messageId)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { messageId: prevId } = this.props.match.params;
    const { messageId: nextId } = nextProps.match.params;
    if(prevId != nextId) {
      this.setState({ 
        message: messages.find(message => message.id === nextId)
       });
    }
  }

  render() {
    const { message } = this.state;

    return (
      <div className="Message">
        <p>From: {message.senderName} ({message.senderEmail})</p>
        <p>To: you</p>
        <p>Subject: {message.subject}</p>
        <hr />
        <p>{message.body}</p>
      </div>
    );
  }
}