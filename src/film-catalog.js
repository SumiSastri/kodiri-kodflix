import React from 'react';

function FilmCatalog(props) {
	return (
		<div className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</div>
	);
}

export default FilmCatalog;
