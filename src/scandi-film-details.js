import React from 'react';
import { Link } from 'react-router-dom';
import getFilms from './films';

export default class ScandiFilmDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			// film: {}
			welcomeMessage: 'All you ever wanted to know about Scandinavian Noir'
		};
	}
	componentDidMount() {
		let filmId = this.props.match.params.filmId;
		let film = getFilms().find((film) => film.id === filmId);
		// setTimeout(() => {
		this.setState({
			welcomeMessage: 'The best is yet to come...'
			// film: film
		});
		// }, 3000);
	}
	render() {
		return (
			<div className="scandi-film-details">
				<h1>{this.state.welcomeMessage}</h1>
				{/* <h1>{this.state.film.name}</h1> */}
				<Link to="/">
					<h4>Page under construction</h4>
				</Link>
			</div>
		);
	}
}
