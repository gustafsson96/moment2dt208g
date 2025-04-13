# Programmering i TypeScript (DT208G) Moment 2
This project makes up my contribution for "Moment 2 - Objektorienterad programmering" for the course "Programmering i TypeScript" at Mittuniversitet, Sweden.
<br>
**Link to deployed site: [Todo App](https://dt208gmoment2.netlify.app)** 

## Overview
This project is a To-do list application built using TypeScript and Object Oriented Programming (OOP) principles. The application allows a user to add, toggle status (completed/not completed) of and remove to do tasks with a priority order from 1 to 3. The data is saved to local storage. 

## Installation

The following steps should be taken to set up this project locally: 

1. Clone the repository: git clone https://github.com/gustafsson96/moment2dt208g.git

2. Navigate to project directory and ensure that Node.js is installed before installing necessary dependencies by running: npm install

3. Start the development server by running: npm run dev

## Features
* Add a new task with a priority (1 to 3).
* Mark a task as completed (and change back to not completed if needed). 
* Remove tasks from the list. 
* Saving data using local storage. 
* Display success or error messages for user feedback. 

## Technologies Used
* **TypeScript** for functionality and OOP principles.
* **Vite** as the development build tool and to transpile TypeScript to JavaScript.
* **Local Storage** for data storage across sessions. 
* **HTML** for basic structures. 
* **CSS** for styling. 

## Testing
* The HTML has been validated using [W3C's Markup Validation Service](https://validator.w3.org/) with no errors to report. 
* The CSS has been validated using [W3C's CSS Validation Service](https://jigsaw.w3.org/css-validator/validator.html.en) with no errors to report.
* The applications functionality has been tested manually by the developer. 

## Deployment
The project has been deployed to [Netlify](https://www.netlify.com) by the steps presented below. 

1. Build project by running the command: npm run build.
2. Navigate to Netlify and log in to account (or sign up if you don't already have one).
3. Click "Add new site" and select "Import an existing project". Select GitHub.
4. Connect the projects GitHub repository.
5. Set site name and ensure following settings are set for Build settings:
* Branch to deploy: main (default)
* Build command: npm run build
* Publish directory: dist
6. Click Deploy "project-name". 