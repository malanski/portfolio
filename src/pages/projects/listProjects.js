
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiIcon from '../../../src/assets/APIlogo.png';
import { faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCircleCheck, faDatabase, faGamepad, faN, faT } from '@fortawesome/free-solid-svg-icons';

const listProjects = [
  {
    name:"Client Management",
    describe: "A form that allows the creation, reading, updating, and deletion of customer data.",
    skills: "ReactJs + MUI + Yup + NoSQL + Node",
    type: "Fullstack CRUD form",
    repositoryLink: "https://github.com/malanski/fullstack-crud",
    deployLink: "https://fullstack-crud-malanski.vercel.app/#/",
    image: "https://github.com/malanski/images/raw/main/crudFullStack.png",
    imgAlt: "A web page print screen for a form",
    details: "a full-stack project that uses the Express framework and Node.js to construct a Client Management API. Using the API, users can create, read, update, and delete client records that are kept in a MongoDB database.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faDatabase} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Coffee Delivery",
    describe: "An E-commerce app for delivering coffee.",
    skills: "TypeScript + React + Styled-components",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/coffee-delivery",
    deployLink: "https://coffee-delivery-malanski.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/coffee-delivery.png",
    imgAlt: "Coffee delivery app print screen",
    details: "a frontend e-commerce app built with TypeScript, React, and styled-components, has purchase forms with validation using react hook forms in conjunction with Zod.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faT} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Movie Info",
    describe: "Utilize the TMDB API to search for various types of data, including movie rankings.",
    skills: "TypeScript + Next + Chakra UI",
    type: "Search",
    repositoryLink: "https://github.com/malanski/movie-info",
    deployLink: "https://movie-info-malanski.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/movieinfo.jpg",
    imgAlt: "Movie info search",
    details: "a frontend app built with TypeScript, React, Next, and Chakra UI populated with TMDB API. The app allows users to search movies information and shows them by popularity.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faT} className="iconBall" />,
      fontTwo: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Malanski Art Store",
    describe: "E-commerce based my On-demand web store",
    skills: "TypeScript + Vite + React + Styled-Components",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/malanski-art-store",
    deployLink: "https://malanski-art-store-malanski.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/malanskiArtStore.png",
    imgAlt: "Malanski Art Store app screenshot",
    details: "build with Typescript, React, Vite and Styled-Components. Users can access selected product and buy them at Colab 55, a on-demand platform.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faT} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faCircleCheck} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
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
    details: "a frontend application for a straightforward to-do list created with TypeScript, Vite, React, and CSS. Users can create TODO lists and register tasks on the app to keep organized and productive.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faT} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faCircleCheck} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  // {
  //   name:"Quote Generator",
  //   describe: "Fetching quotes randomly",
  //   skills: "TypeScript + React + Vite + Jquery",
  //   type: "Search",
  //   repositoryLink: "https://quote-gen-red.vercel.app/",
  //   deployLink: "https://quote-gen-red.vercel.app/",
  //   image: "https://github.com/malanski/images/raw/main/Quote.png",
  //   imgAlt: "Quote Generator using a remote JSON file",
  //   details: "A React application that generates random quotes. Each time you click the `New quote` button, a new quote will be displayed along with the author. You can also share the quotes on Twitter or Tumblr using the provided buttons.",
  //   badgeFont: {
  //     fontOne: <FontAwesomeIcon icon={faJ} className="iconBall" />,
  //     fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
  //     fontThree: <FontAwesomeIcon icon={faT} className="iconBall" />,
  //   }
  // },
  {
    name:"Memory Game",
    describe: "Memory game using album covers from music bands",
    skills: "JavaScript + HTML + CSS",
    type: "Game",
    repositoryLink: "https://github.com/malanski/memory-game",
    deployLink: "https://malanski.github.io/memory-game/",
    image: "https://github.com/malanski/images/raw/main/memory-game.png",
    imgAlt: "A memory game javascript app",
    details: "an app where matching pairs of cards with the same images is required in this JavaScript-based memory game. The number of moves (tentativas) made by the player is recorded by the game, and various messages are shown to them depending on how well they perform. When all pairings are correctly matched, the game is over.",
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
    details: "an e-commerce web store built using ReactJS, NextJS, SASS, SWR, Chakra UI, FontAwesome, Node, JavaScript.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faN} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
    }
  },
  {
    name:"Weather Weekly",
    describe: "Shows the local weather of the week",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://github.com/malanski/weather-weekly",
    deployLink: "https://malanski.github.io/weather-weekly/",
    image: "https://github.com/malanski/images/raw/main/weather-weekly.png",
    imgAlt: "Web app consuming weather API",
    details: "a website that makes use of the OpenWeatherMap API to retrieve weather information according to the user's location. The app shows daily weather forecasts for the user's current location, along with details like the day of the week, a description of the weather, a symbol to represent it, sunrise and sunset times, high and low temperatures, humidity levels, wind speed, and wind gusts.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
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
    details: "an app using the Star Wars API (SWAPI), this straightforward web application pulls a random character from the Star Wars universe. For a better user experience, the app lets users switch between light and dark settings.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Color Guessing Game",
    describe: "a game based on guessing colors RGB code",
    skills: "JavaScript + HTML + CSS",
    type: "Game",
    repositoryLink: "https://github.com/malanski/GessingColorGame",
    deployLink: "https://malanski.github.io/GessingColorGame/",
    image: "https://github.com/malanski/images/raw/main/color-guessing.png",
    imgAlt: "Web game RGB code numbers guessing",
    details: "based on R.G.B. color codes. You have to decide what color is appropriate.When you get it correctly, every block reveals its color, and you have to start again to play again.",
      badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  // {
  //   name:"Spotify Playlists",
  //   describe: "Consuming the Spotify Playlist API",
  //   skills: "JavaScript + HTML + CSS",
  //   type: "Search",
  //   repositoryLink: "https://github.com/malanski/spotify-client",
  //   deployLink: "https://malanski.github.io/spotify-client/",
  //   image: "https://github.com/malanski/images/raw/main/spotify-client.png",
  //   imgAlt: "Web app consuming API layout",
  //   details: "This is a simple app that utilizes the Spotify API to fetch and display information about music genres, playlists, and tracks. The app is built using JavaScript and does not require any server-side code as it directly interacts with the Spotify API.",
  //   badgeFont: {
  //     fontOne: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
  //     fontTwo: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
  //     fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
  //     // fontFour: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
  //   }
  // },
  // {
  //   name:"Meteorites on Earth",
  //   describe: "Fetching data over a world map",
  //   skills: "JavaScript + HTML + CSS",
  //   type: "Search",
  //   repositoryLink: "https://codepen.io/malanski/pen/xxYGmYY",
  //   deployLink: "https://codepen.io/malanski/full/xxYGmYY",
  //   image: "https://github.com/malanski/images/raw/main/Meteor.png",
  //   imgAlt: "Web app of meteorites that fell to earth",
  //   details: "This project is a web page shows Nasa registry about meteorites that fell to earth.",
  //     badgeFont: {
  //     fontOne: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
  //     fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
  //     fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
  //   }
  // },
  {
    name:"Stopwatch",
    describe: "A chronometer build using JavaScript and React",
    skills: "ReactJs + Sass",
    type: "Clock",
    repositoryLink: "https://github.com/malanski/cron",
    deployLink: "https://malanski.github.io/cron/",
    image: "https://github.com/malanski/images/raw/main/CronReactJS.png",
    imgAlt: "Stopwatch web app",
    details: "a chronometer and the goal of this project was to build a React-based JavaScript clock with additional aesthetics and Font Awesome icons. As long as the page is active, the chronograph keeps track of seconds, minutes, and hours without using background processing.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faSass} className="iconBall" />,
    }
  },
  // {
  //   name:"Wiki Search",
  //   describe: "Remotely search the wikipedia",
  //   skills: "JavaScript + HTML + CSS",
  //   type: "Search",
  //   repositoryLink: "https://codepen.io/malanski/pen/xxYGBqw",
  //   deployLink: "https://codepen.io/malanski/full/xxYGBqw",
  //   image: "https://github.com/malanski/images/raw/main/Wiki.png",
  //   imgAlt: "Web app to remotely search the wikipedia",
  //   badgeFont: {
  //     fontOne: <FontAwesomeIcon icon={faSearch} className="iconBall" />,
  //     fontTwo:  <FontAwesomeIcon icon={faWikipediaW} className="iconBall" />,
  //     fontThree:  <FontAwesomeIcon icon={faJs} className="iconBall" />,
  //   }
  // },
  {
    name:"PokeCardGameBoy Store",
    describe: "An ecommerce web page populated with pokemon data from the pokeApi",
    skills: "JavaScript + HTML + CSS",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/pokeLoja2",
    deployLink: "https://malanski.github.io/pokeLoja2/",
    image: "https://github.com/malanski/images/raw/main/pokestore1.png",
    imgAlt: "Pokémon card game styled web store",
    details: "a responsive Ecommerce website with HTML, CSS, SASS, JavaScript, and API is one of my first application projects. Henrique Marques is the mentor for the project. To display the most pertinent images discovered by the API, I made the decision to draw influence from the Pokémon card game.",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall api" width="50px" />,
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
    details: "a project developed with javascript, HTML, and CSS. It can to be played on any web browser.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  {
    name:"Calculator",
    describe: "Calculator app",
    skills: "JavaScript + HTML + CSS",
    type: "Calculator",
    repositoryLink: "https://github.com/malanski/CalculatorX",
    deployLink: "https://malanski.github.io/CalculatorX/",
    image: "https://github.com/malanski/images/raw/main/calculator.png",
    imgAlt: "Web calculator app layout",
    details: "a responsive web application called CalculatorX was created using HTML, CSS (SASS), and JavaScript. The project's goal is to develop a basic arithmetic calculator that can be used online. Users can enter numbers and carry out mathematical operations including addition, subtraction, multiplication, and division.",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faCalculator} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
    }
  },
  // {
  //   name:"Tribute Page",
  //   describe: "Basic HTML clean coding",
  //   skills: "HTML + CSS",
  //   type: "Tribute Page",
  //   repositoryLink: "https://codepen.io/malanski/pen/qBxEVMP",
  //   deployLink: "https://codepen.io/malanski/full/qBxEVMP",
  //   image: "https://github.com/malanski/images/raw/main/TributePage.png",
  //   imgAlt: "Beakman's Tribute Page",
  //   details: "A HTML and CSS tribute page",
  //   badgeFont: {
  //     fontOne: <FontAwesomeIcon icon={faPerson} className="iconBall" />,
  //     fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
  //     fontThree: <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />,
  //   }
  // },
  // {
  //   name:"Complete HTML Form",
  //   describe: "Form elements and HTML clean coding",
  //   skills: "HTML + CSS",
  //   type: "Frontend Form",
  //   repositoryLink: "https://github.com/malanski/courses-rank",
  //   deployLink: "https://malanski.github.io/courses-rank/",
  //   image: "https://github.com/malanski/images/raw/main/CoursesRank.png",
  //   imgAlt: "Web form print screen",
  //   details: "This is a ReactJs Application to rate Online courses. A place for costumers/students evaluate their Institutions/Schools.",
  //   badgeFont: {
  //     fontOne: <FontAwesomeIcon icon={faList} className="iconBall" />,
  //     fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
  //     fontThree: <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />,
  //   }
  // },

];
export default listProjects;