import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilmCatalogGallery from './film-catalog-gallery';

function App() {
	return (
		<Router>
			<div className="app-container">
				<Route exact path="/" component={FilmCatalogGallery} />
				<Route exact path="/scandi-film-details" component={ScandiFilmDetails} />
			</div>
		</Router>
	);
}

function ScandiFilmDetails() {
	return (
		<div className="scandi-film-details">
			<h1>All you ever wanted to know about Scandinavian Noir</h1>
			<h4>Page under construction</h4>
		</div>
	);
}

export default App;
