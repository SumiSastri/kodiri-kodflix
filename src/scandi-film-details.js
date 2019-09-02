import React from 'react';
import { Link } from 'react-router-dom';

// export default function ScandiFilmDetails() {
// 	return (
// 		<Link to="/">
// 			<div className="scandi-film-details">
// 				<h1>All you ever wanted to know about Scandinavian Noir</h1>
// 				<h4>Page under construction</h4>
// 			</div>
// 		</Link>
// 	);
// }

export default class ScandiFilmDetails extends React.Component {
	render() {
		return (
			<Link to="/">
				<div className="scandi-film-details">
					<h1>All you ever wanted to know about Scandinavian Noir</h1>
					<h4>Page under construction</h4>
				</div>
			</Link>
		);
	}
}
