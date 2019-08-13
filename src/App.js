import React from 'react';
import './App.css';
import theHunt from './assets/the-hunt-scandinavian.jpg';
import bolgen from './assets/bolgen-film.jpeg';
import girlWithTheDragonTattoo from './assets/girl-with-the-dragon-tattoo-film.jpeg';
import snabbeCash from './assets/snabbe-cash-film.jpeg';
import trapped from './assets/trapped-film.jpeg';
import dicte from './assets/dicte-film.jpeg';

function App() {
	return (
		<div className="app-container">
			<header className="header">
				<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
			</header>
			<FilmCatalog />
			<main className="films-container">
				<div className="row1">
					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5 className="film-description">
								The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)
							</h5>
						</div>
						<img alt="bolgen-film" src={bolgen} />
					</div>
					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5>
								The Hunt: Twelve strangers wake up in a clearing, they now have to prepare for the hunt,
								but what (or who) is the prey?(Denmark)
							</h5>
						</div>
						<img alt="the-hunt-film" src={theHunt} />
					</div>
					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5>
								Girl With The Dragon Tattoo: What happens when a journalist, computer hacker and
								sadist's fates are entagled with each other? (Sweden)
							</h5>
						</div>
						<img alt="girl-with-the-dragon-tattoo-film" src={girlWithTheDragonTattoo} />
					</div>
				</div>
				<div className="row2">
					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5>
								Snabbe Cash: A student wants to make some easy money as a cab driver, it gets messy as
								the criminal underworld are his passengers(Sweden)
							</h5>
						</div>
						<img alt="snabbe-cash-film" src={snabbeCash} />
					</div>

					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5>
								Trapped: A multilated corpse is found by a fisherman, who does the headless, limbless
								body belong to?(Iceland)
							</h5>
						</div>
						<img alt="trapped-film" src={trapped} />
					</div>
					<div className="film-cover">
						<div className="film-cover-overlay">
							<h5>
								Dicte: A divorced journalist goes back to her home town to make peace with her past, but
								things take an ugly turn (Denmark)
							</h5>
						</div>
						<img alt="dicte-film" src={dicte} />
					</div>
				</div>
			</main>
		</div>
	);
}

function FilmCatalog(props) {
	return (
		<div className="film-cover">
			<img alt="the-wave-film" src={props.bolgen} />
			<div className="film-cover-overlay">
				<h5 className="film-description">
					The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)
				</h5>
			</div>
		</div>
	);
}

export default App;
