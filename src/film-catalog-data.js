import theHunt from './assets/the-hunt-scandinavian.jpg';
import bolgen from './assets/bolgen-film.jpeg';
import girlWithTheDragonTattoo from './assets/girl-with-the-dragon-tattoo-film.jpeg';
import snabbeCash from './assets/snabbe-cash-film.jpeg';
import trapped from './assets/trapped-film.jpeg';
import dicte from './assets/dicte-film.jpeg';

export default function getFilms() {
	return [
		{
			id: 'the-wave-film',
			name: 'the-wave',
			cover: bolgen,
			country: 'Norway',
			description: `A family get trapped when a landslide is caused by a tidal wave.`,
			review: `Nestled in Norway's Sunnmøre region, Geiranger is one of the 
			most spectacular tourist draws on the planet. With the mountain Åkerneset overlooking the village 
			- and constantly threatening to collapse into the fjord - it is also a place where cataclysm could 
			strike at any moment. After putting in several years at Geiranger's warning center, 
			geologist Kristian is moving on to a prestigious gig with an oil company. But the very day he's 
			about to drive his family to their new life in the city, Kristian senses something isn't right. 
			The substrata are shifting. No one wants to believe that this could be the big one ... `
		},
		{
			id: 'the-hunt-film',
			name: 'the-hunt',
			cover: theHunt,
			description: `Twelve strangers wake up in a clearing, they now have to prepare for the hunt,
but what (or who) is the prey?`,
			country: 'Norway'
		},
		{
			id: 'girl-with-dragon-tattoo-film',
			name: 'the-girl-with-the-dragon-tattoo',
			cover: girlWithTheDragonTattoo,
			description: `What happens when a journalist, computer hacker and
		sadist's fates are entagled with each other?`,
			country: 'Sweden'
		},
		{
			id: 'snabbe-cash-film',
			name: 'snabbe-cash',
			cover: snabbeCash,
			description: `A student wants to make some easy money as a cab driver, it gets messy as
		the criminal underworld are his passengers`,
			country: 'Sweden'
		},
		{
			id: 'trapped-film',
			name: 'trapped',
			cover: trapped,
			description: `A multilated corpse is found by a fisherman, who does the headless, limbless
		body belong to?`,
			country: 'Iceland'
		},
		{
			id: 'dicte-tv-series',
			name: 'dicte',
			cover: dicte,
			description: `A divorced journalist goes back to her home town to make peace with her past, but
		things take an ugly turn`,
			country: 'Denmark'
		}
	];
}
