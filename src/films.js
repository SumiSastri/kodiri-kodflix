import theHunt from './assets/the-hunt-scandinavian.jpg';
import bolgen from './assets/bolgen-film.jpeg';
import girlWithTheDragonTattoo from './assets/girl-with-the-dragon-tattoo-film.jpeg';
import snabbeCash from './assets/snabbe-cash-film.jpeg';
import trapped from './assets/trapped-film.jpeg';
import dicte from './assets/dicte-film.jpeg';

export default function getFilms(film) {
	return [
		{
			id: 'the-wave-film',
			name: 'Bolgen: The Wave',
			cover: bolgen,
			description: `The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`
		},
		{
			id: 'the-hunt-film',
			name: 'The Hunt',
			cover: theHunt,
			description: `The Hunt: Twelve strangers wake up in a clearing, they now have to prepare for the hunt,
but what (or who) is the prey?(Denmark)`
		},
		{
			id: 'girl-with-dragon-tattoo-film',
			name: 'The Girl With The Dragon Tattoo',
			cover: girlWithTheDragonTattoo,
			description: `Girl With The Dragon Tattoo: What happens when a journalist, computer hacker and
		sadist's fates are entagled with each other? (Sweden)`
		},
		{
			id: 'snabbe-cash-film',
			name: 'Snabbe-Cash: Quick Money',
			cover: snabbeCash,
			description: `Snabbe Cash: A student wants to make some easy money as a cab driver, it gets messy as
		the criminal underworld are his passengers(Sweden)`
		},
		{
			id: 'trapped-film',
			name: 'Trapped',
			cover: trapped,
			description: `Trapped: A multilated corpse is found by a fisherman, who does the headless, limbless
		body belong to?(Iceland)`
		},
		{
			id: 'dicte-tv-series',
			name: 'Dicte: Crime Reporter',
			cover: dicte,
			description: `Dicte: A divorced journalist goes back to her home town to make peace with her past, but
		things take an ugly turn (Denmark)`
		}
	];
}
