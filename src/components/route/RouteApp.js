import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import InboxPage from './InboxPage';

export default class RouteApp extends Component {
  render() {
    return(
      <div>
        <ul className="menu-bar">
          <li className="menu-item">
            <Link className="menu-item-link" to='/route/about'>About</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item-link" to='/route/inbox'>Inbox</Link>
          </li>
        </ul>
        
        <Switch>
          <Route path='/route/about' component={AboutPage} />
          <Route path='/route/inbox' component={InboxPage} />
        </Switch>
      </div>
    );
  }
}