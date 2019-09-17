# Kodiri-Kodflix 

Kodflix is a student project to display a film catalog using the MERN stack (Mongo, Express, React & Node).  I chose Scandinavian Noir as a genre for the project.

![kodiri-kodflix-film-catalog-challenges](src/assets/project-screenshot.png)

## Table of Contents
Part 1
* Learning objectives
* What is JSX
* Styling & React 1: CSS-Flexbox 
* Styling & React 2: CSS-Grid
* Stateless or Functional Components
* Stateful Components & Data Models
* Routing
* Deploying to Heroku 

Part 2:
* Project Roadmap
* Set up & scaffolding
* List of challenges from scaffolding to deploy
* Images and resources


### Learning objectives

Kodiri is project-based evening class for JavaScript and React. After graduating from General Assembly, I wanted to work on embedding vanilla javascript and React with another project-based evening course. 

I wanted to review how vanilla javascript is used under the hood of the React Library, this read-me therefore focuses more on this aspect of React rather than the how this project was built. 

### What is JSX?

React is a javascript library that uses JSX tags. JSX mimics HTML but is not HTML, it is JavaScript.

JSX mimics HTML & XML and pre-processors, like Babel, transpile the JSX and convert it to JavaScript objects. JavaScript engines then parse the transpiled JSX. 

JSX allows you to write exactly the same tags as HTML, mimicking the document object model structure.

 React enables this process with a React.createElement() method.

JSX elements take attributes that can be styled by are called className not class as class reserved word for constructors in javascript. JSX always has to have 1 root element (div/ main/ section) that encloses the block of code.

