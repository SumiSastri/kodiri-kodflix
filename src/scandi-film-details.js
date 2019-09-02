import React from 'react';
import { Link } from 'react-router-dom';

export default class ScandiFilmDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			welcomeMessage: 'All you ever wanted to know about Scandinavian Noir'
		};
	}
	render() {
		return (
			<Link to="/">
				<div className="scandi-film-details">
					<h1>{this.state.welcomeMessage}</h1>
					<h4>Page under construction</h4>
				</div>
			</Link>
		);
	}
}
