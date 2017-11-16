import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MessagePreview from './MessagePreview';
import Message from './Message';

import './InboxPage.less';

import messages from '../messages.json';

export default class InboxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages
    };
    this.selectedId = '';
  }

  handlePreviewClick(messageId) {
    this.selectedId = messageId;
  }

  render() {
    const messages = this.state.messages;

    return (
      <div className="InboxPage">
        <div className="messages">
          {
            messages.map(message =>
              <MessagePreview 
                key={message.id} 
                id={message.id} 
                title={message.subject} 
                senderName={message.senderName} 
                url={this.props.match.url} 
                selected={this.selectedId === message.id} 
                onClick={this.handlePreviewClick.bind(this, message.id)}
              />
            )
          }
        </div>

        <div className="message-container">
          <Route ref="message" path={`${this.props.match.url}/messages/:messageId`} component={Message}/>
        </div>
      </div>      
    );
  }
}
