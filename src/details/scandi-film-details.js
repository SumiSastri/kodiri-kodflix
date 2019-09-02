import React from 'react';
import { Link } from 'react-router-dom';
import getFilms from '../films';

export default class ScandiFilmDetails extends React.Component {
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
		return (
			<div className="scandi-film-details">
				<h1>{this.state.film.name}</h1>
				<img alt={this.state.film.name} src={this.state.film.cover} />
				<p>{this.state.film.description}</p>
				<Link to="/">
					<h4>Page under construction</h4>
				</Link>
			</div>
		);
	}
}