More on React here: [https://www.reactenlightenment.com/]

### Stateless, Functional, Presentational or Dumb Components

Stateless or functional components, use functions to present or render JSX elements. They are also known as presentational components as they are used for pure rendering of pages like
- Forms
- Nav bars
- buttons
- Pages that are used again and again

Because they only render something that is passed down as a prop and do no work except render the properties passed down from another component they are also sometimes called a dumb components. 

### React classes, components and constructors

Every React component is a constructor object that allows you to export a copy of the component into other parts of the application.

By importing the Component constructor from the React library we create new classes of components that inherit the properties of the parent React Component.

We therefore import the component constructor from the react library first

```
import React, {Component} from ‘react’
```
Then we declare/ intantiate the new class of component which extends all the functionality of the parent react component, this is similar to intantiation of a factory component. The React higher order component has baked in methods like the React.createElement() method which transpiles JSX into a JavaScript object.

```
The class NewComponent extends React.Component {
 - here it creates a new component which can be rendered through the react render function

render() {
     return( JSX tags to render a DOM-like structure of the page. The DOM-like structure can be exported to other parts of the app and app.js the root js page. This is finally mapped to the root HTML where it is rendered for browser engines to parse);
 }
}

Export default NewComponent;
```
They can be written as anonymous functions but they will not be hoisted Must have a render function that returns something

```
const NewComponent = (properties) => { 
  return ( properties that have been passed down from the component you are extending )
}
```

## Routing

React does not come with routing out of the box, it has to be installed in a project [yarn add react-router-dom] and the router needs to be imported as well as other higher order components that enable routing, remembering routing history and connecting and linking pages.

Get the id of the object - go to App.js and the route ```<Route exact path="/:filmId" component={ScandiFilmDetails} />```

Access the id with the method ```let filmId = this.props.match.params.filmId;```

```npm run start --no cache```

## Project RoadMap

##### Set up 
[npx create-react-app app-name]
[yarn add react-router-dom]
##### List of Challenges from scaffolding to deploy
##### Challenges 1-14 Stateless Components
* Challenge 1: Clean up react app display 'hello world'
* Challenge 2: Set up your Kodiri-Kodflix project title
* Challenge 3: Add one image
* Challenge 4: Add 5 more images
* Challenge 5: Display them in 2 rows 
* Challenge 6: Display 3 covers per row with the same aspect ratio
* Challenge 7: Mobile first design
* Challenge 8: CSS animation - hover over images
* Challenge 9: Show the title of the film on hover
* Challenge 10: Scale the app by making reusable components
* Challenge 11: Make a new component for the gallery
* Challenge 12: Add routing to create one page that links to a details page
* Challenge 13: Add routing to many pages
* Challenge 14: Layout with CSS-Grid
##### Challenges 15-20 Stateful Components & Data Models
* Challenge 15: Creating an array of objects for the images, text
* Challenge 16: Creating stateful components
* Challenge 17: Individual pages for each movie
* Challenge 18: Create a not-found page
* Challenge 19: Style the movie-component page
* Challenge 20: Deploy to Heroku

#### Resources

Image resources
* Google
* ImDB
* VectorStock
* Imgur

Icons resources
* FlatIcons
* Icon Monster
* Font Awesome
* Devicons

Fonts resources
* Google Fonts

CSS frameworks
 * CSS Grid
 * CSS Flexbox

#### Scaffolding, basic styling: Challenges 1-10

* Set up the jsx containers - main for the whole project
* 2 rows - row1 and row2 as the row containers
* give each div that holds the images a class name
* use the class name in css to use flex box
* To understand the working of the box-model in css and css grid, put the h1 into a header tag and put it in another color
* You can run a border around the two rows as well if it makes it easier to understand the box model, but the layout could become too cluttered, I used light color and 1px to display the row grid lines that is only just visible to the eye, but gives me an understanding of the different boxes in the css-box model. This will be removed as a last step.

```
.header {
	background: lightslategray;
}

h1 {
	text-align: center;
	color: blanchedalmond;
	font-family: 'Lacquer', sans-serif;
}

.row1,
.row2 {
	display: flex;
	align-items: auto;
	padding: 5px;
	margin: 5px;
}
```

* give the film covers a generic name to reduce styling repetion, and change the position to relative. The title of the film in the h5 jsx tag is relative to the film cover position, the film cover position remains absolute 

```
.film-cover {
	flex: 1;
	position: relative;
}
```
* position the overlay to absolute to pair the parent div with the child element

```
.film-cover-overlay {
	transition: top ease 1s;
	display: none;
	position: absolute;
	width: 100%;
	top: -10px;
	right: 0;
	background-color: blanchedalmond;
	width: 65%;
	align-content: center;
	opacity: 0.7;
}
```
* connect the two with a show - hide or display none and display block and hide the overflow

```
.film-cover:hover .film-cover-overlay {
	display: block;
	top: 0;
}

.film-cover {
	flex: 1;
	position: relative;
	overflow: hidden;
}
```
* Media display changed with a mobile-first design, flex direction changed back to default - coloumns*

```
@media only screen and (max-width: 640px) {
	.row1,
	.row2 {
		flex-direction: column;
	}
}
```
### Refactoring challenges 10-12
* Create your component by taking the original jsx structure
* Refactor with props - rename the alt, src, jsx h5 tags 

```
import React from 'react';

function FilmCatalog(props) {
	return (
		<div className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</div>
	);
}

export default FilmCatalog;
```
* connect them to the parent which is App.js At this stage, you can not have individual names for the covers, descriptions as this will be difficult to scale, so remove the original jsx individual names and descriptions, alt tags etc., so that any film  in the films container can be easily updated.

```
<main className="films-container">
				<div className="row1">
					<FilmCatalog
						cover={bolgen}
						description={`The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`}
					/>
```	

### Routing with React Router (12 & 13)
* Install the router and import it into the app [yarn add react-router-dom]
* Import the router into the project
* The React-Router needs to be imported once in the main app
* It is important to check the version - the version in this app is 5
* Renaming the BrowserRouter to Router assigns it to a shorter value that you can import 

```
import { BrowserRouter as Router, Route } from 'react-router-dom';
```

* It becomes like any other component to import with one important difference there can only be one parent which is the router that wraps the whole app and all the paths in it, the Route component allows you to specify the path, the exact path ```/ ```and the wild card path ```/:``` that shows paths with ids

```
function App() {
	return (
		<Router>
			<div className="app-container">
				<Route exact path="/" component={FilmCatalogGallery} />
				<Route exact path="/:" scandi-film-details" component={ScandiFilmDetails} />
			</div>
		</Router>
	);
}
export default App;
```

You can link pages with the Link component from the library and then use the Link component

```
import { Link } from 'react-router-dom';
```

```
function FilmCatalog(props) {
	return (
		<Link to="/scandi-film-details" className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={props.cover} />
			<div className="film-cover-overlay">
				<h5>{props.description}</h5>
			</div>
		</Link>
	);
}

export default FilmCatalog;
```

## Challenge 15 - data models

From hard coding data we can create a function called getFilms to access this data, all the function does is return the data as an array so that we can use array methods to access each element of the array

```
export default function getFilms() {
	return [
		{
			id: 'the-wave-film',
			name: 'the-wave',
			cover: bolgen,
			description: `The Wave: A family get trapped when landslide is caused by a tidal wave.(Norway)`
		},
	]
	```
## Challenge 16 	
 
 In another component you can use array.map() method to display each film again

 ```
 <div className="film-covers-container">
				{getFilms().map((films) => {
					return (
						<FilmCatalog key={films.id} 
						id={films.id} cover={films.cover} 
						description={films.description} />
					);
				})}
			</div>
```			



## Challenge 16-17 stateful components with individual pages

Display the id of the page - open App.js the routing component, use lifecycle method componentDidMount

### Elegance and refactoring
* Right click on the app.js file and select the formatter you want to use, set to default and to update formatting on save
* Remove all empty spaces
* Check naming conventions
* Experiment by commenting out unecessary code, styling
* Remove all commented out code and refactor where needed
* Add custom fonts, colours and check look and feel of ui before commiting changes
* Make the code simpler and ('DRY-er')
For example I changed the image sizes a few times - this is the change made for challenge 8

```
img {
	width: 65%;
	height: 75%;
	padding: 45px;
	border: dashed 2px #000080;
}
```
