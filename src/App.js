import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';

import RouteApp from "./components/route/RouteApp";
import ContactsList from "./components/contacts/ContactsList";
import NotesApp from "./components/notes/NotesApp";
import Timer from "./components/Timer";

import './App.less';

export default class App extends Component {
	render() {
		return(			
			<div className="app">
				<nav className="app-menu">
					<ul className="menu-bar">
						<li className="menu-item">
							<Link className="menu-item-link" to='/contacts'>ContactsList</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/notes'>NotesApp</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/timer'>Timer</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/route'>RouterApp</Link>
						</li>
					</ul>
				</nav>	

				<section className="app-content">
					<h1>Welcome to training Router App</h1>
					
					<Switch>
						<Route path="/contacts" component={ContactsList} />
						<Route path="/notes" component={NotesApp} />
						<Route path="/timer" component={Timer} />
						<Route path="/route" component={RouteApp} />
					</Switch>
				</section>				
			</div>			
		);
	}
}