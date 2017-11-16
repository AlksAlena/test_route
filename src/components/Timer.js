import React, { Component } from 'react';

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000);
	}

	tick() {
		this.setState({ seconds: this.state.seconds + 1});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return(
			<h4>Уже прошло {this.state.seconds} секунд</h4>
		);
	}
}