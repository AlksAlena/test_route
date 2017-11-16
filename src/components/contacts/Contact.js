import React, { Component } from 'react';

import './Contact.less';

export default class Contact extends Component {
  render() {
    return(
      <li className="contact">
        <img className="contact-image" src={this.props.photo} width="60" height="60" />
        <div className="contact-info">
          <div className="contact-name">{this.props.name}</div>
          <div className="contact-phone">{this.props.phone}</div>
        </div>                
      </li>
    );
  }
}