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
				<h1> Kodiri 's Kodflix Challenge</h1>
			</header>
			<main className="films-container">
				<div className="row1">
					<div className="bolgen">
						<div className="film-title-overlay">
							<h5>Bolgen (The Wave)</h5>
						</div>
						<img alt="bolgen-film" src={bolgen} />
					</div>
					<div className="the-hunt">
						<img alt="the-hunt-film" src={theHunt} />
					</div>
					<div className="girl-with-the-dragon-tattoo">
						<img alt="girl-with-the-dragon-tattoo-film" src={girlWithTheDragonTattoo} /> {' '}
					</div>
				</div>
				<div className="row2">
					<div className="snabbe-cash">
						<img alt="snabbe-cash-film" src={snabbeCash} />
					</div>
					<div className="trapped">
						<img alt="trapped-film" src={trapped} /> {' '}
					</div>
					<div className="dicte">
						<img alt="dicte-film" src={dicte} /> {' '}
					</div>
				</div>
			</main>
		</div>
	);
}
export default App;
