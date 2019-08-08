import React from 'react';
import theHunt from './assets/the-hunt-scandinavian.jpg';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>Kodflix</h1>
					<img alt="the-hunt-film" src={theHunt} />
				</div>
			</header>
		</div>
	);
}

export default App;
