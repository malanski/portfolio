
import './App.scss';
// Libraries
import { Routes, Route, HashRouter } from 'react-router-dom';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';


// Navigation
import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { Skills } from './pages/skills'


function App() {
  return (
    <div className="App">
     <HashRouter>

       <Header />

        <main>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/projects' element={<Projects />} />
            <Route path ='/skills' element={<Skills />} />
          </Routes>
        </main>

        <Footer />

     </HashRouter>
    </div>
  );
}

export default App;
