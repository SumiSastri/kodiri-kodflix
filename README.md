
## Kodiri-Kodflix Challenge 2

Add 5 more images
Display them in 2 rows 
3 covers per row with the same aspect ratio

#### Tech acceptance
Create a grid of 6 elements 
distributed across 2 rows 
with 3 covers
The items must have the same height and width (aspect ratio)
The films will stack up one on top of the other
Fix this with FlexBox


#### Image resources
Google
ImDB

Icons resources
FlatIcons
Font Awesome


### React

Set up the jsx containers - main for the whole project
2 rows - row1 and row2 as the row containers
give each div that holds the images a class name
use the class name in css to use flex box

```
h1 {
    text-align: center;
}

img {
    width: 75%;
}

.row1,
.row2 {
    display: flex;
}

.bolgen,
.the-hunt,
.girl-with-the-dragon-tattoo,
.snabbe-cash,
.trapped,
.dicte {
    flex: 1;
}
```

Summary:
Flex alters the default behaviour of jsx-html tags
By putting elements into a container, each container you display flex
The elements then gets them into rows
Each child element flex 1 give you the same column width

