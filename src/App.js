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
							<Link className="menu-item-link home-link" to='/'>Portfolio</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link main-link" to='/test_route'>Main page app</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/test_route/contacts'>ContactsList</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/test_route/notes'>NotesApp</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/test_route/timer'>Timer</Link>
						</li>
						<li className="menu-item">
							<Link className="menu-item-link" to='/test_route/route'>RouterApp</Link>
						</li>
					</ul>
				</nav>	

				<section className="app-content">
					<h1>Welcome to training Router App</h1>
					
					<Switch>
						<Route path="/test_route/contacts" component={ContactsList} />
						<Route path="/test_route/notes" component={NotesApp} />
						<Route path="/test_route/timer" component={Timer} />
						<Route path="/test_route/route" component={RouteApp} />
					</Switch>
				</section>				
			</div>			
		);
	}
}