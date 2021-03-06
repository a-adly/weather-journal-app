# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

To run this app fork, clone, or download this repository to your local machine. You will need to install the npm packages used in this app. Open the terminal and change to the directory location of this app. Run the following commands:

* npm install express
* npm install cors
* npm install body-parser

When those are installed run `node server.js` in the terminal. Once the app is running visit localhost:3000 in the browser to view the app. The user can input a zip code and current feelings into the provided fields. Submitting the form will send a request to the OpenWeatherMap API and return weather information for that location.

## Dependencies

The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

* HTML
* CSS
* Javascript
* NodeJS
* ExpressJS
* Weather API used [OpenWeatherMap](https://openweathermap.org/).

### Node and Express Environment
In this project we are using Node and Express environemnts. Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
The Express app instance should be pointed to the project folder with .html, .css, and .js files.


### Local Server
Local server should be running and producing feedback to the Command Line through a working callback function.