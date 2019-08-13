
## Kodiri-Kodflix Challenge 2-11
Add 5 more images
Display them in 2 rows 
3 covers per row with the same aspect ratio
Mobile first design
CSS animation - hover over images
Show the title of the film on hover
Scale the app by making reusable components

#### Tech acceptance
Create a grid of 6 elements 
distributed across 2 rows 
with 3 covers
The items must have the same height and width (aspect ratio)
The films will stack up one on top of the other
Fix this with FlexBox for desktop
Reverse this with FlexBox for mobile 640 screen size and below
When the user hovers over the film
The title of the film in text should be visible
When the user moves mouse away the text should not be visible
Make a reusable component for each film

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
Set up the jsx containers - main for the whole project
2 rows - row1 and row2 as the row containers
give each div that holds the images a class name
use the class name in css to use flex box

To understand the working of the box-model in css and css grid, put the h1 into a header tag and put it in another color

You can run a border around the two rows as well if it makes it easier to understand the box model, but the layout could become too cluttered, I used light color and 1px to display the row grid lines

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

give the film covers a generic name to reduce styling repetion, and change the position to relative. The title of the film in the h5 jsx tag is relative to the film cover position, the film cover position remains absolute 

```
.film-cover {
	flex: 1;
	position: relative;
}
```
position the overlay to absolute to pair the parent div with the child element

```
.film-title-overlay {
	transition: bottom ease 1s;
	display: none;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
```
connect the two with a show - hide or display none and display block

```
.film-cover:hover .film-title-overlay {
	display: block;
}
```
#### Summary:
Flex alters the default behaviour of jsx-html tags
By putting elements into a container, each container you display flex
The elements then gets them into rows
Each child element flex 1 give you the same column width
The image aspect-ratios can be managed with auto or specifying size
The image aspect-ratios need to be changed when you add text as the text now relative to the image occupies a certain height and width that eats into the space.
To understand the css box-model it is useful to put a border around the image

```
img {
	width: 65%;
	height: 75%;
	padding: 45px;
	border: dashed 2px #000080;
}
```
Media display changed with a mobile-first design, flex direction changed back to default - coloumns

```
@media only screen and (max-width: 640px) {
	.row1,
	.row2 {
		flex-direction: column;
	}
}
```



### Elegance and refactoring

Right click on the app.js file and select the formatter you want to use, set to default and to update formatting on save
Remove all empty spaces
Check naming conventions
Experiment by commenting out unecessary code, styling
Remove all commented out code and refactor where needed
Add custom fonts, colours and check look and feel of ui before commiting changes
