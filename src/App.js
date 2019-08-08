import React from 'react';
import './App.css';
import theHunt from './assets/the-hunt-scandinavian.jpg';

function App() {
	return (
		<div className="container">
			<div>
				<h1>Kodflix</h1>
				<img alt="the-hunt-film" src={theHunt} />
			</div>
		</div>
	);
}

export default App;
