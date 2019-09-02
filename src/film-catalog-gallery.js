import React from 'react';
import FilmCatalog from './film-catalog';
import getFilms from './films';

function FilmCatalogGallery() {
	return (
		<main className="films-container">
			<header className="header">
				<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
			</header>

			<div className="film-covers-container">
				{getFilms().map((films) => {
					return (
						<FilmCatalog key={films.id} id={films.id} cover={films.cover} description={films.description} />
					);
				})}
			</div>
		</main>
	);
}
export default FilmCatalogGallery;
