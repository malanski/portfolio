
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiIcon from '../../../src/assets/APIlogo.png';
import { faCss3, faCss3Alt, faHtml5, faJs, faReact, faSass, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCircleCheck, faDatabase, faGamepad, faList, faPerson, faSearch, faT } from '@fortawesome/free-solid-svg-icons';

const listProjects = [
  {
    name:"Fullstack CRUD Form",
    describe: "Client Management API",
    skills: "ReactJs + MUI + Yup + NoSQL + Node",
    type: "Fullstack Form",
    repositoryLink: "https://github.com/malanski/fullstack-crud",
    deployLink: "https://fullstack-crud-malanski.vercel.app/#/",
    image: "https://github.com/malanski/images/raw/main/crudFullStack.png",
    imgAlt: "A fullstack form web page print screen",
    details: "Fullstack project that implement a Client Management API using Node.js and the Express framework. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on client records stored in a MongoDB database. ",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faDatabase} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Task Organizer",
    describe: "Create tasks and organize to-do items",
    skills: "TypeScript + HTML + CSS",
    type: "Task Manager",
    repositoryLink: "https://github.com/malanski/vite-project-one",
    deployLink: "https://vite-project-one-malanski.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/todoTask.png",
    imgAlt: "A task Organize",
    details: "A frontend application built with TypeScript, Vite, React, and CSS to create a simple Todo List app. The app allows users to register and manage their tasks, creating TODO lists to stay organized and productive.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faT} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faCircleCheck} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Memory Game",
    describe: "Album covers based memory game",
    skills: "JavaScript + HTML + CSS",
    type: "Game",
    repositoryLink: "https://github.com/malanski/memory-game",
    deployLink: "https://malanski.github.io/memory-game/",
    image: "https://github.com/malanski/images/raw/main/memory-game.png",
    imgAlt: "A memory game javascript app",
    details: "A JavaScript-based Memory Game, where the player needs to match pairs of cards with identical images. The game tracks the number of moves (tentativas) taken by the player and displays different messages based on their performance. The game is won when all pairs are matched successfully.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Poke-Store",
    describe: "Web Store Consuming Pokémon API",
    skills: "NextJs + Sass + Chakra Ui + SWR",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/poke-store-next",
    deployLink: "https://poke-store-next.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/pokeStoreNext.png",
    imgAlt: "Pokémon API based Web store print screen",
    details: "An e-commerce web store built using ReactJS, NextJS, SASS, SWR, Chakra UI, FontAwesome, Node, JavaScript.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faSass} className="iconBall" />,
    }
  },
  {
    name:"Weather Weekly",
    describe: "Consuming Weather API",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://github.com/malanski/weather-weekly",
    deployLink: "https://malanski.github.io/weather-weekly/",
    image: "https://github.com/malanski/images/raw/main/weather-weekly.png",
    imgAlt: "Web app consuming weather API",
    details: "A web application that utilizes the OpenWeatherMap API to fetch weather data based on the user's geolocation. The app displays daily weather forecasts for the current location, including information such as day of the week, weather description, icon representation, sunrise, sunset, high and low temperatures, humidity, wind speed, and wind gusts.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Star Wars Characters",
    describe: "API search consuming swapi.dev",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://github.com/malanski/star-wars-api",
    deployLink: "https://malanski.github.io/sintaxe-e-operadores/",
    image: "https://github.com/malanski/images/raw/main/starwars1.png",
    imgAlt: "Web app consuming Star Wars characters list API",
    details: "This is a simple web application that fetches a random character from the Star Wars universe using the Star Wars API (SWAPI). The app allows users to toggle between light and dark modes for a better user experience.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Color Guessing Game",
    describe: "Game based on RGB code numbers",
    skills: "JavaScript + HTML + CSS",
    type: "Game",
    repositoryLink: "https://github.com/malanski/GessingColorGame",
    deployLink: "https://malanski.github.io/GessingColorGame/",
    image: "https://github.com/malanski/images/raw/main/color-guessing.png",
    imgAlt: "Web game RGB code numbers guessing",
    details: "This is a Game based on the R.G.B. colors numbers. You have to gess what is the right color.When you gess it right all the block reveal the color and you have to reset the game to continue playing.",    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Spotify Playlists",
    describe: "Consuming the Spotify Playlist API",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://github.com/malanski/spotify-client",
    deployLink: "https://malanski.github.io/spotify-client/",
    image: "https://github.com/malanski/images/raw/main/spotify-client.png",
    imgAlt: "Web app consuming API layout",
    details: "This is a simple app that utilizes the Spotify API to fetch and display information about music genres, playlists, and tracks. The app is built using JavaScript and does not require any server-side code as it directly interacts with the Spotify API.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      // fontFour: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
    }
  },
  {
    name:"Meteorites on Earth",
    describe: "Nasa registry about meteorites that fell to earth",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://codepen.io/malanski/pen/xxYGmYY",
    deployLink: "https://codepen.io/malanski/full/xxYGmYY",
    image: "https://github.com/malanski/images/raw/main/Meteor.png",
    imgAlt: "Web app of meteorites that fell to earth",
    details: " ",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Stopwatch",
    describe: "Js Stopwatch",
    skills: "ReactJs + Sass",
    type: "Clock",
    repositoryLink: "https://github.com/malanski/cron",
    deployLink: "https://node-example-uli.herokuapp.com/",
    image: "https://github.com/malanski/images/raw/main/CronReactJS.png",
    imgAlt: "Stopwatch web app",
    details: "This project is a part of the Web Development Course at Awari School. The objective of this project is to create a JavaScript chronometer using React, with additional styling and icons from Font Awesome. The chronometer counts seconds, minutes, and hours as long as the page stays open, without consuming background processing.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faSass} className="iconBall" />,
    }
  },
  {
    name:"Wiki Search",
    describe: "Remotely search the wikipedia",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://codepen.io/malanski/pen/xxYGBqw",
    deployLink: "https://codepen.io/malanski/full/xxYGBqw",
    image: "https://github.com/malanski/images/raw/main/Wiki.png",
    imgAlt: "Web app to remotely search the wikipedia",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faSearch} className="iconBall" />,
      fontTwo:  <FontAwesomeIcon icon={faWikipediaW} className="iconBall" />,
      fontThree:  <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Quote Generator",
    describe: "Using a remote Json file with quotes to fetch them ramdomly",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://codepen.io/malanski/pen/QWQjgaZ",
    deployLink: "https://codepen.io/malanski/full/QWQjgaZ",
    image: "https://github.com/malanski/images/raw/main/Quote.png",
    imgAlt: "Quote Generator using a remote JSON file",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faSearch} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faDatabase} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"PokeCardGameBoy Store",
    describe: "Consuming the pokapi - Pokémon API",
    skills: "JavaScript + HTML + CSS",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/pokeLoja2",
    deployLink: "https://malanski.github.io/pokeLoja2/",
    image: "https://github.com/malanski/images/raw/main/pokestore1.png",
    imgAlt: "Pokémon card game styled web store",
    details: "This is one of my first application projects creating a responsive Ecommerce website using HTML, CSS - SASS, JavaScript and API. The project's teacher is Henrique Marques. I decided to take inspiration from the Pokémon card game to display the most relevant images found in the API.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Tic-tac-toe Game",
    describe: "Playable tic-tac-toe",
    skills: "JavaScript + HTML + CSS",
    type: "Game",
    repositoryLink: "https://codepen.io/malanski/pen/qBxOVvq",
    deployLink: "https://codepen.io/malanski/full/qBxOVvq",
    image: "https://github.com/malanski/images/raw/main/XGame.png",
    imgAlt: "Web tic-tac-toe app game",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Calculator",
    describe: "Basic JS Operators an functions",
    skills: "JavaScript + HTML + CSS",
    type: "Calculator",
    repositoryLink: "https://github.com/malanski/CalculatorX",
    deployLink: "https://malanski.github.io/CalculatorX/",
    image: "https://github.com/malanski/images/raw/main/calculator.png",
    imgAlt: "Web calculator app layout",
    details: "CalculatorX is a responsive web application built using HTML, CSS (SASS), and JavaScript. The project aims to create an online calculator that performs basic arithmetic calculations. It allows users to input numbers and perform operations like addition, subtraction, multiplication, and division.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faCalculator} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"SPC styled Tribute Page",
    describe: "Basic HTML clean coding",
    skills: "HTML + CSS",
    type: "Tribute Page",
    repositoryLink: "https://codepen.io/malanski/pen/qBxEVMP",
    deployLink: "https://codepen.io/malanski/full/qBxEVMP",
    image: "https://github.com/malanski/images/raw/main/TributePage.png",
    imgAlt: "Beakman's SPC styled Tribute Page",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faPerson} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />,
    }
  },
  {
    name:"A Complete HTML Form",
    describe: "Form elements and HTML clean coding",
    skills: "HTML + CSS",
    type: "Frontend Form",
    repositoryLink: "https://github.com/malanski/courses-rank",
    deployLink: "https://malanski.github.io/courses-rank/",
    image: "https://github.com/malanski/images/raw/main/CoursesRank.png",
    imgAlt: "Beakman's SPC styled Tribute Page",
    details: "This is a ReactJs Application to rate Online courses. A place for costumers/students evaluate their Institutions/Schools.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faList} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />,
    }
  },

];
export default listProjects;