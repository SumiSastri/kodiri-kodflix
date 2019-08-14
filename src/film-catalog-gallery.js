import React from 'react';
import theHunt from './assets/the-hunt-scandinavian.jpg';
import bolgen from './assets/bolgen-film.jpeg';
import girlWithTheDragonTattoo from './assets/girl-with-the-dragon-tattoo-film.jpeg';
import snabbeCash from './assets/snabbe-cash-film.jpeg';
import trapped from './assets/trapped-film.jpeg';
import dicte from './assets/dicte-film.jpeg';
import FilmCatalog from './film-catalog';

function FilmCatalogGallery() {
	return (
		<main className="films-container">
			<header className="header">
				<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
			</header>
			<div className="row1">
				<FilmCatalog
					cover={bolgen}
					description={`The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`}
				/>
				<FilmCatalog
					cover={theHunt}
					description={`The Hunt: Twelve strangers wake up in a clearing, they now have to prepare for the hunt,
		but what (or who) is the prey?(Denmark)`}
				/>

				<FilmCatalog
					cover={girlWithTheDragonTattoo}
					description={`Girl With The Dragon Tattoo: What happens when a journalist, computer hacker and
		sadist's fates are entagled with each other? (Sweden)`}
				/>
			</div>

			<div className="row2">
				<FilmCatalog
					cover={snabbeCash}
					description={`Snabbe Cash: A student wants to make some easy money as a cab driver, it gets messy as
		the criminal underworld are his passengers(Sweden)`}
				/>

				<FilmCatalog
					cover={trapped}
					description={`Trapped: A multilated corpse is found by a fisherman, who does the headless, limbless
		body belong to?(Iceland)`}
				/>
				<FilmCatalog
					cover={dicte}
					description={`Dicte: A divorced journalist goes back to her home town to make peace with her past, but
		things take an ugly turn (Denmark)`}
				/>
			</div>
		</main>
	);
}
export default FilmCatalogGallery;
