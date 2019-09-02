import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilmCatalogGallery from './film-catalog-gallery';
import ScandiFilmDetails from './details/scandi-film-details';

function App() {
	return (
		<Router>
			<div className="app-container">
				<Route exact path="/" component={FilmCatalogGallery} />
				<Route exact path="/:filmId" component={ScandiFilmDetails} />
			</div>
		</Router>
	);
}
export default App;
