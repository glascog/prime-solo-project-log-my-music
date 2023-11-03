
# LogMyMusic

## Description

_Duration: 2 Week Sprint_

LogMyMusic is an app designed for music lovers who like to journal about the music they're listening to and keep track of their physical music collection in a digital space. Users can add albums to their online inventory, including as much information on the album as they like, and then log journal entries or notes on each album. 

## Screen Shots
<img width="200" alt="Screenshot 2023-11-03 at 6 26 57 PM" src="https://github.com/glascog/prime-solo-project-log-my-music/assets/116385698/4cd3f84a-6254-4feb-9fda-13d1bee48771">
<img width="200" alt="Screenshot 2023-11-03 at 6 32 44 PM" src="https://github.com/glascog/prime-solo-project-log-my-music/assets/116385698/ae3ab3e9-d9e8-4d4b-bf13-e55fbb754be3"><img width="200" alt="Screenshot 2023-11-03 at 6 29 31 PM" src="https://github.com/glascog/prime-solo-project-log-my-music/assets/116385698/aa02a362-588a-4abc-8563-cee219526daa">



## Technologies Used
Nodejs, JavaScript, HTML, CSS, Reactjs, Redux, PostgreSQL, Material UI, Figma (for wireframing)

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation
1. Fork the repository
2. Copy the SSH key in your new repository
3. Run this command in your terminal: `git clone {SSH key here}`  
4. Navigate to the repository's folder in your terminal
5. Open VS Code and open the project's folder
6. Run `npm install` in the VS Code terminal to install all dependencies
7. Create a `.env` file at the root of the project and paste these lines into the file. While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string. 

```
   SERVER_SESSION_SECRET=superDuperSecret
```
9. Create a database named `log_my_music`. If you would like to name your database something else, you will need to change `log_my_music` to the name of your new database name in `server/modules/pool.js`.
10. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
11. Run `npm run server` in your terminal
12. Run `npm run client` in your terminal
13. The `npm run client` command will open up a new browser tab for you!


## Usage

1. Navigate from the home page to the 'Add Album' page by clicking the button in the center of the screen
2. Type in the information for the album that you'd like to add and click 'Submit Album'
3. From the Album List View, click on the 'Add Note' icon
4. Make a note about the album, a particular track, or a listening experience
5. Use the bottom navigation bar to view your albums listed by album name or by artist name

## Acknowledgement
Thank you, [Prime Digital Academy](https://www.primeacademy.io/) for helping me make this application a reality. 


  
