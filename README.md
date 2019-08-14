
## Kodiri-Kodflix Challenge 2-11
![kodiri-kodflix-film-catalog-challenges](src/assets/project-screenshot.png)

### Set up
[npx create-react-app app-name]
[yarn add react-router-dom]

### Challenges 1-11
* Clean up react app
* Set up your Kodiri-Kodflix project title
* Add one image
* Add 5 more images
* Display them in 2 rows 
* Display 3 covers per row with the same aspect ratio
* Mobile first design
* CSS animation - hover over images
* Show the title of the film on hover
* Scale the app by making reusable components
* Make a new component for the gallery
* Add routing to create individual pages/ urls

#### Image resources
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
Google Fonts

### React
Solutions: -
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
#### Summary:
* Flex alters the default behaviour of jsx-html tags
* By putting elements into a container, each container you display flex
* The elements then gets them into rows
* Each child element flex 1 give you the same column width
* The image aspect-ratios can be managed with auto or specifying size
* The image aspect-ratios need to be changed when you add text as the text now relative to the image occupies a certain height and width that eats into the space.
* To understand the css box-model it is useful to put a border around the image
* Animations like transitions need to be planned, I used a description on hover to give a brief idea of what the film is about as a better ui experience for those not familiar with Scandi-noir


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

### Components
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
### Routing with React Router

* Install the router and import it into the app