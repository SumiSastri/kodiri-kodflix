import React from 'react';
import { Link } from 'react-router-dom';

function FilmCatalog(props) {
	console.log(props);
	return (
		<Link to="/scandi-film-details" className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</Link>
	);
}

export default FilmCatalog;
