
## Kodiri-Kodflix Challenge 2, 3 & 4

Add 5 more images
Display them in 2 rows 
3 covers per row with the same aspect ratio
Mobile first design

#### Tech acceptance
Create a grid of 6 elements 
distributed across 2 rows 
with 3 covers
The items must have the same height and width (aspect ratio)
The films will stack up one on top of the other
Fix this with FlexBox for desktop
Reverse this with FlexBox for mobile 640 screen size and below

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

```
h1 {
    text-align: center;
}
```

```
.row1,
.row2 {
    display: flex;
}
```
```
.bolgen,
.the-hunt,
.girl-with-the-dragon-tattoo,
.snabbe-cash,
.trapped,
.dicte {
    flex: 1;
}
```

#### Summary:
Flex alters the default behaviour of jsx-html tags
By putting elements into a container, each container you display flex
The elements then gets them into rows
Each child element flex 1 give you the same column width
The image aspect-ratios can be managed with auto or specifying size

```
img {
	width: 75%;
	height: 95%;
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
