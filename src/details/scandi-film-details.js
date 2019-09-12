import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getFilms from '../films.js';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			film: {}
		};
	}

	componentDidMount() {
		let filmId = this.props.match.params.filmId;
		let film = getFilms().find((film) => film.id === filmId);
		this.setState({ film });
	}

	render() {
		if (this.state.film === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else {
			return (
				<div className="scandi-film-details">
					<h1>{this.state.film.name}</h1>
					<img alt={this.state.film.me} src={this.state.film.cover} />
					<p>{this.state.film.description}</p>
					<Link to="/">
						<h4>Page under construction</h4>
					</Link>
				</div>
			);
		}
	}
}
