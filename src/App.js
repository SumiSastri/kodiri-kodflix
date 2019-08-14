import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import FilmCatalogGallery from './film-catalog-gallery';
function App() {
	return (
		<Router>
			<div className="app-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
				<FilmCatalogGallery />
			</div>
		</Router>
	);
}

export default App;
