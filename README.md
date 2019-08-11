#### Set up

Create react app - npx create-react-app Kodiri-Kodflix
Clean up the app.js and app.css files
Remove the react styling in app.css and app.js files
Ensure you have the parent div set up
Create h1 jsx tags
Render Kodiri-Kodflix in the tag
run yarn start to see the files in local host :3000

## Kodiri-Kodflix Challenge 1

Add an image of a film and make it cover 100% of the screen
Steps - select picture and save in assets folder
Ensure you have the react library and app.css imported

```
import React from 'react';
import './App.css';
```
 Import the image into App.js
 Naming conventions - camelCase
 javaScript is case sensitive
 Import app.css 

 ```
 import theHunt from './assets/the-hunt-scandinavian.jpg';

 ```

 Render in an img jsx tag, add an alt tag for the image, to avoid a compiling warning

 ```
 	<img alt="the-hunt-film" src={theHunt} />
  
  ```   
Style the image
Steps: go into App.css
select the class name or the ids and style the image and text

```
h1 {
	text-align: center;
}
img {
	width: 100%;
}
```