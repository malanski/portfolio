
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiIcon from '../../../src/assets/APIlogo.png';
import { faCss3, faCss3Alt, faHtml5, faJs, faReact, faSass, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faDatabase, faGamepad, faList, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

const listProjects = [
  {
    name:"Full CRUD Form",
    describe: "Interface with NodeJs Backend",
    skills: "ReactJs + Material UI",
    type: "Fullstack Form",
    repositoryLink: "https://github.com/malanski/development-challenge-four",
    deployLink: "https://development-challenge-four-49p3x3ig5-malanski.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/crudFullStack.png",
    imgAlt: "A backend form web page print screen",
    details: "A web application (CRUD) to manage patient registers (Patient's name, birth date, email and address).",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faDatabase} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faJs} className="iconBall" />,
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
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faGamepad} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faJs} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3} className="iconBall" />,
    }
  },
  {
    name:"Poke-Store",
    describe: "Web Store Consuming Pokémon API",
    skills: "NextJs + Sass",
    type: "E-commerce",
    repositoryLink: "https://github.com/malanski/poke-store-next",
    deployLink: "https://poke-store-next.vercel.app/",
    image: "https://github.com/malanski/images/raw/main/pokeStoreNext.png",
    imgAlt: "Pokémon API based Web store print screen",
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />,
      fontTwo: <FontAwesomeIcon icon={faReact} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faSass} className="iconBall" />,
    }
  },
  {
    name:"Weather Weekly",
    describe: "Consuming openweathermap.org API",
    skills: "JavaScript + HTML + CSS",
    type: "Search",
    repositoryLink: "https://github.com/malanski/weather-weekly",
    deployLink: "https://malanski.github.io/weather-weekly/",
    image: "https://github.com/malanski/images/raw/main/weather-weekly.png",
    imgAlt: "Web app consuming weather API",
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
    repositoryLink: "https://github.com/malanski/sintaxe-e-operadores",
    deployLink: "https://malanski.github.io/sintaxe-e-operadores/",
    image: "https://github.com/malanski/images/raw/main/starwars1.png",
    imgAlt: "Web app consuming Star Wars characters list API",
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
    badgeFont: {
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
    badgeFont: {
      fontOne: <img src={apiIcon} alt="API icon" className="iconBall" width="100%" />,
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
    type: "FrontendForm",
    repositoryLink: "https://github.com/malanski/courses-rank",
    deployLink: "https://malanski.github.io/courses-rank/",
    image: "https://github.com/malanski/images/raw/main/CoursesRank.png",
    imgAlt: "Beakman's SPC styled Tribute Page",
    badgeFont: {
      fontOne: <FontAwesomeIcon icon={faList} className="iconBall" />,
      fontTwo: <FontAwesomeIcon icon={faHtml5} className="iconBall" />,
      fontThree: <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />,
    }
  },

];
export default listProjects;