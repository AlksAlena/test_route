import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './MessagePreview.less';

export default class MessagePreview extends Component {
  render() {
    const { id, title, senderName, url, onClick, selected } = this.props;
    const classes = classNames('MessagePreview', {selected});

    return (
      <div className={classes} onClick={onClick}>
        <Link className="message-link" to={`${url}/messages/${id}`} >
          <div className="title">
            {title}
          </div>
          <div className="from">
            {`from ${senderName}`}
          </div>
        </Link>
      </div>
    );
  }
}